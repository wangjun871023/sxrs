Ext.define("app.view.main.region.Right", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainright",
	items : [ {
		xtype : "grid",
		title : "通知/发文",
		height : 200
	}, {
		xtype : "panel",
		title : "当前关注",
		layout : "form",
		items : [ {
			xtype : "image",
			src : "resources/attentions/1.jpg",
			height : 100
		}, {
			xtype : "image",
			src : "resources/attentions/2.jpg",
			height : 100
		}, {
			xtype : "image",
			src : "resources/attentions/3.bmp",
			height : 100
		}]
	} ]
});