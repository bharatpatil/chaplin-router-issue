define([
    'chaplin',
    'controllers/base/authcontroller',
    'models/base/model',
    'views/survey-view',
    'models/base/model',
    'text!templates/survey.hbs',
], function (Chaplin, AuthController, Survey, SurveyView) {
    'use strict';

    var SurveyController = AuthController.extend({
        signForm: null,
        controllerName: 'SurveyController',
        initialize: function () {
            setSelf(this);
        },
        show: function (params) {
            console.log(self.controllerName + '.show');
            this.model = new Survey();
            this.view = new SurveyView({
                model: this.model
            });
        }
    });
    var self;

    function setSelf(that) {
        self = that;
    }

    return SurveyController;
});
