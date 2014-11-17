Ext.define("app.view.main.region.Right", {
	extend : "Ext.panel.Panel",
	requires : [ 'app.view.main.notify.Notify'],
	alias : "widget.mainright",
	items : [ {
		xtype : "mainNotify",
		title : "通知/发文",
		height : 240
	}, {
		xtype : "panel",
		margin:"5 0 0 0",
		title : "当前关注",
		layout : "form",
		items : [ {
			xtype : "image",
			src : "resources/attentions/1.jpg",
			height : 50
		}, {
			xtype : "image",
			src : "resources/attentions/2.jpg",
			height : 50
		}, {
			xtype : "image",
			src : "resources/attentions/3.bmp",
			height : 50
		}]
	} ]
});