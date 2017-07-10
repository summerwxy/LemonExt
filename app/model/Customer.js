Ext.define('Lemon.model.Customer', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'uid',
        type: 'int',
        useNull: true
    }, 'name', 'telephone', 'location', 'date_created', 'last_updated'],
    validations: [{
        type: 'length',
        field: 'name',
        min: 1
    }, {
        type: 'length',
        field: 'telephone',
        min: 1
    }, {
        type: 'length',
        field: 'locastion',
        min: 1
    }]
});