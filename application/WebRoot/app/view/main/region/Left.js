Ext.define("app.view.main.region.Left", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainleft",
	layout:"vbox",
	requires : [ 
	 			'app.view.main.login.Login'
	],
	items : [ {
		xtype : "mainlogin",
		bodyPadding : 5,
		height : 240,
		title : "登录山西人寿门户网站"
	}, {
		xtype : "panel",
		title : "公司部门",
		margin:"5 0 0 0",
		flex:1,
		bodyPadding : 10,
		defaults:{
			xtype:"button",
			width:100,
			bodyPadding : 2,
			margin:"0 0 0 5"
		},
		layout : {
			type : "table",
			columns : 2,
		},
		items : [ {
			text : "办公室",
			handler:function(){
				var obj = this.up("mainView");
				obj.setHidden(true);
				
				obj = this.up("app-main").down("mainDept");
				obj.setHidden(false);
				
			}
		}, {
			text : "工会工作部"
		}, {
			text : "监察部公室"
		}, {
			text : "销售督察部"
		}, {
			text : "内控合规部"
		}, {
			text : "人力资源部"
		}, {
			text : "教育培训部"
		}, {
			text : "电销中心"
		}, {
			text : "健康保险部"
		}, {
			text : "团体业务部"
		}, {
			text : "个险销售部"
		}, {
			text : "县域保险部"
		}, {
			text : "银行保险部"
		}, {
			text : "客服管理"
		}, {
			text : "业务管理"
		}, {
			text : "财务管理"
		}, {
			text : "信息技术部"
		} ]
	} ]
});