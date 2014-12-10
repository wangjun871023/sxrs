Ext.define('app.view.main.region.MainCenter', {
	extend : 'Ext.panel.Panel',
	requires : [ 
            'app.view.main.MainController',
            'app.view.main.MainModel',
                
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
        bodyPadding : 1,
        xtpe:"panel",
        tbar:[{
            xtype: 'breadcrumb',
            showIcons: true,
				 store:new Ext.data.TreeStore({
			            root: {
			            	text:"首页",
			                expanded: true,
			                children: [
			                    {
			                        text: '一级菜单',
			                        children: [
			                            { leaf:true, text: '二级菜单' }
			                        ]
			                    }
			                ]
			            }
			     }),
			     listeners:{
			    	 selectionchange: function(bar,node) {
			    		 this.up("app-main").down("mainView").setHidden(false);
			    		 this.up("app-main").down("mainNewsInfo").setHidden(true);
		    			 this.up("app-main").down("mainDept").setHidden(true);
		    			 this.up("app-main").down("mainNewsInfoMore").setHidden(true);
		    			 this.up("app-main").down("mainAdmin").setHidden(true);
		             }  
			     }
			}
			,"->","今日：2012-02-32     星期一 ","-", "访问总数：888888"],
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
				hidden:false
			}]
    }, {
        //下面的pic
        xtype : 'mainbottom',
        height : 50
    }]
});

