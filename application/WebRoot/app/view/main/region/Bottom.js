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
	    	text:"版权所有中国人寿保险股份有限公司山西省公司2009-2011"
	    }
	]
});