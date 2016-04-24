angular.module('app.services', [])

.factory('Session', function($interval){

	// get window.localStorage 
    var session = window.localStorage.getItem('checkins');
    
    session = (session) != null ? JSON.parse(session) : {'checkins':[]};

    // do update if necessary
    var last = JSON.stringify(session);
    $interval(function(){
        var sessionStr = JSON.stringify(session);
        if(sessionStr != last) {
            window.localStorage.setItem('checkins', sessionStr);
            last = sessionStr;
            delete sessionStr;
        }
    }, 300);

    return session;
})

.factory('reverseGeocoder', function($q, $http){

    function parseAddressFromApiResponse(response) {

        var parts = [
            'street',
            'adminArea6',
            'adminArea5',
            'adminArea4',
            'adminArea3',
            'postalCode',
            'adminArea2',
            'adminArea1'
        ].reduce(function(carry, part){
            if(response[part])
                carry.push(response[part]);
            return carry;
        }, []);
        return {
            parts: parts,
            text: parts.join(",\r\n"),
            map: response.mapUrl
        };
    }

    return {
        getAddress: function(latitude, longitude) {
            var key = 'glZYY2d2Nb7H8aGz2ggDsf7DIKXckzbM';
            var deferred = $q.defer();
            $http.get('http://www.mapquestapi.com/geocoding/v1/reverse?key=' + key + '&location=' + latitude + ',' + longitude)
                .then(function(response){
                    if(response.data.results[0] && response.data.results[0].locations[0]) {
                        return deferred.resolve(parseAddressFromApiResponse(response.data.results[0].locations[0]));
                    }
                    deferred.reject();
                }, function(){
                    deferred.reject();
                });
            return deferred.promise;
        }
    }
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

