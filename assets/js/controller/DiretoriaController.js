export function diretoriaController($scope, $stateParams, $http) {
    const cargoParam = $stateParams.path; // Assume que "path" será o cargo (ex.: "Presidente")

    // Carrega o JSON
    $http.get('assets/data/diretoria.json').then(function (response) {
        const diretoria = response.data;

        // Busca o membro da diretoria pelo cargo
        const membro = diretoria.find(item => item.cargo.toLowerCase() === cargoParam.toLowerCase());
        if (membro) {
            $scope.diretoria = membro;
        } else {
            $scope.error = "Membro da diretoria não encontrado.";
        }
    }).catch(function () {
        $scope.error = "Erro ao carregar os dados da diretoria.";
    });
}
