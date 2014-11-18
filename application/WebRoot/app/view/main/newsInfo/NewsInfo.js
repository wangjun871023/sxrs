Ext.define('app.view.main.newsInfo.NewsInfo', {
	extend : 'Ext.panel.Panel',
	alias : "widget.mainNewsInfo",
	//overflowY : "scroll",
	items : [ {
		xtype : "panel",
		html:"test<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a",
		bbar:['->',{
			text:"返回"
		}]
	} ]
});
