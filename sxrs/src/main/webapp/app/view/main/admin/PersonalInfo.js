Ext.define("app.view.main.admin.PersonalInfo", {
	extend : "Ext.form.Panel",
	alias : "widget.personalInfo",
    layout: 'form', 
    bodyPadding:10,
    items:[{
        xtype:'fieldset',
        width: "50%",
        title: '个人信息',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {anchor: '100%'},
        layout: 'anchor',
        items :[{
            fieldLabel: '用户名',
            name: 'field1'
        }, {
            fieldLabel: '身份',
            name: 'field2'
        },{
            fieldLabel: '姓名',
            name: 'field2'
        }, {
            fieldLabel: '工号',
            name: 'field2'
        }]      
    },{
        xtype:'fieldset',
        title: '密码维护',
        width: "50%",
        collapsible: true,
        defaultType: 'textfield',
        defaults: {anchor: '100%'},
        layout: 'anchor',
        items :[{
            fieldLabel: '原始密码',
            name: 'field1'
        }, {
            fieldLabel: '新密码',
            name: 'field2'
        }, {
            fieldLabel: '重复密码',
            name: 'field2'
        },{
            xtype:"container",
            items:[{
                xtype:"button",
                text:"修改"
            },{
                xtype:"button",
                text:"重置"
            }]
        }]
    }]    
});

