define([
    'chaplin',
    'views/base/view',
    'text!templates/survey.hbs'
], function (Chaplin, View, template) {
    'use strict';

    var SurveyView = View.extend({
        viewName: 'SurveyView',
        // Automatically render after initialize
        autoRender: true,
        template: template,
        container: '#surveyWizard',
        events: {
            'click .startSurvey': 'startSurvey'
        },
        startSurvey: function (evt) {
            console.log(this.viewName + '.startSurvey');
            console.log(evt.currentTarget.getAttribute('data-guid'));
            var surveyGuid = evt.currentTarget.getAttribute('data-guid');
            return Chaplin.helpers.redirectTo('surveyWizard#begin', {id: surveyGuid});
        }
    });

    return SurveyView;
});
