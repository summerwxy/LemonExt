
Ext.define('Lemon.view.basic.Partner',{
    extend: 'Ext.grid.Panel',
    xtype: 'pages-basic-partner',
    requires: [
        'Lemon.view.basic.PartnerController',
        'Lemon.view.basic.PartnerModel'
    ],

    controller: 'basic-partner',
    viewModel: {
        type: 'basic-partner'
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
        text: '地点',
        flex: 1,
        dataIndex: 'location',
        field: {
            xtype: 'textfield'
        }
    }, {
        header: '姓名',
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
        text: '微信号',
        flex: 1,
        dataIndex: 'weixin',
        field: {
            xtype: 'textfield'
        }
    }, {
        text: '公司名称',
        flex: 1,
        dataIndex: 'company',
        field: {
            xtype: 'textfield'
        }
    }, {
        text: '地址',
        flex: 1,
        dataIndex: 'address',
        field: {
            xtype: 'textfield'
        }
    }, {
        text: '备注',
        flex: 3,
        dataIndex: 'remark',
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
        cls: 'toolbar_cls',
        items: [{
            text: '新增',
            handler: 'onAddClicked'
        }, {
            itemId: 'delete',
            text: '删除',
            disabled: true,
            // hidden: true,
            handler: 'onDeleteClicked'
        }]
    }],


    listeners: {
        'selectionchange': 'onSelectionChanged'
    }
  

    // html: 'Partner'
});
