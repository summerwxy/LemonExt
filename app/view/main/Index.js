
Ext.define('Lemon.view.main.Index',{
    extend: 'Ext.panel.Panel',

    xtype: 'pages-main-index',

    requires: [
        'Lemon.view.main.IndexController',
        'Lemon.view.main.IndexModel',
    ],

    controller: 'main-index',
    viewModel: {
        type: 'main-index'
    },

    layout: 'fit',
    items: [{
        xtype: 'panel',
        html: 'Loading...'
    }],

    

});
