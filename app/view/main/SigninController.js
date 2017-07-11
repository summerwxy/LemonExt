Ext.define('Lemon.view.main.SigninController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-signin',


    onSubmit: function() {
        var that = this;
        Ext.Ajax.request({
            url: Lemon.utils.getApiUrl('signin'),
            method: 'POST',          
            // waitTitle: 'Connecting',
            // waitMsg: 'Sending data...',                  
            jsonData: true,
            // withCredentials: true,
            // useDefaultXhrHeader: false,
            params: {
                'user': 'wxy',
                'password': '111'
            },
            success: function(res) {
                console.log(res);
                var foo = Ext.util.Cookies.get('sid');
                console.log(foo);
                console.log('------------');
                that.redirectTo('home');
            },
            failure: function() {
                console.log('submit fail');
            }
        });
    }

});
