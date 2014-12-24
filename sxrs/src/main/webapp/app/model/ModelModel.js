Ext.define('app.model.ModelModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'text',  type: 'string',convert:function(v,record){
        	return record.data.modelName==''?"功能菜单":record.data.modelName;
        }},
        {name: 'leaf',  type: 'boolean',defaultValue: true},
        {name: 'expanded',  type: 'boolean',defaultValue: true},
        {name: 'modelName',  type: 'string'}
    ]
});
