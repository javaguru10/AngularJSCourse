( function () {
'use strict';

    angular.module('LunchChecker', [])

    .controller('lunchCheckerController', function( $scope)
    {
        $scope.customStyle = {};
        $scope.itemsList = "";
        $scope.message = "";
        $scope.checkLunchList = function()
        {
            if( $scope.itemsList.trim().length == 0)
            {
                $scope.message = "Please enter data first";
                $scope.customStyle.style = {"color":"red"};

                return;
            }
            var itemsArray =  $scope.itemsList.split(",");

            console.log(itemsArray.length);
            //
            $scope.customStyle.style = {"color":"green"};
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
