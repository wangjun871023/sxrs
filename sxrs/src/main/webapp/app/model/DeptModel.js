Ext.define('app.model.DeptModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'text',  type: 'string',convert:function(v,record){
        	return record.data.deptName==''?"公司部门":record.data.deptName;
        }},
        {name: 'leaf',  type: 'boolean',defaultValue: true},
        {name: 'expanded',  type: 'boolean',defaultValue: true},
        {name: 'deptName',  type: 'string'}
    ]
});
