Ext.define("app.view.main.region.Left", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainleft",
	items : [ {
		xtype : "mainlogin",
		title : "登录"
	}, {
		xtype : "panel",
		title : "站内导航",
		layout : {
			type : "table",
			columns : 2
		},
		items : [ {
			xtype : "button",
			text : "办公室"
		}, {
			xtype : "button",
			text : "工会工作部"
		}, {
			xtype : "button",
			text : "监察部"
		}, {
			xtype : "button",
			text : "销售督察部"
		}, {
			xtype : "button",
			text : "内控合规部"
		}, {
			xtype : "button",
			text : "人力资源部"
		}, {
			xtype : "button",
			text : "教育培训部"
		}, {
			xtype : "button",
			text : "电销中心"
		}, {
			xtype : "button",
			text : "健康保险部"
		}, {
			xtype : "button",
			text : "团体业务部"
		}, {
			xtype : "button",
			text : "个险销售部"
		}, {
			xtype : "button",
			text : "县域保险部"
		}, {
			xtype : "button",
			text : "银行保险部"
		}, {
			xtype : "button",
			text : "客服管理中心"
		}, {
			xtype : "button",
			text : "业务管理中心"
		}, {
			xtype : "button",
			text : "财务管理中心"
		}, {
			xtype : "button",
			text : "信息技术部"
		} ]
	} ]
});