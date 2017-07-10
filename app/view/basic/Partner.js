
Ext.define('Lemon.view.basic.Partner',{
    extend: 'Ext.panel.Panel',
    xtype: 'pages-basic-partner',
    requires: [
        'Lemon.view.basic.PartnerController',
        'Lemon.view.basic.PartnerModel'
    ],

    controller: 'basic-partner',
    viewModel: {
        type: 'basic-partner'
    },

    html: 'Partner'
});
