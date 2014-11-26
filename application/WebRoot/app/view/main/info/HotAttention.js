/**
 * 热点关注
 */
Ext.define("app.view.main.info.HotAttention", {
	extend : "Ext.grid.Panel",
	alias : "widget.mainHotAttention",
	store : Ext.create('Ext.data.Store', {
		fields : [ 'title', 'date' ],
		data : {
			'items' : [ {
				"title" : "HotAttention 2010-1-2",
				"date":"2010-1-2"
			},  {
				"title" : "HotAttention 2010-1-2",
				"date":"2010-1-2"
			}, {
				"title" : "HotAttention 2010-1-2",
				"date":"2010-1-2"
			}, {
				"title" : "HotAttention 2010-1-2",
				"date":"2010-1-2"
			},{
				"title" : "HotAttention 2010-1-2",
				"date":"2010-1-2"
			}, {
				"title" : "HotAttention 2010-1-2",
				"date":"2010-1-2"
			} ]
		},
		proxy : {
			type : 'memory',
			reader : {
				type : 'json',
				rootProperty : 'items'
			}
		}
	}),
	enableColumnResize:false,
	hideHeaders:true,
	scroll : false,
	columns : [ {
		sortable : false,
		//width:310,
		flex:1,
		hideable : false,
		dataIndex : 'title'
	}],
	bbar:['->',{
		text:"更多"
	}]
});