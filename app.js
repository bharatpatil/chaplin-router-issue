
'use strict'
requirejs.config({
    /**
     /app/ does work on desktop browsers but not in phonegap
     app/ works in phonegap but not in desktop browsers
     */
    baseUrl: 'app/',
    urlArgs: "bust=35w", //+ (new Date()).getTime(),
    paths: {
        'jquery': 'libs/jquery/jquery-2.0.3.min',
        'underscore': 'libs/underscore/underscore-1.5.2.min',
        'backbone': 'libs/backbone/exoskeleton.min',
        'chaplin': 'libs/chaplin/chaplin',
        'fastClick' : 'libs/plugins/fastclick/fastclick',
        'handlebars' : 'libs/handlebars/handlebars',
        'text' : 'libs/requirejs-text/text',
        'i18n':'libs/i18n/i18next.amd.withJQuery-1.7.1.min',
        'util': 'util',
        'bootstrap':'libs/bootstrap/bootstrap.min',
        'application': 'application'
    },
    shim: {
        underscore: {
            exports: '_' // backbone requires "_" var
        },
        backbone: {
            exports: 'Backbone',
            deps: ['underscore', 'jquery']       // underscore, jquery are backbone dependencies
        },
        fastClick :{
            exports : 'FastClick'
        },
        handlebars : {
            exports: 'Handlebars'
        },
        i18n:{
            deps:['jquery']
        },
         bootstrap:{
            deps:['jquery']
        }
    }
});



require(['jquery', 'underscore', 'backbone','fastClick', 'application', 'routes', 'chaplin','bootstrap','i18n'],
    function ($, _, Backbone, fastClick, Application, routes, Chaplin) {

        //first load internationalization then only initialize app
        $.i18n.init({
            lng: 'en-US'
            , ns: 'resource'
            , resGetPath: 'app/locales/__ns__-__lng__.json'
            , fallbackLng: 'en-US'
        }).done(function(){
                new Application({ routes: routes, controllerSuffix: '-controller',root:'/'});
            });



        $(document).ready(function () {
           fastClick.attach(document.body);
        });
    });
