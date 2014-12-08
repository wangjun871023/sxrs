/**
 * 通知/发文
 */
Ext.define("app.view.main.info.Notify", {
	extend : "Ext.grid.Panel",
	alias : "widget.mainNotify",
	requires : [ 
	 			'app.view.common.ButtonTransparent'
	],
	store : Ext.create('Ext.data.Store', {
		fields : [ 'title', 'date' ],
		data : {
			'items' : [ {
				"title" : "title1 2010-1-2",
				"date":"2010-1-2"
			},  {
				"title" : "title1 2010-1-2",
				"date":"2010-1-2"
			}, {
				"title" : "title1 2010-1-2",
				"date":"2010-1-2"
			}, {
				"title" : "title1 2010-1-2",
				"date":"2010-1-2"
			},{
				"title" : "title1 2010-1-2",
				"date":"2010-1-2"
			}, {
				"title" : "title1 2010-1-2",
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
	tools: [ {
        xtype: 'textfield',
        itemId: 'keyWords',
        hidden:true,
        handler: function(){
            // 实现刷新的逻辑
        }
    },{
        type: 'search',
        handler: function(event, target, owner, tool){
            // 实现查询的逻辑
        	var obj = owner.child('#keyWords');
        	if(obj.isHidden()){
        		obj.show();
        	}else{
        		obj.hide();
        	}
        }
    }],
	bbar:['->',{
		xtype:"buttontransparent",
		text:"刷新",
		handler:function(){
		}
	},'-',{
		xtype:"buttontransparent",
		text:"更多",
		handler:function(){
			this.up("app-main").down("mainView").setHidden(true);
			this.up("app-main").down("mainNewsInfo").setHidden(true);
			this.up("app-main").down("mainDept").setHidden(true);
			this.up("app-main").down("mainNewsInfoMore").setHidden(false);
		}
	}]
});