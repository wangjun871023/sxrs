Ext.define('app.store.ModelTreeStore', {
    extend: 'Ext.data.TreeStore',
    requires:[
        "app.model.ModelModel"
    ],   
    model: Ext.create("app.model.ModelModel"),
    autoLoad:true,
    root: {
        text:"功能菜单",
        expaneded:true,
        children:[]
    },
    proxy: {
         type: 'ajax',
         url: 'model/loadModelTree.do',
         reader: {
             rootProperty: 'dataList'
         }
    } 
});
