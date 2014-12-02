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
		text : '日志系统',
        scale: "small",
        iconAlign:"top",
        iconCls:"logSystem"
	}, {
		width:70,
		text : 'SDMS',
        iconAlign:"top",
        iconCls:"sdms"
	}, {
		width:70,
		text : '统计系统',
        iconAlign:"top",
        iconCls:"accoutSys"
	}, {		
		width:70,
		text : '统计备用',
        iconAlign:"top",
        iconCls:"accoutBack"
	}, {
		width:70,
		text : '总部网站',
        iconAlign:"top",
        iconCls:"hostWeb"
	}, {
		width:70,
		text : '网站索引',
        iconAlign:"top",
        iconCls:"webIndex"
	}, {
		width:70,
		text : '软件下载',
        iconAlign:"top",
        iconCls:"softDown"
	}, {
		width:70,
		text : '在线考试',
        iconAlign:"top",
        iconCls:"examOnline"
	}, {
		width:70,
		text : '在线测评',
        iconAlign:"top",
        iconCls:"evaluateOnline"
	} , {
		width:70,
		text : '举报系统',
        iconAlign:"top",
        iconCls:"complaintSys"
	} , {
		width:70,
		text : '制度查询',
        iconAlign:"top",
        iconCls:"regimeSearch"
	} , {
		width:70,
		text : '知识库',
        iconAlign:"top",
        iconCls:"knowLib"
	} , {
		width:70,
		text : '食堂',
        iconAlign:"top",
        iconCls:"dinerLib"
	} ]
});
