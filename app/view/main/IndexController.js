Ext.define('Lemon.view.main.IndexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-index',


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
