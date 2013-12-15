define(['chaplin', 'views/site-view'], function (Chaplin, SiteView) {
    'use strict';

    var NoHeaderController = Chaplin.Controller.extend({
        // Place your application-specific controller features here.
        beforeAction: function () {
            this.compose('site', SiteView);
            if (this.afterBeforeAction)
                this.afterBeforeAction.apply(this, arguments);
        },
        assignView: function (objView) {
            if (this.view) this.view.dispose();
            this.view = objView;
            return this.view;
        }
    });

    return NoHeaderController;
});
