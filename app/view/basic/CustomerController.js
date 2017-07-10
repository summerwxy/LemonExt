Ext.define('Lemon.view.basic.CustomerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.basic-customer',

    onWrite: function(store, operation) {
        var record = operation.getRecords()[0],
            name = Ext.String.capitalize(operation.action),
            verb;

        if (name == 'Destroy') {
            record = operation._records[0];
            verb = 'Destroyed';
        } else {
            verb = name + 'd';
        }
        Ext.toast({ html: Ext.String.format("{0} Data: {1}", verb, record.getId()), cls: 'toast_success'});
    },

    onAddClicked: function(btn, evt) {
        var rec = new Lemon.model.Customer();
        var panel = btn.up('pages-basic-customer');
        panel.store.insert(0, rec);
        var re = panel.findPlugin('rowEditing');
        re.startEdit(0, 0);
    },

    onDeleteClicked: function(btn, evt) {
        var grid = btn.up('pages-basic-customer');
        var sm = grid.getSelectionModel();
        var selection = sm.getSelection()[0];
        if (selection) {
            grid.store.remove(selection);
        }
        if (grid.store.getCount() > 0) {
            sm.select(0);
        }
    },

    onSelectionChanged: function(view, selections, options) {
        // TODO: 剛剛新增 但是還沒刷新的紀錄 不給刪除功能的
        var grid = view.view.ownerGrid;
        grid.down('#delete').setDisabled(selections.length === 0);
    },
});
