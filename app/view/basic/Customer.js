
Ext.define('Lemon.view.basic.Customer',{
    extend: 'Ext.grid.Panel',
    xtype: 'pages-basic-customer',
    requires: [
        'Lemon.view.basic.CustomerController',
        'Lemon.view.basic.CustomerModel'
    ],

    controller: 'basic-customer',
    viewModel: {
        type: 'basic-customer'
    },

    bind: {
        store: '{data}'
    },
    
    viewConfig: {
        enableTextSelection: true,
    },
    autoLoad: true,
    plugins: [{
        ptype: 'rowEditing',
    }],
    columns: [{
        text: 'ID',
        width: 55,
        dataIndex: 'uid'
    }, {
        header: '客户名称',
        flex: 1,
        dataIndex: 'name',
        field: {
            xtype: 'textfield'
        }
    }, {
        text: '电话',
        flex: 1,
        dataIndex: 'telephone',
        field: {
            xtype: 'textfield'
        }
    }, {
        text: '地点',
        flex: 1,
        dataIndex: 'location',
        field: {
            xtype: 'textfield'
        }
    }, {
        text: 'Created',
        width: 150,
        dataIndex: 'date_created'
    }, {
        text: 'Updated',
        width: 150,
        dataIndex: 'last_updated'
    }],

    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add',
            handler: 'onAddClicked'
        }, {
            itemId: 'delete',
            text: 'Delete',
            disabled: true,
            handler: 'onDeleteClicked'
        }]
    }],

    listeners: {
        'selectionchange': 'onSelectionChanged'
    }
    // html: 'customer'
});
