define([
    'chaplin',
    'views/base/view',
    'text!templates/survey.hbs'
], function (Chaplin, View, template) {
    'use strict';

    var SurveyView = View.extend({
        viewName: 'SurveyView',
        // Automatically render after initialize
        autoRender: false,
        template: template,
        className: 'survey occupyScreen',

        // Save the template string in a prototype property.
        // This is overwritten with the compiled template function.
        // In the end you might want to used precompiled templates.
        initialize: function (options) {
            setSelf(this);
//            this.template = options.template;
            $('#topbarRightContainer').html('<div class="settingBtnDiv" id="settingsBtn"><span  class="glyphicon glyphicon-cog"></span><div>');
        },
        afterRender: function () {
            console.log(self.viewName + '.afterRender');
            this.$('#noSurveyString').html('');
        }
    });
    var self;

    function setSelf(that) {
        self = that;
    }

    return SurveyView;
});
