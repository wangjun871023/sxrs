Ext.define("app.view.main.admin.InfoManager", {
	extend : "Ext.panel.Panel",
	alias : "widget.infoManager",
	layout:"border",
	border:false,
	requires : [
        "app.view.main.admin.InfoTypeTree",
        "app.view.main.admin.InfoGrid"
    ],
	items : [{
		xtype:"infoTypeTree",
		region:"west",
		width:200
	},{	
		xtype:"infoGrid",
		border:false,
		region:"center"
	}]
});


