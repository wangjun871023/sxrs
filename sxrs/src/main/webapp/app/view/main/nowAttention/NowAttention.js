/**
 * 中间的新闻
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
				caption : 'Drawing & Charts'
			}, {
				src : 'resources/attentions/2.bmp',
				caption : 'Advanced Data'
			}, {
				src : 'resources/attentions/3.jpg',
				caption : 'Overhauled Theme'
			}, {
				src : 'resources/attentions/4.jpg',
				caption : 'Performance Tuned'
			}, {
				src : 'resources/attentions/2.bmp',
				caption : 'Advanced Data'
			}, {
				src : 'resources/attentions/3.jpg',
				caption : 'Overhauled Theme'
			} ] 
		}),
		tpl : new Ext.XTemplate('<tpl for=".">',
				'<div style="margin-bottom: 10px; float:left; margin-right: 10px; width:140px" class="view"> ',
				'<center><img src="{src}" width="140" height="70"/>', '<br/><span><strong>{caption}</strong></span></center>', '</div>',
				'</tpl>'),
		itemSelector : 'div.view',
		overItemCls : 'viewHover',
		autoScroll  : true,
		emptyText : 'No images available'
	}
});
