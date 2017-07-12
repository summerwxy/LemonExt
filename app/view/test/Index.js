
Ext.define('Lemon.view.test.Index',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Lemon.view.test.IndexController',
        'Lemon.view.test.IndexModel'
    ],

    controller: 'test-index',
    viewModel: {
        type: 'test-index'
    },

    html: 'Hello, TEST!!'
});
