
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
        text: '#',
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
        dataIndex: 'createdAt'
    }, {
        text: 'Updated',
        width: 150,
        dataIndex: 'updatedAt'
    }],

    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: '新增',
            handler: 'onAddClicked'
        }, {
            itemId: 'delete',
            text: '删除',
            disabled: true,
            handler: 'onDeleteClicked'
        }]
    }],


    listeners: {
        'selectionchange': 'onSelectionChanged'
    }
    // html: 'customer'
});
