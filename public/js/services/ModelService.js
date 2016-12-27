// public/js/services/ModelService.js
angular.module('ModelService', []).factory('Model', ['$http', function($http) {

    return {
        // call to get all models
        get : function() {
            return $http.get('/test');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new model
        create : function(modelData) {
            return $http.post('/api/models', modelData);
        },

        // call to DELETE a model
        delete : function(id) {
            return $http.delete('/api/models/' + id);
        }
    }       

}]);