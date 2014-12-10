/**
 *  主应用Main
 */
Ext.define('app.view.main.Main', {
	extend : 'Ext.container.Container',
	requires : [ 
            'app.view.main.MainController',
            'app.view.main.MainModel',
            //主界面
            'app.view.main.region.MainCenter'
    ],
	xtype : 'app-main',
    //控制器
	controller : 'mainController',
    //ViewModel
	viewModel : {
		type : 'mainViewModel'
	},
    //Y滚动
	overflowY : "scroll",
    //布局
	layout : {
		type : 'hbox'
	},
	items : [ {
        //左边
		xtype : "panel",
		flex : 1
	}, {
        //中间
		xtype : "mainCenter",
		width : 1024
	}, {
        //右边
		xtype : "panel",
		flex : 1
	} ]
});
