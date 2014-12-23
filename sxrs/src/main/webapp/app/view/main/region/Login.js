Ext.define("app.view.main.region.Login", {
	extend : "Ext.form.Panel",
	alias : "widget.mainlogin",
	animCollapse : true,
	collapsible : true,
	bodyPadding : 10,
    requires:[
        "app.store.DeptStore"
    ],
	defaults : {
		xtype : 'textfield',
		layout : 'anchor',
		msgTarget : 'side',
		allowBlank : true,
		labelWidth : 50
	},
	items : [ {
		fieldLabel : '用户',
		anchor : '100%',
		name : 'username'
	}, {
		fieldLabel : '密 码',
		anchor : '100%',
		inputType : 'password',
		name : 'password'
	}, {
		xtype : "combo",
		fieldLabel : '机构',
		anchor : '100%',
        store:  Ext.create("app.store.DeptStore"),
        queryMode: 'local',
        displayField: 'deptName',
        valueField: 'id'    
	}, {
		xtype : "container",
		layout:"column",
		items:[{
			fieldLabel : '验证码',
			xtype : 'textfield',
			width:155,
			labelWidth : 50,
			name : 'password'
		},{
			xtype:"button",
			margin:"1 0 1 5",
			text:"换一个",
			handler:function(){
				var img = this.up("mainlogin").down("image");
				img.setSrc(img.src+"&"+new Date());
			}
		}]
	}, {
		xtype : "image",
		margin:"1 0 1 55",
		src : "verfityCode/getCodeImage.do?width=100&height=30"
	}],
	buttons : [ {
		text : '登录',
		handler : function() {
			this.up("app-main").down("mainView").setHidden(true);
			this.up("app-main").down("mainNewsInfo").setHidden(true);
			this.up("app-main").down("mainDept").setHidden(true);
			this.up("app-main").down("mainNewsInfoMore").setHidden(true);
			this.up("app-main").down("mainAdmin").setHidden(false);
		}
	}, {
		text : '重置'
	} ]
});
