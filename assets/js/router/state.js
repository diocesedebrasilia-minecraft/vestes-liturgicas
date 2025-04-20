app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    // Rota padrão.
    $urlRouterProvider.otherwise("/");

    // Estados
    $stateProvider
        // Home
        .state('home', {
            url: '/',
            title: 'Página Inicial',
            templateUrl: 'views/home.html'
        })
        .state('diretoria', {
            url: '/diretoria',
            title: 'Diretoria Executiva',
            templateUrl: 'views/diretoria.html'
        })
        .state('conselhoFiscal', {
            url: '/conselho-fiscal',
            title: 'Conselho Fiscal',
            templateUrl: 'views/conselho-fiscal.html'
        })
        .state('colegios', {
            url: '/colegios',
            title: 'Colégios Alumni',
            templateUrl: 'views/colegios.html',
        })
        .state('colegio', {
            url: '/colegio/col_:nrColegio',
            templateUrl: 'views/colegio.html',
            controller: 'ColegioController'
        })
        .state('convenios', {
            url: '/convenios-parcerias',
            title: 'Convênios e Parcerias',
            templateUrl: 'views/parcerias.html'
        })
        .state('comissoes', {
            url: '/comissoes',
            templateUrl: 'views/comissoes.html'
        })
        .state('comissao', {
            url: '/comissao/:path',
            templateUrl: 'views/comissao.html',
            controller: 'ComissaoController'
        })
        .state('downloads', {
            url: '/downloads',
            title: 'Downloads',
            templateUrl: 'views/downloads.html'
        })
        .state('gestoesAnteriores', {
            url: '/gestoes-anteriores',
            title: 'Administrações Anteriores',
            templateUrl: 'views/gestoes-anteriores.html',
            controller: 'gestoesAlumniController'
        })
        .state('senioresregulares', {
            url: '/senioresregulares',
            title: 'Sêniores Regulares',
            templateUrl: 'views/seniores-regulares.html',
            controller: 'senioresRegulares'
        })
        .state('dia-i-iniciacoes-2025', {
            url: '/dia-i-2025',
            title: 'Dia "I" de Iniciações 2025',
            templateUrl: 'views/dia-i-iniciacoes.html'
        })
        .state('testes', {
            url: '/testes',
            title: 'testes',
            templateUrl: 'views/testes.html'
        });
        
})

