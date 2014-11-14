Ext.define("app.view.main.region.Center", {
	extend : "Ext.panel.Panel",
	alias : "widget.maincenter",
	items : [ {
		xtype : "panel",
		title : "图片新闻",
		items : [ {
			xtype : "image",
			src : "resources/news/news1.jpg",
			width : 200,
			height : 200
		}, {
			xtype : "button",
			text : "1"
		}, {
			xtype : "button",
			text : "2"
		}, {
			xtype : "button",
			text : "3"
		}, {
			xtype : "button",
			text : "4"
		} ]
	}, {
		xtype : "tabpanel",
		height : 200,
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
		title : "各部门信息",
		height : 200
	} ]
});