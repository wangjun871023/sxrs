/**
 * 网站的底部
 */
Ext.define("app.view.main.region.Bottom", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainbottom",
	items : [ {
		xtype : "image",
		bind : {
			hidden : "{!system.iconUrl}",
			src : "{system.iconUrl}"
		}
	} ]
});