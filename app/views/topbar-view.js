define(['chaplin', 'views/base/view', 'text!templates/topbar.hbs'], function (Chaplin, View, template) {
    'use strict';

    var TopbarView = View.extend({
        viewName: 'TopbarView',
        container: '#header',
        template: template,
        events: {
            "click #settingsBtn": "redirectToSettings"
        },
        initialize: function () {
            View.prototype.initialize.apply(this, arguments);
            setSelf(this);
            this.subscribeEvent('headerChange', this.headerChange);
        },
        redirectToCorrectSettings: function () {
            this.$('#topbarLeftContainer').html('<span id="topbarLeft" class="surveyIconCol glyphicon glyphicon-chevron-left"></span>');
            this.$('#topbarLeftContainer').bind('click', self.goBack);
                return Chaplin.helpers.redirectTo('settings#show');
        },
        redirectToSettings: function () {
            return self.redirectToCorrectSettings();
        },
        goBack: function(evt){
            console.log(self.viewName + '.goBack');
            self.$('#topbarLeftContainer').unbind('click', self.goBack).html('');
            var lastRoute = window.lastRoute;
            window.lastRoute = null;
            if(lastRoute != null)
                Chaplin.helpers.redirectTo({url: lastRoute});
        },
        headerChange: function () {
            console.log(self.viewName + '.headerChange');
        },
        afterRender: function () {
            console.log(self.viewName+'.afterRender');
        }
    });
    var self;

    function setSelf(that) {
        self = that;
    }

    return TopbarView;
});
