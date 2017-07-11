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
        console.log('check is signin...');
        var foo = Ext.util.Cookies.get('connect.sid');
        console.log(foo);


        var that = this;
        var req = Ext.Ajax.request({
            url: Lemon.utils.getApiUrl('isSignin'),
            // withCredentials: true,
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
        console.log(req.xhr)
    },

    onHome: function() {
        this.view.removeAll(true);
        this.view.add(new Lemon.view.main.Home());
    },

});
