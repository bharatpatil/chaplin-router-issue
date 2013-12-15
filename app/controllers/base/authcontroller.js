define(['chaplin', 'views/site-view', 'views/topbar-view'], function (Chaplin, SiteView, TopbarView) {
    'use strict';

    var AuthController = Chaplin.Controller.extend({
        // Place your application-specific controller features here.
        beforeAction: function () {
            this.compose('site', SiteView);
            this.compose('header', TopbarView);
        },
        assignView: function (objView) {
            if (this.view) this.view.dispose();
            this.view = objView;
            return this.view;
        }
    });

    return AuthController;
});
