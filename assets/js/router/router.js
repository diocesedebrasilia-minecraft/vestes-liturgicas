import { navbarController } from "../controller/baseController.js";
import { colegioController } from "../controller/ColegioController.js";
import { colegiosController } from "../controller/ColegiosController.js";
import { comissaoController } from "../controller/ComissaoController.js";
import { diretoriaController } from "../controller/DiretoriaController.js";
import { downloadController } from "../controller/DownloadsController.js";
import { gestoesAlumniController } from "../controller/GestoesAlumniController.js";
import { progressController } from "../controller/progressController.js";
import { senioresRegularesController } from "../controller/SenioresRegularesController.js";

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$mdThemingProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
        'use strict';

        // Remover a exclamação (!) da URL
        var SEM_PREFIXO = '';
        $locationProvider.hashPrefix(SEM_PREFIXO);

        // Utilizando o HTML5 History API (descomente se desejar URLs limpas)
        // $locationProvider.html5Mode(true);

        // Configuração de rotas padrão
        $urlRouterProvider.otherwise('/');

        // Configuração do tema padrão
        $mdThemingProvider.theme('default')
            .primaryPalette('blue');
    }
]);

app.controller('downloadController', downloadController);
app.controller('colegiosController', colegiosController);
app.controller('ColegioController', colegioController);
app.controller('NavbarController', navbarController);
app.controller('ComissaoController', comissaoController);
app.controller('gestoesAlumniController', gestoesAlumniController)
app.controller('diretoriaController', diretoriaController)
app.controller('senioresRegulares', senioresRegularesController)
app.controller('ProgressController', progressController)

app.run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        // Atualizar o título da página dinamicamente com base no estado atual
        $rootScope.pageTitle = toState.title || 'DeMolay Alumni Paraíba'; // Título padrão
    });
});

app.controller('AppCtrl', function ($scope) {
    var imagePath = 'assets/img/diretoria/user_senior.jpg';

    $scope.phones = [
        {
            type: 'Home',
            number: '(555) 251-1234',
            options: {
                icon: 'communication:phone'
            }
        },
        {
            type: 'Cell',
            number: '(555) 786-9841',
            options: {
                icon: 'communication:phone',
                avatarIcon: true
            }
        },
        {
            type: 'Office',
            number: '(555) 314-1592',
            options: {
                face: imagePath
            }
        },
        {
            type: 'Offset',
            number: '(555) 192-2010',
            options: {
                offset: true,
                actionIcon: 'communication:phone'
            }
        }
    ];
    $scope.todos = [
        {
            face: imagePath,
            what: 'My quirky, joyful porg',
            who: 'Kaguya w/ #qjporg',
            when: '3:08PM',
            notes: " I was lucky to find a quirky, joyful porg!"
        },
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
    ];
});

