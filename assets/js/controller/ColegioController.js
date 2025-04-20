export function colegioController($scope, $stateParams, $http) {
    const nrColegio = $stateParams.nrColegio; // Captura o parâmetro nrColegio

    // Carrega o JSON
    $http.get('assets/data/colegios.json').then(function (response) {
        const colegios = response.data.data; // Array de colégios no JSON
        const colegioEncontrado = colegios.find(colegio => colegio.nrColegio === nrColegio);

        if (colegioEncontrado) {
            $scope.colegio = colegioEncontrado;
        } else {
            $scope.error = "Colégio não encontrado.";
        }
    }).catch(function () {
        $scope.error = "Erro ao carregar os dados do Colégio.";
    });
}