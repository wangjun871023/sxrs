/*
 * 中间的MainCenter
 * */
Ext.define('app.view.main.region.MainCenter', {
	extend : 'Ext.panel.Panel',
	requires : [ 
            'app.view.main.MainController',
            'app.view.main.MainModel',
                  
            'app.view.main.region.TopBar',

            'app.view.main.region.Top',
			'app.view.main.region.Bottom',

			'app.view.main.region.MainView', 
			'app.view.main.newsInfo.NewsInfo', 
			'app.view.main.newsInfo.NewsInfoMore', 
			'app.view.main.admin.Admin',
			'app.view.main.dept.Dept'
    ],
    //别名
	alias : "widget.mainCenter",
    //控制器
	controller : 'mainController',
    //ViewModel
	viewModel : {
		type : 'mainViewModel'
	},
    //MainView中间
    items : [{
        //上面Pic
        xtype : 'maintop',
        height : 155
    }, {
        xtpe:"panel",
        bodyPadding : 1,
        dockedItems: [{
            xtype: 'mainTopBar',
            dock: 'top'
        }],
		items:[{
            xtype:"mainView",
            hidden:true
        },{
            xtype:"mainDept",
            hidden:true
        },{
            xtype:"mainNewsInfoMore",
            hidden:true
        },{
            xtype:"mainNewsInfo",
            hidden:true
        },{
            xtype:"mainAdmin",
            hidden:true
        }]
    }, {
        //下面的pic
        xtype : 'mainbottom',
        height : 50
    }]
});

