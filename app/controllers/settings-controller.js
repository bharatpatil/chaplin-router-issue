define([
    'chaplin',
    'controllers/base/authcontroller',
    'views/settings-view',
    'views/survey-view'

], function (Chaplin, AuthController, SettingsView, SurveyView) {
    'use strict';

    var SettingsController = AuthController.extend({
        initialize: function () {
            setSelf(this);
        },
        show: function () {

        }

    });
    var self;

    function setSelf(that) {
        self = that;
    }

    return SettingsController;
});
