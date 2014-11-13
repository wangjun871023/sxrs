Ext.define("app.view.main.region.Login", {
	extend : "Ext.panel.Panel",
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
	} ]
});