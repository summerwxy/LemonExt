Ext.define('Lemon.view.basic.PartnerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.basic-partner',
    data: {
        name: 'Lemon'
    },

    requires: [
        'Lemon.model.Partner',
    ],

    stores: {
        data: {
            
            autoSync: true,
            model: 'Lemon.model.Partner',
            proxy: {
                type: 'rest',
                // useDefaultXhrHeader: false,
                withCredentials: true,
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
