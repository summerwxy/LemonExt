Ext.define('Lemon.utils', {
    singleton: true,

    isDev: function() { // 配合 app.json 裡面的 "env": "${build.environment}"
        return Ext.manifest['env'] === 'development';
    },

    getApiUrl: function(path) {
        return this.isDev() ? 'http://localhost:5000/api/' + path : '/api/' + path;
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