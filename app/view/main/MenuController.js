Ext.define('Lemon.view.main.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-menu',

    requires: [
        'Lemon.view.main.Blank',
        'Lemon.view.basic.Partner',
        'Lemon.view.basic.Customer',
        'Lemon.view.order.Demand',
    ],

    onItemClick: function(treemodel, record, item, index, e, eOpts) {
        if (record.data.leaf == true) {
            var tabId = 'tab_' + record.data.id;
            var isTabExist = false;
            var tabs = Ext.getCmp('tabs');

            for (var i = 0; i < tabs.items.length && !isTabExist; i++) {
                if (tabs.items.items[i].id === tabId) {
                    isTabExist = true;
                }
            }

            if (isTabExist) {
                tabs.setActiveTab(tabId);
            } else {
                this.openTab(tabs, tabId, record);
            }
        }
    },

    openTab: function(tabs, tabId, record) {
        var xtype = 'pages-' + record.data.id;
        if (Ext.ClassManager.getByAlias('widget.' + xtype) === undefined) {
            xtype = 'pages-main-blank'; // TODO: this pages not exist
        }
        tabs.add({
            title: record.data.text,
            id: tabId,
            closable: true,
            xtype: xtype
        }).show(); // set active tab
    }



});
