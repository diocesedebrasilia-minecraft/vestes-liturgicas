export function senioresRegularesController($mdEditDialog, $q, $scope, $timeout, $http) {
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
        limit: 30,
        page: 1
    };

    // Inicializando a lista de seniores como vazia
    $scope.seniores = { count: 0, chapterCount: 0, data: [] };

    // Variável para o filtro único
    $scope.filter = {
        query: ''
    };

    // Função para contar a quantidade de seniores
    function contarSeniores(dados) {
        let totalSeniores = 0;

        // Contando os seniores dentro de cada capítulo
        dados.forEach(captitulo => {
            totalSeniores += captitulo.seniores.filter(senior => senior.nome).length;
        });

        return totalSeniores;
    }

    // Carregar dados do arquivo JSON
    $http.get('assets/data/senioresregulares.json')
        .then(function (response) {
            $scope.seniores.data = response.data; // Atribui os dados aos capítulos

            // Contar o número total de seniores
            $scope.seniores.count = contarSeniores(response.data); // Chama a função para contar os seniores

            // Ajustar contagem de capítulos válidos
            $scope.seniores.chapterCount = $scope.seniores.data.filter(chapter => chapter.capitulo && chapter.capitulo !== '').length;
        })
        .catch(function (error) {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });

    // Função para filtrar os seniores
    $scope.filterSeniores = function (item) {
        if (!$scope.filter.query) return true; // Retorna todos os itens se o filtro estiver vazio
        const query = $scope.filter.query.toLowerCase();
        return item.capitulo.toLowerCase().includes(query) || item.cidade.toLowerCase().includes(query);
    };

    // Função para atualizar a contagem de seniores com o filtro aplicado
    $scope.updateSenioresCount = function () {
        const filteredData = $scope.seniores.data.filter($scope.filterSeniores);
        $scope.seniores.count = contarSeniores(filteredData); // Recalcular a quantidade de seniores com o filtro aplicado
    };

    // Função chamada quando o filtro for alterado
    $scope.$watch('filter.query', function () {
        $scope.updateSenioresCount(); // Atualiza a contagem de seniores sempre que o filtro mudar
    });

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
        console.log('Página(s): ', page);
        console.log('limit: ', limit);
    };
}
