/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Lemon.Application', {
    extend: 'Ext.app.Application',

    name: 'Lemon',
    defaultToken: 'home',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        // TODO - Launch the application
        var that = this;
        // Ajax Response Error Handler
        Ext.Ajax.on('requestexception', function(conn, response, options, eOpts) {
            var error = response.status + ' - ' + response.statusText;
            console.log('Ajax Request Exception! ' + error);
            if (response.status == 200) {
                // pass
            } else if (response.status == 401) {
                that.redirectTo('signin');
            } else {
                var errorData = Ext.JSON.decode(response.responseText);
                console.log('message >> ' + errorData.message);
                // Ext.Error.raise(error);
                Ext.toast({ html: Ext.String.format("出错了！ {0}", errorData.message), cls: 'toast_danger'});
            }
        });

        Ext.Ajax.on("beforerequest", function(conn){
            conn.setUseDefaultXhrHeader(false);
            conn.setWithCredentials(true);
        });
    },

    /*
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
    */
});


