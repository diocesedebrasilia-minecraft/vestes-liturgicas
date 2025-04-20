export function gestoesAlumniController($scope, $http) {
    // Carrega o JSON de gestões
    $http.get('assets/data/gestoes.json').then(function (response) {
        console.log(response.data);

        if (response.data && response.data.gestoes) {
            $scope.gestoes = response.data.gestoes;
        } else {
            $scope.error = "Nenhuma gestão encontrada.";
        }
    }).catch(function (error) {
        console.error("Erro ao carregar o JSON:", error);
        $scope.error = "Erro ao carregar os dados das gestões.";
    });
}
