Ext.define("app.view.main.login.Login", {
	extend : "Ext.form.Panel",
	alias : "widget.mainlogin",
	bodyPadding : 10,
	defaults: {
        xtype: 'textfield',
        layout: 'anchor',
        msgTarget: 'side',
        allowBlank: false,
        labelWidth:40
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
		fieldLabel : '机构',
		anchor : '100%',
		inputType : 'password',
		name : 'password'
	} ],
	buttons : [ {
		text : '登录'
	}, {
		text : '重置'
	} ]
});