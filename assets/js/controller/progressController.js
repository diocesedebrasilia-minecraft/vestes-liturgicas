export function progressController($scope, $http) {
    // Carrega o JSON de gestões
    $scope.goal = 4500;
    $scope.raised = 0;
    $scope.percentage = 0;

    $http.get('assets/data/diaiiniciacoes.json').then(function (response) {
        var donations = response.data;
        var total = 0;

        donations.forEach(function (donation) {
            total += parseFloat(donation.valor.replace(',', '.'));
        });

        $scope.raised = total;
        $scope.percentage = ($scope.raised / $scope.goal) * 100;
    });
};
