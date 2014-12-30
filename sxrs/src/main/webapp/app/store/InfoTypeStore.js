Ext.define('app.store.InfoTypeStore', {
    extend: 'Ext.data.Store',
    requires:[
        "app.model.InfoTypeModel"
    ],   
    model: Ext.create("app.model.InfoTypeModel"),
    autoLoad:true,
    proxy: {
         type: 'ajax',
         url: 'infoType/loadInfoTypeTree.do',
         reader: {
             rootProperty: 'dataList'
         }
    } 
});
