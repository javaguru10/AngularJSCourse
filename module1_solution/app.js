( function () {
'use strict';

    angular.module('LunchChecker', [])

    .controller('lunchCheckerController', function( $scope)
    {
        $scope.itemsList = "";
        $scope.message = "";
        $scope.checkLunchList = function()
        {
            if( $scope.itemsList.trim().length == 0)
            {
                $scope.message = "Please enter data first";
                return;
            }
            var itemsArray =  $scope.itemsList.split(",");

            console.log(itemsArray.length);
            //
            if( itemsArray.length <= 3 )
            {
                $scope.message = "Enjoy!";
            }
            else
            {
                $scope.message = "Too much!";
            }
        };

       

    



    });

    

    
    
})();
