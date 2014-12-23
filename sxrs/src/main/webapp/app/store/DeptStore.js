Ext.define('app.store.DeptStore', {
    extend: 'Ext.data.Store',
    requires:[
        "app.model.DeptModel"
    ],   
    model: Ext.create("app.model.DeptModel"),
    autoLoad:true,
    proxy: {
         type: 'ajax',
         url: 'dept/loadDeptCombo.do',
         reader: {
             rootProperty: 'dataList'
         }
    } 
});
