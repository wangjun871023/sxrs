Ext.define("app.view.main.region.Right", {
	extend : "Ext.panel.Panel",
	requires : [ 
	             'app.view.main.info.Notify',
	             'app.view.main.info.TodayUpdate'
	             ],
	alias : "widget.mainright",
	items : [ {
		xtype : "mainNotify",
		title : "通知/发文",
		height : 240
	}, {
		margin:"5 0 0 0",
		xtype : "mainTodayUpdate",
		title : "每日更新",
		height : 300
	},{
		xtype : "panel",
		title : "当前关注",
		bodyPadding : 2,
		layout : {
			type : "table",
			columns : 2
		},
		defaults:{
			xtype:"image",
			bodyPadding : 2,
			margin:"0 0 0 5",
			width:140,
			height : 80
		},
		items : [ {
			src : "resources/attentions/1.jpg",
		}, {
			src : "resources/attentions/2.bmp",
		}, {
			src : "resources/attentions/3.jpg",
		}, {
			src : "resources/attentions/4.jpg",
		}]
	} ]
});