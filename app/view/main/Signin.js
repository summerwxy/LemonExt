
Ext.define('Lemon.view.main.Signin',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Lemon.view.main.SigninController',
        'Lemon.view.main.SigninModel',
    ],

    controller: 'main-signin',
    viewModel: {
        type: 'main-signin'
    },

    items: [{
        xtype: 'window',
        title: '请登录',
        draggable: false,
        closable: false,
        resizable: false,
        modal: true,
        // bodyStyle:'padding: 5px 0 0 0',
        width: 400,
        autoShow: true,
        y: 150,
        items: [{
            xtype: 'form',
            defaults: {
                style: 'padding: 8px 5px 2px 5px; width: 100%', 
                xtype: 'textfield',
            },
            items: [{
                fieldLabel: '账号',
            },{
                fieldLabel: '密码',
                inputType: 'password' 
            }],
            fbar: [{
                text: 'Submit',
                listeners: {
                    click: 'onSubmit'
                }
            }]
        }],
    }]
    // html: 'Sign!!'
});
