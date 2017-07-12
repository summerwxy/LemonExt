Ext.define('Lemon.utils', {
    singleton: true,
    foo: function() {
        return 'FOO';
    },

    isDev: false,

    getApiUrl: function(path) {
        return this.isDev ? 'http://localhost:5000/api/' + path : '/api/' + path;
    },
});

Ext.define('Lemon.plugin.AuthRowEditing', {
    extend: 'Ext.grid.plugin.RowEditing',
    alias: 'plugin.rowEditing',
    clicksToMoveEditor: 2,
    autoCancel: false,        
    listeners: {
        cancelEdit: function(rowEditing, context) {
            if (context.record.phantom) {
                context.store.remove(context.record);
            }
        }
    }
});