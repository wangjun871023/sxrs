Ext.define("app.view.main.login.Login", {
	extend : "Ext.form.Panel",
	alias : "widget.mainlogin",
	animCollapse : true,
	collapsible:true,
	bodyPadding : 10,
	defaults: {
        xtype: 'textfield',
        layout: 'anchor',
        msgTarget: 'side',
        allowBlank: true,
        labelWidth:50
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
		xtype:"combo",
		fieldLabel : '机构',
		anchor : '100%',
		name : 'password'
	},  {
		fieldLabel : '验证码',
		anchor : '100%',
		inputType : 'password',
		name : 'password'
	}],
	buttons : [ {
		text : '登录'
	}, {
		text : '重置'
	} ]
});