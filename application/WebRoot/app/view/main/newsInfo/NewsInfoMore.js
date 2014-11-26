Ext.define('app.view.main.newsInfo.NewsInfoMore', {
	extend : "Ext.grid.Panel",
	alias : "widget.mainNewsInfoMore",
	store : Ext.create('Ext.data.Store', {
		fields : [ 'title', 'date' ],
		data : {
			'items' : [ {
				"title" : "DeptInfo 2010-1-2",
				"date":"2010-1-2"
			},  {
				"title" : "DeptInfo 2010-1-2",
				"date":"2010-1-2"
			}, {
				"title" : "HotAttention 2010-1-2",
				"date":"2010-1-2"
			}, {
				"title" : "DeptInfo 2010-1-2",
				"date":"2010-1-2"
			},{
				"title" : "DeptInfo 2010-1-2",
				"date":"2010-1-2"
			}, {
				"title" : "DeptInfo 2010-1-2",
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
	bbar: Ext.create('Ext.PagingToolbar', {
          store: this.store,
          displayInfo: true
    })
});
