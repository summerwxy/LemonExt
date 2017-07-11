/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Lemon.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    routes: {
        'signin': 'onSignin',
        'home': {
            before: 'onBeforeHome',
            action: 'onHome',
        }
    },

    onSignin: function() {
        this.view.removeAll(true);
        this.view.add(new Lemon.view.main.Signin());
    },

    onBeforeHome: function(action) {
        var that = this;
        Ext.Ajax.request({
            url: Lemon.utils.getApiUrl('isSignin'),
            success: function(res) {
                var json = Ext.JSON.decode(res.responseText);
                if (json.status == 0) {
                    that.redirectTo('signin');
                } else {
                    action.resume();                    
                }
            },
            failure: function() {
                action.stop(true);
            }
        });
    },

    onHome: function() {
        this.view.removeAll(true);
        this.view.add(new Lemon.view.main.Home());
    },

});
