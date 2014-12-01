/**
 * 网站的顶部
 */
Ext.define("app.view.main.region.Top", {
	extend : "Ext.panel.Panel",
	alias : "widget.maintop",
	items : [ {
		xtype : "image",
		bind : {
			hidden : "{!system.iconTopUrl}",
			src : "{system.iconTopUrl}"
		}
	} ],
	bbar : [ {
		width:70,
		text : '日志系统'
	}, {
		width:70,
		text : 'SDMS'
	}, {
		width:70,
		text : '统计系统'
	}, {		
		width:70,
		text : '统计备用'
	}, {
		width:70,
		text : '总部网站'
	}, {
		width:70,
		text : '网站索引'
	}, {
		width:70,
		text : '软件下载'
	}, {
		width:70,
		text : '在线考试'
	}, {
		width:70,
		text : '在线测评'
	} , {
		width:70,
		text : '举报系统'
	} , {
		width:70,
		text : '制度查询'
	} , {
		width:70,
		text : '知识库'
	} , {
		width:70,
		text : '食堂'
	} ]
});
