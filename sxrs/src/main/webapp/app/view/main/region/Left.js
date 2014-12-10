Ext.define("app.view.main.region.Left", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainleft",
	layout:"vbox",
	requires : [
	 	'app.view.main.region.Login',
        "app.view.main.region.DeptPanel"
	],
	items : [ {
		xtype : "mainlogin",
		bodyPadding : 5,
		height : 240,
		title : "登录山西人寿门户网站",
        iconCls:"loginWeb"
	}, {
		xtype : "deptPanel",
		title : "公司部门",
        width: "100%",
        height:"100%",
		margin:"5 0 0 0",
        iconCls:"compDept"
	} ]
});
