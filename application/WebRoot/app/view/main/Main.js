Ext.define('app.view.main.Main', {
	extend : 'Ext.container.Container',
	requires : [ 'app.view.main.MainController', 'app.view.main.region.Top',
			'app.view.main.region.Bottom', 'app.view.main.login.Login',
			'app.view.main.MainModel' ],
	xtype : 'app-main',
	controller : 'main',
	viewModel : {
		type : 'main'
	},
	layout : {
		type : 'border'
	},
	items : [ {
		region : 'center',
		autoScroll : true,
		items : [ {
			xtype : 'maintop',
			region : 'north',
			height : 80
		}, {
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
		}, {
			xtype : "panel",
			title : "图片新闻",
			items:[{
				xtype:"image",
				src:"resources/news/news1.jpg",
				width:200,
				height:200
			},{
				xtype:"button",
				text:"1"
			},{
				xtype:"button",
				text:"2"
			},{
				xtype:"button",
				text:"3"
			},{
				xtype:"button",
				text:"4"
			}]
		}, {
			xtype : "tab",
			title : "热点关注/理论学习/信息交流/网站维护"
		}, {
			xtype : "mainlogin",
			title : "通知/发文"
		}, {
			xtype : "mainlogin",
			title : "各部门信息"
		}, {
			xtype : "mainlogin",
			title : "当前关注"
		}, {
			xtype : 'mainbottom',
			height : 80
		} ]
	} ]
});
