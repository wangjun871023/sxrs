Ext.define("app.view.main.admin.DeptPersonInfo", {
	extend : "Ext.panel.Panel",
	alias : "widget.deptPersonInfo",
	layout:"border",
	border:false,
	items : [{
		region:"west",
		xtype:"treepanel",
		border:false,
		title:"部门信息",
		split:true,
		collapsible:true,
		width:250
	},{	
		xtype:"panel",
		border:false,
		title:"人员信息",
		region:"center"
	}]
});





