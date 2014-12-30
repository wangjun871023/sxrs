Ext.define('app.store.InfoStore', {
    extend: 'Ext.data.Store',
    id:"infoStoreId",
    requires:[
        "app.model.InfoModel"
    ],   
    model: Ext.create("app.model.InfoModel"),
    autoLoad:true,
    pageSize : 15,
    proxy: {
         type: 'ajax',
         url: 'info/loadInfo.do',
         reader: {
             rootProperty: 'data',
             totalProperty: 'totalCount'
         }
    } 
});
