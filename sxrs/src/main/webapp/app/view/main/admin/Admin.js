Ext.define("app.view.main.admin.Admin", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainAdmin",
	layout:"border",
	height:550,
	border:false,
	requires : [
        "app.view.main.admin.MenuItem",
        "app.view.main.admin.PersonalInfo",
        "app.view.main.admin.DeptPersonInfo"
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
			title:"部门人员信息",
            xtype:"deptPersonInfo"
		},{
			title:"个人信息",
            xtype:"personalInfo"
		}]
	}]
});




