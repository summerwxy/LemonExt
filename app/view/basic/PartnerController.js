Ext.define('Lemon.view.basic.PartnerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.basic-partner',

    // requires: [
    //     'Lemon.model.Partner',
    // ],

    onWrite: function(store, operation) {
        var record = operation.getRecords()[0],
            name = Ext.String.capitalize(operation.action),
            verb;
        if (name == 'Create') { verb = '新增'; } 
        else if (name == 'Update') { verb = '更新'; } 
        else if (name == 'Destroy') { record = operation._records[0]; verb = '删除'; } 
        else { verb = name; }
        Ext.toast({ html: Ext.String.format("{0} 资料: {1}", verb, record.data.uid), cls: 'toast_success'});
    },

    onAddClicked: function(btn, evt) {
        var rec = new Lemon.model.Partner();
        var panel = btn.up('pages-basic-partner');
        panel.store.insert(0, rec);
        // panel.store.insert(0, {});
        var re = panel.findPlugin('rowEditing');
        re.startEdit(0, 0);
    },

    onDeleteClicked: function(btn, evt) {
        var grid = btn.up('pages-basic-partner');
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
