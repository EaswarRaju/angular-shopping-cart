/**
 * Created by Easwar Raju on 12/19/2015.
 */

(function(){
    var shopCart = angular.module('shopCart', ['ngRoute']);

    shopCart.config(function($routeProvider) {
        $routeProvider
            .when('/itemlist', {
                templateUrl: 'partials/itemlist.html',
                controller: 'itemsController'
            })
            .when('/cart', {
                templateUrl: 'partials/cart.html',
                controller: 'cartController'
            })
            .otherwise({
                redirectTo: '/itemlist'
            });
    });
})();