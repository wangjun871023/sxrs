/**
 * 网站的底部
 */
Ext.define("app.view.main.region.Bottom", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainbottom",
	bodyStyle: {  
        background: 'url(resources/imgs/bottom_bg.gif)',  
	},
	items : [
	    {
	    	xtype:"label",
	    	text:"中国人寿"
	    }
	]
});