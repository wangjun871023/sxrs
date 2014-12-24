Ext.define("app.view.main.region.Login", {
	extend : "Ext.form.Panel",
	alias : "widget.mainlogin",
	animCollapse : true,
	collapsible : true,
	bodyPadding : 10,
	requires : [ "app.store.DeptStore" ],
	defaults : {
		xtype : 'textfield',
		layout : 'anchor',
		msgTarget : 'title',
		allowBlank : false,
		labelWidth : 50
	},
	items : [ {
		fieldLabel : '用户名',
		anchor : '100%',
		name : 'userName',
		emptyText : "请输入用户名"
	}, {
		fieldLabel : '密 码',
		anchor : '100%',
		emptyText : "请输入密码",
		inputType : 'password',
		name : 'userPass'
	}, {
		xtype : "combo",
		fieldLabel : '机构',
		anchor : '100%',
		store : Ext.create("app.store.DeptStore"),
		queryMode : 'local',
		displayField : 'deptName',
		editable : false,
		emptyText : "请选择部门",
		name : 'deptId',
		valueField : 'id'
	}, {
		xtype : "container",
		layout : "column",
		items : [ {
			fieldLabel : '验证码',
			xtype : 'textfield',
			width : 155,
			labelWidth : 50,
			msgTarget : 'title',
			allowBlank : false,
			emptyText : "下方验证码",
			name : 'verifyCode'
		}, {
			xtype : "button",
			margin : "1 0 1 5",
			text : "换一个",
			handler : function() {
				var img = this.up("mainlogin").down("image");
				img.setSrc(img.src + "&" + new Date());
			}
		} ]
	}, {
		xtype : "image",
		margin : "1 0 1 55",
		src : "verfityCode/getCodeImage.do?width=100&height=30"
	} ],
	url : "user/login.do",
	buttons : [{
        text : '登录',
        formBind : true,
        disabled : true,
        handler : function() {
            var form = this.up('form').getForm();
            var mainView = this.up("app-main").down("mainView");
            var mainNewsInfo = this.up("app-main").down("mainNewsInfo");
            var mainDept= this.up("app-main").down("mainDept");
            var mainNewsInfoMore = this.up("app-main").down("mainNewsInfoMore");
            var mainAdmin= this.up("app-main").down("mainAdmin");

            if (form.isValid()) {
                form.submit({
                    waitTitle : "登录中", 
                    waitMsg: "登录中", 
                    success : function(form, action) {
                        if(action.result.model.mid == "0001"){

                        }

                        if(action.result.model.mid == "0002"){
                        }

                        if(action.result.model.mid == "0003"){
                        }

                        mainView.setHidden(true);
                        mainDept.setHidden(true);
                        mainNewsInfo.setHidden(true);
                        mainNewsInfoMore.setHidden(true);
                        mainAdmin.setHidden(false);
                    },
                    failure : function(form, action) {
                        Ext.Msg.alert('操作失败', action.result.model.info);
                    }
                });
            }
        }
    }, {
        text : '重置',
        handler : function() {
            this.up('form').getForm().reset();
        }
    } ]
});
