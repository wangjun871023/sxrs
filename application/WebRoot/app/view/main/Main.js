Ext.define('app.view.main.Main', {
	extend : 'Ext.container.Container',
	requires : [ 'app.view.main.MainController', 'app.view.main.region.Top',
			'app.view.main.region.Bottom', 'app.view.main.login.Login',
			'app.view.main.region.Left', 'app.view.main.region.Right',
			'app.view.main.region.Center', 'app.view.main.MainModel' ],
	xtype : 'app-main',
	controller : 'main',
	autoScroll : true,
	viewModel : {
		type : 'main'
	},
	layout : {
		type : 'hbox'
	},
	items : [ {
		xtype:"panel",
		flex:1
	},{
		flex:4,
		items : [ {
			xtype : 'maintop',
			height : 100
		}, {
			layout : "column",
			items : [ {
				columnWidth : 0.2,
				xtype : "mainleft"
			}, {
				columnWidth : 0.5,
				xtype : "maincenter"
			}, {
				columnWidth : 0.3,
				xtype : "mainright",
			} ]
		}, {
			xtype : 'mainbottom',
			height : 100
		} ]
	},{
		xtype:"panel",
		flex:1
	} ]
});
