Ext.define('Lemon.view.basic.CustomerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.basic-customer',
    data: {
        name: 'Lemon'
    },
    stores: {
        menu: {
            type: 'tree',
            root: {
                expanded: true,
                children: [
                    // sencha generate view order.Demand
                    { text: '单据', leaf: false, expanded: true, children: [
                        { text: '需求单', id: 'order-demand', leaf: true },
                    ]},
                    { text: '基本资料', leaf: false, expanded: true, children: [
                        { text: '合作伙伴', id: 'basic-partner', leaf: true },
                        { text: '客户', id: 'basic-customer', leaf: true },
                    ]},
                ]
            }
        },

        data: {
            autoSync: true,
            model: 'Lemon.model.Customer',
            proxy: {
                type: 'rest',
                // headers: { 'Content-Type': 'text/plain; charset=UTF-8' }, // 加上這行 就符合 simple request, 就不會用 OPTIONS 訪問了
                useDefaultXhrHeader: false, // <= HERE
                url: Lemon.utils.getApiUrl('customer'),
                reader: {
                    type: 'json',
                    rootProperty: 'result'
                },
                writer: {
                    type: 'json',
                    writeAllFields: true
                }
            },
            listeners: {
                write: 'onWrite'
            }
        }
    }

});
