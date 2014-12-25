Ext.define('app.model.InfoTypeModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'text',  type: 'string',convert:function(v,record){
        	return record.data.infoTypeName==''?"信息类别":record.data.infoTypeName;
        }},
        {name: 'leaf',  type: 'boolean',defaultValue: true},
        {name: 'expanded',  type: 'boolean',defaultValue: true},
        {name: 'infoTypeName',  type: 'string'}
    ]
});
