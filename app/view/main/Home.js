
Ext.define('Lemon.view.main.Home',{
    extend: 'Ext.panel.Panel',
    layout: 'border',

    requires: [
        'Lemon.view.main.HomeController',
        'Lemon.view.main.HomeModel',
        'Lemon.utils',
    ],

    controller: 'main-home',
    viewModel: {
        type: 'main-home'
    },

    items: [{
        region: 'north',
        layout: 'hbox',
        border: false,
        width: '100%',
        margin: '0 0 0 0',
        padding: '5 5 5 5',
        defaults: {bodyStyle: { 'background-color': '#3892D4', 'color': '#FFFFFF' }},
        items: [{
            html: '<h1 class="x-panel-header">e-forklift</h1>',
            flex: 1,
        }]
    }, {
        region: 'west',
        id: 'navigator',
        collapsible: true,
        bodyStyle : 'overflow-y: visible; overflow-x: hidden;', // autoScroll: true, 會出現 直的橫的 兩條, 靠 CSS, 可以只出現一條
        title: '功能菜单',
        width: 170,
        split: true,
        items: [{xtype: 'lemontreemenu'}]
    }, {
        region: 'south',
        // title: 'South Panel',
        // collapsible: true,
        html: 'Powered by 0_o',
        bodyStyle: { 'background-color': '#3892D4', 'color': '#FFFFFF', 'text-align': 'center' },
        border: false,
        split: true,
        height: 20,
        minHeight: 20
    }, {
    /*
        region: 'east',
        title: 'East Panel',
        collapsible: true,
        split: true,
        width: 150
    }, {
    */
        region: 'center',
        id: 'tabs', 
        xtype: 'tabpanel', // TabPanel itself has no title
        activeTab: 0, // First tab active by default
        // minTabWidth: 150,
        items: [{
            title: 'HOME',
            html: '首页, 目前没内容'
        }]
    }],

    dummy: 'dummy'
});
