Ext.define("app.view.main.region.MainView", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainView",
	layout : "column",
	requires : [ 
	 			'app.view.main.region.Left', 
	 			'app.view.main.region.Right',
	 			'app.view.main.region.Center'
	],
	items : [ {
		columnWidth : 0.23,
		bodyPadding : 1,
		xtype : "mainleft"
	}, {
		columnWidth : 0.47,
		bodyPadding : 1,
		xtype : "maincenter"
	}, {
		columnWidth : 0.3,
		bodyPadding : 1,
		xtype : "mainright",
	} ]
});