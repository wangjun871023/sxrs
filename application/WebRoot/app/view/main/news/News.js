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
	bbar:[{
		xtype:"button",
		width:300,
		text:"公司召开2014年第一次临时股东大会"
	},"->",{
		text : "1",
		handler:function(){
			var obj = Ext.getCmp("mainNews");
			var object = { "background-image": "url(app/view/main/news/images/1.jpg)",
			        "background-repeat": "no-repeat",
			        "background-size": "100% 100%"};
			obj.setBodyStyle(object);
		}
	},'-', {
		text : "2",
		handler:function(){
			var obj = Ext.getCmp("mainNews");
			var object = { "background-image": "url(app/view/main/news/images/2.jpg)",
			        "background-repeat": "no-repeat",
			        "background-size": "100% 100%"};
			obj.setBodyStyle(object);
		}
	},'-', {
		text : "3",
		handler:function(){
			var obj = Ext.getCmp("mainNews");
			var object = { "background-image": "url(app/view/main/news/images/3.jpg)",
			        "background-repeat": "no-repeat",
			        "background-size": "100% 100%"};
			obj.setBodyStyle(object);
		}
	},'-', {
		text : "4",
		handler:function(){
			var obj = Ext.getCmp("mainNews");
			var object = { "background-image": "url(app/view/main/news/images/4.jpg)",
			        "background-repeat": "no-repeat",
			        "background-size": "100% 100%"};
			obj.setBodyStyle(object);
		}
	}]
});