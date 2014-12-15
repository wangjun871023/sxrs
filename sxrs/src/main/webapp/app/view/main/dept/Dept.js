Ext.define('app.view.main.dept.Dept', {
	extend : 'Ext.panel.Panel',
	alias : "widget.mainDept",
	requires : [
        'app.view.main.dept.DeptNotify',
        'app.view.main.dept.DeptContact',
        'app.view.main.news.DeptNews'
    ],
	layout : "column",
	bodyPadding : 1,
	items : [ {
		xtype:"panel",
		columnWidth : 0.3,
		bodyPadding : 1,
		items:[ {
			xtype : "deptNotify",
			title : "部门通知发文",
			height : 240
		},{
			xtype : "panel",
			title : "信息类别",
			margin:"5 0 0 0",
			bodyPadding : 10,
			defaults:{
				xtype:"button",
				width:100,
				bodyPadding : 5,
				margin:"0 0 0 5"
			},
			layout : {
				type : "table",
				columns : 2,
			},
			items : [ {
				text : "信息类别1"
			}, {
				text : "信息类别2"
			}, {
				text : "信息类别3"
			}, {
				text : "信息类别4"
			}, {
				text : "信息类别5"
			}, {
				text : "信息类别6"
			}, {
				text : "信息类别7"
			} ]
		}]
	},{
		xtype:"panel",
		bodyPadding : 1,
		columnWidth : 0.7,
		items:[ {
			xtype:"panel",
			layout:"column",
			items:[ {
				columnWidth : 0.7,
				xtype : "deptNews",
				title : "图片新闻",
				height : 240
			},{
				columnWidth : 0.3,
				xtype : "deptContact",
				margin:"0 0 0 1",
				title : "联系方式",
				height : 240
			}]
		},{
			xtype : "grid",
			margin:"5 0 0 0",
			title : "部门动态",
			height : 300
		}]
	}]
});
