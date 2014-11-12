/**
 * 网站的顶部
 */
Ext.define("app.view.main.region.Top", {
	extend : "Ext.panel.Panel",
	alias : "widget.maintop",
	items : [ {
		xtype : "image",
		bind : {
			hidden : "{!system.iconUrl}",
			src : "{system.iconUrl}"
		}
	} ]
});