/**
 * Created by Easwar Raju on 12/20/2015.
 */

(function(){
    angular.module('shopCart').controller('cartController', ['$scope', 'shopCartService', function($scope, shopCartService){

        // shared cart data
        $scope.cart = shopCartService.cart;

        // cart table data
        $scope.objCartItemsData = {
        };

        // increases number of items
        $scope.addItem = function(item){
            $scope.cart.cartItems.push(item);
        };

        // reduces number of items
        $scope.reduceItem = function (itemData) {
            $scope.cart.cartItems.splice(itemData.itemFirstIndex, 1);
        };

        // removes an item completely
        $scope.removeItem = function (item) {
            $scope.cart.cartItems = $scope.cart.cartItems.filter(function(filterItem){
                return filterItem.itemName !== item;
            });
        };

        // removes all items from cart
        $scope.clearCart = function(){
            $scope.cart.cartItems = [];
        };

        // builds cart data from cart items
        var updateCartData = function(){
            $scope.cart.totalPrice = 0;
            $scope.objCartItemsData = {};
            angular.forEach($scope.cart.cartItems, function(item, itemIndex){
                if ($scope.objCartItemsData[item.itemName] === undefined){
                    $scope.objCartItemsData[item.itemName] = {
                        numberOfItems : 1,
                        price : item.itemPrice,
                        item: item,
                        itemFirstIndex : itemIndex
                    };
                }
                else{
                    $scope.objCartItemsData[item.itemName].numberOfItems++;
                    $scope.objCartItemsData[item.itemName].price += item.itemPrice;
                }
                $scope.cart.totalPrice += item.itemPrice;
            });
        };

        $scope.$watchCollection('cart.cartItems', updateCartData);

    }]);
})();