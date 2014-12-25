Ext.define('app.store.InfoStore', {
    extend: 'Ext.data.Store',
    requires:[
        "app.model.InfoModel"
    ],   
    model: Ext.create("app.model.InfoModel"),
    autoLoad:true,
    proxy: {
         type: 'ajax',
         url: 'info/loadInfo.do',
         reader: {
             rootProperty: 'dataList'
         }
    } 
});
