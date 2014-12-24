Ext.define("app.view.main.admin.InfoManager", {
	extend : "Ext.panel.Panel",
	alias : "widget.infoManager",
	layout:"border",
	border:false,
	items : [{
		region:"west",
		xtype:"treepanel",
		border:false,
		width:230
	},{	
		xtype:"panel",
		border:false,
		region:"center"
	}]
});


