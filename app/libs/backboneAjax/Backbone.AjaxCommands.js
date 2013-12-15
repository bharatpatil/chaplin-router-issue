// Backbone.AjaxCommands
// ---------------------
 
Backbone.AjaxCommands = (function (Backbone, $, _) {
    var Commands = {};
 
    // Private data
    // ------------
    var commandList = {};
    var baseUrl ='';
 
    // Public API
    // ----------
 
    Commands.setBaseUrl = function(url){
        baseUrl = url;
    }

    Commands.getBaseUrl = function(){
        return baseUrl;
    }

    Commands.register = function (commandName, options) {
        commandList[commandName] = options;
    }
 
    Commands.get = function (commandName) {
        var options = commandList[commandName];
        options = options || {};
        options = _.clone(options);
        var command = new Commands.Command(commandName, options);
        return command;
    };
 
    // Command Type
    // -------------------
 
    Commands.Command = function (name, options) {
        this.name = name;
        this.options = options
    };
 
    _.extend(Commands.Command.prototype, Backbone.Events, {
        execute: function (data) {
            console.log(JSON.stringify(arguments));
            jQuery.support.cors = true;
            var that = this;
 
             var responseType = {
                ERROR: "ERROR",
                SUCCESS: "SUCCESS",
                NOT_LOGGED_IN: "NOT_LOGGED_IN",
                ACCESS_DENIED: "ACCESS_DENIED"
            }

            var lrsErrorSeverity = {
                RECOVERABLE: "RECOVERABLE",
                USER_FACING: "USER_FACING",  //Doesn't this imply we need i18n lookup codes?
                USER_HIDDEN: "USER_HIDDEN"
            }

            var config = this.getAjaxConfig(this.options, data);
 
            this.trigger("before:execute");
 
            var request = $.ajax(config);

            request.done(function (response) {
                console.log(JSON.stringify(arguments));

                if (response.responseType == responseType.SUCCESS)
                {
                    that.trigger("success", response);
                    return;    
                }

                else if (response.responseType == responseType.ERROR) {
                    if(response.errorDetail && response.errorDetail.code && [2003,2006,2009].indexOf(response.errorDetail.code) == -1)
                    {
                        alert($.i18n.t('error-'+response.errorDetail.code));
                    }
                    that.trigger("error", response);
                } 
                else
                {
                    that.trigger("error", response);
                } 

                
            });
 
            request.fail(function (response) {
                console.log(JSON.stringify(arguments));
                that.trigger("error", response);
            });
 
            request.always(function (response) {
                console.log(JSON.stringify(arguments));
                that.trigger("complete", response);
            });
        },
 
        getAjaxConfig: function (options, data) {
            var url = this.getUrl(options, data);

            var ajaxConfig = {
                type: "POST",
                dataType: "JSON",
                url: url,
                accept:"*/*",
                contentType:"application/json",
            };
 
            _.extend(ajaxConfig, options);

            ajaxConfig.url = Backbone.AjaxCommands.getBaseUrl() + ajaxConfig.url;       

            if (typeof data == 'undefined') {
                ajaxConfig.data = null;
            } else if (typeof data == 'object') {
                ajaxConfig.data = JSON.stringify(data);
            } else {
                ajaxConfig.data = data;
            }
 
            return ajaxConfig;
        },
 
        getUrl: function (options, data) {
            return options.url;
        }
    });
 
    return Commands;
})(Backbone, $, _);