export function comissaoController ($scope, $stateParams, $http) {
    const path = $stateParams.path;
    // Carrega o JSON
    $http.get('assets/data/comissoes.json').then(function (response) {
        const comissoes = response.data.comissoes[0];
        if (comissoes[path]) {
            $scope.comissao = comissoes[path];
        } else {
            $scope.error = "Comissão não encontrada.";
        }
    }).catch(function () {
        $scope.error = "Erro ao carregar os dados da comissão.";
    });
}