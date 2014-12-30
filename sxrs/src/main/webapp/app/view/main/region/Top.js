/**
 * 网站的顶部
 */
Ext.define("app.view.main.region.Top", {
	extend : "Ext.panel.Panel",
	alias : "widget.maintop",
	items : [{
		xtype : "image",
		src : "/sxrs/resources/imgs/chinalife.gif"
	}],
	bbar : [ {
		width:70,
		text : '日志系统',
        scale: "small",
        iconAlign:"top",
        iconCls:"logSystem",
        href:"http://10.176.128.39/logg"
	}, {
		width:70,
		text : 'SDMS',
        iconAlign:"top",
        iconCls:"sdms",
        href:"http://sdms.clic"
	}, {
		width:70,
		text : '统计系统',
        iconAlign:"top",
        iconCls:"accoutSys",
        href:"http://10.176.128.33/portalweb/"
	}, {
		width:70,
		text : '总部网站',
        iconAlign:"top",
        iconCls:"hostWeb",
        href:"http://chinalife.clic/"
	}, {
		width:70,
		text : '网站索引',
        iconAlign:"top",
        iconCls:"webIndex",
        href:"http://report.ax.clic"
	}, {
		width:70,
		text : '软件下载',
        iconAlign:"top",
        iconCls:"softDown",
        href:"ftp://chinalife:chinalife@10.176.128.49"
	},{
		width:70,
		text : '举报系统',
        iconAlign:"top",
        iconCls:"complaintSys",
        href:"http://10.24.56.19:9999/kpims/"
	} , {
		width:70,
		text : '制度查询',
        iconAlign:"top",
        iconCls:"regimeSearch",
        href:"http://10.25.0.111:7001/lifeinfo"
	} , {
		width:70,
		text : '知识库',
        iconAlign:"top",
        iconCls:"knowLib",
        href:"http://10.176.128.39/zhishi"
	} , {
		width:70,
		text : '食堂',
        iconAlign:"top",
        iconCls:"dinerLib",
        href:"http://10.176.128.39/dingcan"
	} , {		
		width:70,
		text : '邮件',
        iconAlign:"top",
        iconCls:"accoutBack",
        href:"http://mail.clic"
	},{
		width:70,
		text : '公文',
        iconAlign:"top",
        iconCls:"examOnline",
        href:"http://10.21.2.2:8000"
	}, {
		width:70,
		text : 'SAP系统',
        iconAlign:"top",
        iconCls:"evaluateOnline",
        href:"http://vscspt.sap.erp.clic:8080/irj/portal"
	}]
});
