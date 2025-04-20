export function seminaristaController($mdEditDialog, $q, $scope, $timeout, $http) {
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
        order: null,
        limit: 10,
        page: 1
    };

    // Inicializando a lista de downloads como vazia
    $scope.downloads = { count: 0, data: [] };

    // Variável para o filtro único
    $scope.filter = {
        query: ''
    };

    // Carregar dados do arquivo JSON
    $http.get('assets/data/downloads.json')
        .then(function (response) {
            $scope.downloads.data = response.data; // Dados carregados com sucesso
            $scope.downloads.count = response.data.length;
        })
        .catch(function (error) {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });

    // Função para filtrar os downloads
    $scope.filterDownloads = function (item) {
        if (!$scope.filter.query) return true; // Retorna todos os itens se o filtro estiver vazio
        const query = $scope.filter.query.toLowerCase();
        return item.descricao.toLowerCase().includes(query) || item.categoria.toLowerCase().includes(query);
    };

    $scope.toggleLimitOptions = function () {
        $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
    };

    $scope.loadStuff = function () {
        $scope.promise = $timeout(function () {
            // loading
        }, 2000);
    };

    $scope.logOrder = function (order) {
        console.log('order: ', order);
    };

    $scope.logPagination = function (page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
    };
}