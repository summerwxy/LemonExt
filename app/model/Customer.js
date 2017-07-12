Ext.define('Lemon.model.Customer', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'uid',
        type: 'int',
        useNull: true
    }, 'name', 'telephone', 'location', 'remark', 'createdAt', 'updatedAt'],
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