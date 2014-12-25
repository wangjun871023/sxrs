Ext.define("app.view.main.admin.Admin", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainAdmin",
	layout:"border",
	height:550,
	border:false,
	requires : [
        "app.view.main.admin.MenuItem",
        "app.view.main.admin.InfoManager"
    ],
	items : [{
		region:"west",
		xtype:"menuItem",
		border:false,
		title:"功能菜单",
		autoScroll:true,
		split:true,
		collapsible:true,
		width:250
	},{	
		margin:"0 0 0 1",
		border:false,
		region:"center",
		xtype:"tabpanel",
		id:"admin-tabpanel",
		items:[{
    		xtype:"infoManager",
    		closable : true,
    		title:"信息发布"
    	}]
	}]
});




