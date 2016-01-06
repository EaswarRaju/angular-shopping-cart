/**
 * Created by Easwar Raju on 12/20/2015.
 */

//controller to list items in store

(function(){
    angular.module('shopCart').controller('itemsController', ['$scope', 'shopCartService', function($scope, shopCartService){

        $scope.cart = shopCartService.cart;

        $scope.searchCart = {
            itemName: ''
        };

        // adds items to cart
        $scope.addToCart = function(item){
            $scope.cart.cartItems.push(item);
            $scope.cart.totalPrice += item.itemPrice;
        };

        // getting items initially
        shopCartService.getItems().then(function(response){
            $scope.cart.itemList = response.data;
        });

    }]);
})();