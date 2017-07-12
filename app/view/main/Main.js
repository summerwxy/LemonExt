
Ext.define('Lemon.view.main.Main',{
    extend: 'Ext.panel.Panel',
    
    xtype: 'pages-main-main',

    requires: [
        'Lemon.view.main.MainController',
        'Lemon.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: 'fit',

    items: [],

    html: '1234'
});
