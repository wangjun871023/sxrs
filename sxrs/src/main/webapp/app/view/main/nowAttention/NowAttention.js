/**
 * 当前关注
 */
Ext.define("app.view.main.nowAttention.NowAttention", {
	extend : "Ext.panel.Panel",
	alias : "widget.nowAttention",
	title : "当前关注",
	bodyPadding : 2,
	iconCls : "nowAttention",
	items : {
		xtype : "dataview",
		store : Ext.create('Ext.data.Store', {
			id : 'imagesStore',
			fields : [ {
				name : 'src',
				type : 'string'
			}, {
				name : 'caption',
				type : 'string'
			} ],
			data : [ {
				src : 'resources/attentions/1.jpg',
				caption : 'Drawing & Charts',
                url:"http://www.baidu.com"
			}, {
				src : 'resources/attentions/2.bmp',
				caption : 'Advanced Data',
                url:"http://www.baidu1.com"
			}, {
				src : 'resources/attentions/3.jpg',
				caption : 'Overhauled Theme',
                url:"http://www.baidu2.com"
			}, {
				src : 'resources/attentions/4.jpg',
				caption : 'Performance Tuned',
                url:"http://www.baidu3.com"
			}, {
				src : 'resources/attentions/2.bmp',
				caption : 'Advanced Data',
                url:"http://www.baidu4.com"
			}, {
				src : 'resources/attentions/3.jpg',
				caption : 'Overhauled Theme',
                url:"http://www.baidu5.com"
			} ] 
		}),
		tpl : new Ext.XTemplate('<tpl for=".">',
				'<div style="margin-bottom: 10px; float:left; margin-right: 10px; width:140px" class="view"> ',
				'<center><a href ="{url}" target = "blank"><img src="{src}" width="140" height="70"/>', '<br/><span><strong>{caption}</strong></span></a></center>', '</div>',
				'</tpl>'),
		itemSelector : 'div.view',
		overItemCls : 'viewHover',
		autoScroll  : true,
		emptyText : 'No images available'
	}
});
