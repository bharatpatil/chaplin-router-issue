define(function () {
    'use strict';

    // The routes for the application. This module returns a function.
    // `match` is match method of the Router
    return function (match) {
        match('', 'survey#show');
        match('survey', 'survey#show');
        match('settings', 'settings#show');
        match('surveyWizard/:id', 'surveyWizard#begin');
    };
});
