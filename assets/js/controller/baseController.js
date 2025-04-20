export function navbarController ($scope, $state){
    $scope.isDropdownActive = function (states) {
        return states.includes($state.current.name);
    };
}