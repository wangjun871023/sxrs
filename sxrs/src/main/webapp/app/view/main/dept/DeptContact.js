/**
 * 部门联系人信息
 */
Ext.define("app.view.main.dept.DeptContact", {
	extend : "Ext.form.Panel",
	alias : "widget.deptContact",
    bodyPadding: 5,
    layout: 'anchor',
    defaultType: 'displayfield',
    bodyStyle:"background-image:url('resources/imgs/contact.png');background-repeat: inherit;",
    defaults: {
        anchor: '100%'
    },
    items: [{
        fieldLabel: '联系人',
        name: 'first'
    },{
        fieldLabel: '电话',
        name: 'last'
    },{
        fieldLabel: '邮件',
        name: 'last'
    },{
        fieldLabel: '办公地址',
        name: 'last'
    }]
});


