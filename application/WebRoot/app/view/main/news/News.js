/**
 * 网站的底部
 */
Ext.define("app.view.main.news.News", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainNews",
	id:"mainNews",
	bodyStyle: {  
        "background-image": "url(resources/news/news1.jpg)",
        "background-repeat": "no-repeat",
        "background-size": "100% 100%"
	},
	layout:"border",
	items : [{
		xtype:"container",
		region:"center"
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
			bodyPadding : 10,
			items:[{
				xtype : "button",
				text : "1",
				handler:function(){
					var obj = Ext.getCmp("mainNews");
					var object = { "background-image": "url(resources/attentions/1.jpg)",
					        "background-repeat": "no-repeat",
					        "background-size": "100% 100%"};
					obj.setBodyStyle(object);
				}
			}, {
				xtype : "button",
				text : "2"
			}, {
				xtype : "button",
				text : "3"
			}, {
				xtype : "button",
				text : "4"
			}]
		}]
		
	}]
});