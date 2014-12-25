Ext.define('app.store.InfoTypeTreeStore', {
    extend: 'Ext.data.TreeStore',
    requires:[
        "app.model.InfoTypeModel"
    ],   
    model: Ext.create("app.model.InfoTypeModel"),
    autoLoad:true,
    root: {
        text:"信息类别",
        expaneded:true,
        children:[]
    },
    proxy: {
         type: 'ajax',
         url: 'infoType/loadInfoTypeTree.do',
         reader: {
             rootProperty: 'dataList'
         }
    } 
});
