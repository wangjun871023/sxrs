Ext.define('app.view.main.Main', {
	extend : 'Ext.container.Container',
	requires : [ 'app.view.main.MainController',
	             'app.view.main.region.Top',
			'app.view.main.region.Bottom',
			'app.view.main.region.MainView', 
			'app.view.main.newsInfo.NewsInfo', 
			'app.view.main.dept.Dept', 
			'app.view.main.MainModel' ],
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
		             }  
			     }
			}
			,"->","今日：2012-02-32     星期一 ","-", "访问总数：888888"],
			items:[{
				xtype:"mainNewsInfo",
				hidden:true
			},{
				xtype:"mainDept",
				hidden:true
			},{
				xtype:"mainView"
			}]
		}, {
			xtype : 'mainbottom',
			height : 30
		} ]
	}, {
		xtype : "panel",
		flex : 1
	} ]
});
