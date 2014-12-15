Ext.define("app.view.main.admin.Admin", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainAdmin",
	layout:"border",
	height:550,
	border:false,
	requires : [
        "app.view.main.admin.MenuItem"
    ],
	items : [{
		region:"west",
		xtype:"menuItem",
		border:false,
		title:"功能菜单",
		split:true,
		collapsible:true,
		width:250
	},{	
		margin:"0 0 0 1",
		border:false,
		region:"center",
		xtype:"tabpanel",
		items:[{
			title:"Tab 1",
			html:"<h2>Tab1</h2>"
		},{
			title:"Tab 2",
			html:"<h2>Tab2</h2>"
		}]
	}]
});




