Ext.define("app.view.main.admin.AddInfoWindow", {
	extend : "Ext.window.Window",
	alias : "widget.addWin",
	title: '新增信息',
	width:850,
	height:500,
	bodyPadding: 5,
	layout: 'fit',
	maximizable : true,
	modal:true,
	requires : [
        "app.view.common.HtmlEditorImage",
        "app.view.common.HtmlEditorAttachment"
    ],
	items:[{
		xtype:"container",
		frame:false,
		border:false,
		layout:"vbox",
		items:[{
			height:130,
			xtype:"form",
			frame:false,
			border:false,
			defaults : {
				xtype : 'textfield',
				width:600,
				msgTarget : 'title',
				allowBlank : false,
				labelWidth : 50
			},
			items:[{
				fieldLabel: '标题'
			},{
				fieldLabel: '类别'
			},{
				fieldLabel: '文号',
				allowBlank : false
			},{
				fieldLabel: '紧急',
				xtype:"combo",
			    store: Ext.create("Ext.data.Store",{
			    	fields: ['id', 'name'],
		    	    data : [
			    	        {"id":"01", "name":"是"},
			    	        {"id":"02", "name":"否"}
		    	    ]
			    }),
			    queryMode: 'local',
			    editable:false,
			    displayField: 'name',
			    valueField: 'id'
			},{
				hidden:true,
				name:"content"
			}]
		},{
			fieldLabel: '内容',
			labelWidth : 50
		},{
			width:"100%",
			height:500,
			enableSourceEdit : false,
			xtype:"htmleditor",
		    plugins : [
	        	Ext.create('app.view.common.HtmlEditorImage'),
	        	Ext.create('app.view.common.HtmlEditorAttachment')
	        ],
			listeners:{
				change:function(editor,newValue){
		        	var content = this.up("addWin").down("textfield[name='content']");
		        	content.setValue(newValue);
				}
			}
		}]
	}],
    buttons: [{
        text: '确定',
        handler: function() {
        	var form = this.up("addWin").down("form").getForm();
        	if (form.isValid()) {
                  form.submit({
                      success: function(form, action) {
                         Ext.Msg.alert('Success', action.result.msg);
                      },
                      failure: function(form, action) {
                          Ext.Msg.alert('Failed', action.result.msg);
                      }
                  });
            }
        
        }
    }, {
        text: '取消',
        handler: function() {
        	this.up("addWin").close();
        }
    }]
});