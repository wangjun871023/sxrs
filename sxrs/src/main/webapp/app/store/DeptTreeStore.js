Ext.define('app.store.DeptTreeStore', {
    extend: 'Ext.data.TreeStore',
    requires:[
        "app.model.DeptModel"
    ],   
    model: Ext.create("app.model.DeptModel"),
    autoLoad:true,
    root: {
        text:"公司部门",
        expaneded:true,
        children:[]
    },
    proxy: {
         type: 'ajax',
         url: 'dept/loadDeptCombo.do',
         reader: {
             rootProperty: 'dataList'
         }
    } 
});
