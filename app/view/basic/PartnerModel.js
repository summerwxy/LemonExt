Ext.define('Lemon.view.basic.PartnerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.basic-partner',
    data: {
        name: 'Lemon'
    },

    stores: {
        data: {
            autoSync: true,
            model: 'Lemon.model.Partner',
            proxy: {
                type: 'rest',
                // headers: { 'Content-Type': 'text/plain; charset=UTF-8' }, // 加上這行 就符合 simple request, 就不會用 OPTIONS 訪問了
                useDefaultXhrHeader: false, // <= HERE
                url: Lemon.utils.getApiUrl('partner'),
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
