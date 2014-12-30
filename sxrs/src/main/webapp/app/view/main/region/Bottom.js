/**
 * 网站的底部
 */
Ext.define("app.view.main.region.Bottom", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainbottom",
	bodyStyle : {
		background : 'url(/sxrs/resources/imgs/bottom_bg.gif)'
	},
	bodyPadding : 10,
	layout : "hbox",
	items : [ {
		xtype : "label",
		flex : 1
	}, {
		xtype : "label",
		flex : 6,
		html : "<center> COPYRIGHT @2008-2014 CHINALIFE INSURANCE COMPANY LTD.ALL RIGHTS RESERVED <br> 版权所有中国人寿保险股份有限公司山西省公司2008-2014 </center>"
	} ,{
		xtype : "label",
		flex : 1
	} ]
});