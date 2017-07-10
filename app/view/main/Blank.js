
Ext.define('Lemon.view.main.Blank',{
    extend: 'Ext.panel.Panel',
    xtype: 'pages-main-blank',
    requires: [
        'Lemon.view.main.BlankController',
        'Lemon.view.main.BlankModel'
    ],

    controller: 'main-blank',
    viewModel: {
        type: 'main-blank'
    },

    html: 'BLANK PAGE!!'
});
