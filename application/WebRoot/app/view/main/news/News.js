/**
 * 网站的底部
 */
Ext.define("app.view.main.news.News", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainNews",
	id:"mainNews",
	bodyStyle: {  
        "background-image": "url(app/view/main/news/images/1.jpg)",
        "background-repeat": "no-repeat",
        "background-size": "100% 100%"
	},
	layout:"border",
	items : [{
		xtype:"container",
		region:"center",
		layout:"vbox",
		bodyPadding : 10,
		items:[{
			xtype:"container",
			flex:10
		},{
			xtype:"label",
			flex:1.5,
			text:"中国人寿",
			frame:true	
		}]
	},{
		xtype:"container",
		region:"east",
		layout:"vbox",
		items:[{
			xtype:"container",
			flex:10
		},{
			xtype:"container",
			flex:1.5,
			frame:true,
			bodyPadding : 10,
			items:[{
				xtype : "button",
				text : "1",
				handler:function(){
					var obj = Ext.getCmp("mainNews");
					var object = { "background-image": "url(app/view/main/news/images/1.jpg)",
					        "background-repeat": "no-repeat",
					        "background-size": "100% 100%"};
					obj.setBodyStyle(object);
				}
			}, {
				xtype : "button",
				text : "2",
				handler:function(){
					var obj = Ext.getCmp("mainNews");
					var object = { "background-image": "url(app/view/main/news/images/2.jpg)",
					        "background-repeat": "no-repeat",
					        "background-size": "100% 100%"};
					obj.setBodyStyle(object);
				}
			}, {
				xtype : "button",
				text : "3",
				handler:function(){
					var obj = Ext.getCmp("mainNews");
					var object = { "background-image": "url(app/view/main/news/images/3.jpg)",
					        "background-repeat": "no-repeat",
					        "background-size": "100% 100%"};
					obj.setBodyStyle(object);
				}
			}, {
				xtype : "button",
				text : "4",
				handler:function(){
					var obj = Ext.getCmp("mainNews");
					var object = { "background-image": "url(app/view/main/news/images/4.jpg)",
					        "background-repeat": "no-repeat",
					        "background-size": "100% 100%"};
					obj.setBodyStyle(object);
				}
			}]
		}]
		
	}]
});