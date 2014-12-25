Ext.define("app.view.main.admin.InfoManager", {
	extend : "Ext.panel.Panel",
	alias : "widget.infoManager",
	layout:"border",
	border:false,
	requires : [
        "app.view.main.admin.InfoTypeTree"
    ],
	items : [{
		xtype:"infoTypeTree",
		region:"west",
		width:230
	},{	
		xtype:"panel",
		border:false,
		region:"center"
	}]
});


