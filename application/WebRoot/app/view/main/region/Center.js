Ext.define("app.view.main.region.Center", {
	extend : "Ext.panel.Panel",
	alias : "widget.maincenter",
	requires : [ 
	             'app.view.main.news.News',
	             'app.view.main.info.HotAttention',
	             'app.view.main.info.InfoInteract',
	             'app.view.main.info.WebMaintain',
	             'app.view.main.info.DeptInfo',
	             'app.view.main.info.TheoryStudy'
	             ],
	items : [ {
		xtype : "mainNews",
		title : "图片新闻",
		height : 240,
        iconCls:"picNews"
	}, {
		xtype : "tabpanel",
		margin:"5 0 0 0",
		height : 300,
		items : [ {
			title : '热点关注',
			xtype:"mainHotAttention",
            iconCls:"hotAttention"
		}, {
			title : '理论学习',
			xtype:"mainTheoryStudy",
            iconCls:"theoryStudy"
		}, {
			title : '信息交流',
			xtype:"mainInfoInteract",
            iconCls:"infoInteract"
		}, {
			title : '网站维护',
			xtype:"mainWebMaintain",
            iconCls:"webMaintain"
		} ]
	}, {
		xtype : "grid",
		title : "公司各部门信息",
        iconCls:"compDeptInfo",
		xtype:"mainDeptInfo",
		minHeight : 300
	} ]
});
