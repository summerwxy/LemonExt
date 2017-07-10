
Ext.define('Lemon.view.main.Menu',{
    extend: 'Ext.tree.Panel',
    xtype: 'lemontreemenu', // define xtype using xtype 

    requires: [
        'Lemon.view.main.MenuController',
        'Lemon.view.main.MenuModel'
    ],

    controller: 'main-menu',
    viewModel: {
        type: 'main-menu'
    },

    rootVisible: false,
    bind: {
        store: '{menu}'
    },
    listeners: {
        itemclick: 'onItemClick'
    }
});
