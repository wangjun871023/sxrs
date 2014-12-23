Ext.define("app.view.main.region.Login", {
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
	},{
		xtype:"image",
		src:"verfityCode/getCodeImage.do?width=100&height=40",
		alt:"换一个"
	}],
	buttons : [ {
		text : '登录',
        handler:function(){
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
