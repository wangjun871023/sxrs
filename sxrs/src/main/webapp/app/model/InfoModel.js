Ext.define('app.model.InfoModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'infoTitle',  type: 'string',convert:function(v,record){
        	return "<a target='blank' href='index.html?id="+record.data.id+"' title='"+v+"'>"+v+"</a>";
        }},
        {name: 'infoTime',  type: 'string'},
        {name: 'infoCount',  type: 'string'},
        {name: 'infoTypeId',  type: 'string'}
    ]
});
