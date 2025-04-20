export function colegiosController($mdEditDialog, $q, $scope, $timeout, $http, $sce) {
    'use strict';

    $scope.selected = [];
    $scope.limitOptions = [5, 10, 15, 30];

    $scope.options = {
        rowSelection: true,
        multiSelect: true,
        autoSelect: true,
        decapitate: false,
        largeEditDialog: true,
        boundaryLinks: false,
        limitSelect: true,
        pageSelect: true
    };

    $scope.query = {
        order: 'nrColegio',
        limit: 10,
        page: 1
    };

    // Inicializando a lista de colegios como vazia
    $scope.colegios = { count: 0, data: [] };

    // Função para retornar o badge com base na situação
    $scope.getSituacaoBadge = function(situacao) {
        switch(situacao) {
            case 'Ativo':
                return $sce.trustAsHtml('<span class="badge badge-pill badge-success">Ativo</span>');
            case 'Inativo':
                return $sce.trustAsHtml('<span class="badge badge-pill badge-dark">Inativo</span>');
            case 'Irregular':
                return $sce.trustAsHtml('<span class="badge badge-pill badge-warning">Irregular</span>');
            case 'Suspenso':
                return $sce.trustAsHtml('<span class="badge badge-pill badge-danger">Suspenso</span>');
            default:
                return $sce.trustAsHtml('<span class="badge text-bg-secondary">Unknown</span>');
        }
    };

    // Carregar dados do arquivo JSON
    $http.get('assets/data/colegios.json')
        .then(function (response) {
            $scope.colegios = response.data; // Dados carregados com sucesso
        })
        .catch(function (error) {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });

    $scope.toggleLimitOptions = function () {
        $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
    };

    $scope.loadStuff = function () {
        $scope.promise = $timeout(function () {
            // loading
        }, 2000);
    }

    $scope.logOrder = function (order) {
        console.log('order: ', order);
    };

    $scope.logPagination = function (page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
    }
}
