/**
 * 网站的底部
 */
Ext.define("app.view.main.notify.Notify", {
	extend : "Ext.grid.Panel",
	alias : "widget.mainNotify",
	columns : [ {
		text : "标题",
		flex : 1,
		dataIndex : 'title'
	}, {
		text : "日期",
		width : 100,
		dataIndex : 'date'
	} ]
});