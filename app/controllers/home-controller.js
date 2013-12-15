define([
    'controllers/base/authcontroller',
    'models/survey',
    'views/survey-view',
    'models/survey-collection',
    'text!templates/survey.hbs',
    'text!templates/survey-list.hbs',
    'views/surveyOne-view',
    'views/base/collection-view',
    'views/surveyOnes-view',
], function (AuthController, Survey, SurveyView, SurveyCollection, nosurveyTemplate, surveylistTemplate, SurveyOneView, CollectionView, SurveyOnesView) {
    'use strict';

    var SurveyController = AuthController.extend({
        show: function (params) {
        },
        renderCollection: function () {

        });

    return SurveyController;
});
