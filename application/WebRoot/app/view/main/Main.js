Ext.define('app.view.main.Main', {
	extend : 'Ext.container.Container',
	requires : [ 'app.view.main.MainController', 
	             'app.view.main.region.Top',
	             'app.view.main.region.Bottom',
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
		xtype : 'maintop',
		region : 'north',
		height : 80
	}, {
		region : 'center',
		xtype : 'panel',
		items : [ {
			html : '<h2>Content appropriate for the current navigation.</h2>'
		} ]
	},{
		xtype : 'mainbottom',
		region : 'south',
		height : 80
	} ]
});
