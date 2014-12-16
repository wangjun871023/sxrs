Ext.define("app.view.main.admin.InfoManager", {
	extend : "Ext.panel.Panel",
	alias : "widget.infoManager",
	layout:"border",
	border:false,
	items : [{
		region:"west",
		xtype:"treepanel",
		border:false,
		title:"信息类别",
		split:true,
		collapsible:true,
		width:250
	},{	
		xtype:"panel",
		border:false,
		title:"详细信息",
		region:"center"
	}]
});


