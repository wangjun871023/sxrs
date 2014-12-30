Ext.define("app.view.main.admin.InfoGrid", {
	extend : "app.view.common.SearchGridPanel",
	alias : "widget.infoGrid",
	store : Ext.create('app.store.InfoStore'),
	useArrows : true,
	border : true,
	requires : [ "app.view.main.admin.AddInfoWindow",
			"app.view.main.admin.EditInfoWindow",
			"app.view.common.SearchGridPanel" ],
	selType : 'checkboxmodel',
	columns : [ {
		xtype : 'rownumberer'
	}, {
		text : '标题',
		dataIndex : 'infoTitle',
		flex : 1
	}, {
		text : "时间",
		dataIndex : "infoTime"
	} ],
	tbar : [ {
		text : "新增信息",
		handler : function() {
			var tree = this.up("app-main").down("infoTypeTree");
			var model = tree.getSelection();
			model = model[0];
			if (model == null || model.id == "root") {
				Ext.Msg.alert('操作失败', "请选择信息类别！");
			} else {
				var record = {
					"infoTypeName" : model.data.infoTypeName,
					"infoTypeId" : model.id
				};
				Ext.create('app.view.main.admin.AddInfoWindow', {
					infoType : record
				}).show();
			}
		}
	}, {
		text : "修改信息",
		handler : function() {
			var grid = this.up("app-main").down("infoGrid");
			var model = grid.getSelection();
			if (model == null || model.length == 0) {
				Ext.Msg.alert('操作失败', "请选择要修改的信息!");
			} else if (model.length > 1) {
				Ext.Msg.alert('操作失败', "只能选择一条的信息记录!");
			} else {
				Ext.create('app.view.main.admin.EditInfoWindow', {
					infoEntity : model[0]
				}).show();
			}
		}
	}, {
		text : "删除信息",
		handler : function() {
			var grid = this.up("app-main").down("infoGrid");
			var models = grid.getSelection();
			if (models == null || models.length == 0) {
				Ext.Msg.alert('操作失败', "请选择要删除的信息!");
			} else {
				String
				ids = "";
				Ext.Array.each(models, function(model, index) {
					ids += model.getId()+":";
				});
				var myMask = new Ext.LoadMask(grid, {
					msg : "请稍等,正在导入..."
				});
				myMask.show();
				Ext.Ajax.request({
					url : 'info/deleteInfo.do',
					params : {
						ids : ids
					},
					success : function(response) {
						var text = response.responseText;
						if (myMask != undefined) {
							myMask.hide();
						}
						Ext.Msg.alert("操作成功", "删除成功!");
					}
				});
			}
		}
	} ]
});
