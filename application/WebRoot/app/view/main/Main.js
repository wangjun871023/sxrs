Ext.define('app.view.main.Main', {
	extend : 'Ext.container.Container',
	requires : [ 'app.view.main.MainController', 'app.view.main.region.Top',
			'app.view.main.region.Bottom', 'app.view.main.login.Login',
			'app.view.main.region.Left', 'app.view.main.region.Right',
			'app.view.main.region.Center', 'app.view.main.MainModel' ],
	xtype : 'app-main',
	controller : 'main',
	overflowY : "scroll",
	viewModel : {
		type : 'main'
	},
	layout : {
		type : 'hbox'
	},
	items : [ {
		xtype : "panel",
		flex : 1
	}, {
		xtype : "panel",
		width : 1024,
		items : [ {
			xtype : 'maintop',
			height : 120
		}, {
			layout : "column",
			bodyPadding : 1,
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
		}, {
			xtype : 'mainbottom',
			height : 50
		} ]
	}, {
		xtype : "panel",
		flex : 1
	} ]
});
