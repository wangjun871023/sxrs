Ext.define('app.store.DeptStore', {
    extend: 'Ext.data.Store',
	alias : "widget.deptStore",
    requires:[
        "app.model.DeptModel"
    ],   
    model: "deptModel",
    autoLoad:true,
    proxy: {
         type: 'ajax',
         url: 'dept/loadDeptCombo.do',
         reader: {
             rootProperty: 'dataList'
         }
    } 
});
