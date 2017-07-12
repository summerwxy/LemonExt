Ext.define('Lemon.model.Partner', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'uid',
        type: 'int',
        useNull: true
    }, 'location', 'name', 'telephone', 'weixin', 'company', 'address', 'remark', 'createdAt', 'updatedAt'],
    validators: [{
        type: 'length',
        field: 'name',
        min: 1
    }, {
        type: 'length',
        field: 'telephone',
        min: 1
    }, {
        type: 'length',
        field: 'location',
        min: 1
    }]
});

