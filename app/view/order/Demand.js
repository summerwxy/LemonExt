
Ext.define('Lemon.view.order.Demand',{
    extend: 'Ext.panel.Panel',
    xtype: 'pages-order-demand',
    requires: [
        'Lemon.view.order.DemandController',
        'Lemon.view.order.DemandModel'
    ],

    controller: 'order-demand',
    viewModel: {
        type: 'order-demand'
    },

    html: 'demand'
});
