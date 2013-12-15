define(['chaplin', 'views/site-view', 'views/topbar-view'], function (Chaplin, SiteView, TopbarView) {
    'use strict';

    var Controller = Chaplin.Controller.extend({
        // Place your application-specific controller features here.
        beforeAction: function () {
            this.compose('site', SiteView);
            this.compose('header', TopbarView);
            if (this.afterBeforeAction)
                this.afterBeforeAction.apply(this, arguments);
        },
        assignView: function (objView) {
            if (this.view) this.view.dispose();
            this.view = objView;
            return this.view;
        }
    });

    return Controller;
});
