define([
    'chaplin',
    'underscore',
    'views/base/view',
    'text!templates/beginSurvey.hbs'
], function (Chaplin, _, View, template) {
    'use strict';

    var SurveyWizard = View.extend({
        viewName: 'SurveyWizard',
        autoRender: true,
        container: '#surveyWizard',
        className: 'container occupyScreen',
        template: template,
        viewOptions: null,
        afterRender: function () {
            console.log('SurveyWizardView.afterRender');
            $('#topbarCenterContainer').html('&nbsp;');
            $('#topbarRightContainer').html('<div class="settingBtnDiv" id="settingsBtn"><span  class="glyphicon glyphicon-cog"></span><div>');
            $('#topbarLeftContainer').unbind('click', self.goBack).html('');

        }
    });

    return SurveyWizard;
});
