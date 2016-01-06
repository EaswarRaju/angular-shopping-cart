/**
 * Created by Easwar Raju on 12/20/2015.
 */


(function(){
    angular.module('shopCart').service('shopCartService', ['$http', function($http){
        // gets items data from server
        this.getItems = function(){
            return $http({
                'method': 'get',
                'url': 'data/items.json'
            });
        };

        // shares cart data between controllers
        this.cart = {
            itemList : [],
            cartItems : [],
            totalPrice: 0
        };
    }]);
})();