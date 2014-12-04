Ext.define("app.view.main.region.Right", {
	extend : "Ext.panel.Panel",
	requires : [ 
	             'app.view.main.info.Notify',
	             'app.view.main.info.TodayUpdate',
	             'app.view.main.nowAttention.NowAttention'
	             ],
	alias : "widget.mainright",
	items : [ {
		xtype : "mainNotify",
		title : "通知发文",
		height : 240,
        iconCls:"notifyPaper"
	}, {
		margin:"5 0 0 0",
		xtype : "mainTodayUpdate",
		title : "每日更新",
        iconCls:"dayNews",
		height : 300
	},{
		xtype : "nowAttention"
	} ]
});
