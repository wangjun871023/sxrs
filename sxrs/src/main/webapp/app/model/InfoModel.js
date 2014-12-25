Ext.define('app.model.InfoModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'infoTitle',  type: 'string'},
        {name: 'infoTime',  type: 'string'},
        {name: 'infoCount',  type: 'string'},
        {name: 'infoTypeId',  type: 'string'}
    ]
});
