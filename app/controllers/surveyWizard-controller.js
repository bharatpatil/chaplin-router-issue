define([
    'chaplin',
    'controllers/base/authcontroller',
    'views/surveyWizard-view',
    'models/base/model',
], function (Chaplin, AuthController, SurveyWizardView, Survey) {
    'use strict';

    var SurveyWizardController = AuthController.extend({
        controllerName: 'SurveyWizardController',
        initialize: function () {
            setSelf(this);
            AuthController.prototype.initialize.apply(this, arguments);
        },
        begin: function (params) {
            console.log(this.controllerName + '.begin');
            this.model = new Survey();
            this.view = new SurveyWizardView({
                model: this.model
            });
        }
    });

    var self;

    function setSelf (that) {
        self = that;
    }

    return SurveyWizardController;
});
