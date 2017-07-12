Ext.define('Lemon.view.main.MenuModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main-menu',
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
                        // { text: '客户', id: 'basic-customer', leaf: true },
                    ]},
                ]
            }
        }
    }
});
