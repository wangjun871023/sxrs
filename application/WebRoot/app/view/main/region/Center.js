Ext.define("app.view.main.region.Center", {
	extend : "Ext.panel.Panel",
	alias : "widget.maincenter",
	requires : [ 'app.view.main.news.News'],
	items : [ {
		xtype : "mainNews",
		title : "图片新闻",
		height : 240
	}, {
		xtype : "tabpanel",
		margin:"5 0 0 0",
		height : 300,
		items : [ {
			title : '热点关注',
			html : '热点关注'
		}, {
			title : '理论学习',
			html : '理论学习'
		}, {
			title : '信息交流',
			html : '信息交流'
		}, {
			title : '网站维护',
			html : '网站维护'
		} ]

	}, {
		xtype : "grid",
		title : "公司各部门信息",
		height : 300
	} ]
});