Ext.define("app.view.main.login.Login", {
	extend : "Ext.form.Panel",
	alias : "widget.mainlogin",
	items : [  {
		fieldLabel : 'username',
		xtype : 'textfield',
		name : 'username',
		emptyText : 'Enter a value'
	}, {
		fieldLabel : 'password',
		xtype : 'textfield',
		name : 'password',
		emptyText : 'Enter a value'
	},{
		xtype : 'button',
		text: '登录'
	},{
		xtype : 'button',
		text: '重置'
	} ]
});