Ext.define("app.view.main.admin.EditInfoWindow", {
	extend : "Ext.window.Window",
	alias : "widget.editWin",
	title: '修改信息',
	width:850,
	height:500,
	bodyPadding: 5,
	layout: 'fit',
	maximizable : true,
	modal:true,
	infoEntity:null,
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
				fieldLabel: '标题',
				name:"infoTitle"
			},{
				fieldLabel: '类别',
				xtype:"combo",
			    store: Ext.create("app.store.InfoTypeStore"),
			    queryMode: 'local',
			    editable:false,
			    displayField: 'infoTypeName',
			    name:"infoTypeId",
			    valueField: 'id'
			},{
				fieldLabel: '文号',
				allowBlank :true,
				name:"infoNo"
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
			    name:"infoEms",
			    valueField: 'id'
			},{
				hidden:true,
				name:"infoContent"
			},{
				hidden:true,
				name:"id"
			}]
		},{
			flex:1,
			allowBlank : false,
			width:"100%",
			xtype:"htmleditor",
			enableSourceEdit :false,
			plugins : [
	        	Ext.create('app.view.common.HtmlEditorImage'),
	        	Ext.create('app.view.common.HtmlEditorAttachment')
	        ],
			listeners:{
				change:function(editor,newValue){
		        	var content = this.up("editWin").down("textfield[name='infoContent']");
		        	content.setValue(newValue);
				}
			}
		}]
	}],
    buttons: [{
        text: '确定',
        handler: function() {
        	var form = this.up("editWin").down("form").getForm();
        	if (form.isValid()) {
                  form.submit({
                	  url:"info/editInfo.do",
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
        	this.up("editWin").close();
        }
    }],
    listeners:{
    	beforerender:function(){
    		var form = this.down("form").getForm();
    		var entity = this.infoEntity;
    		form.loadRecord(entity);
    		this.down("htmleditor").setValue(entity.data.infoContent);
    	}
    }
});