Ext.define("app.view.main.admin.InfoGrid", {
	extend : "Ext.grid.Panel",
	alias : "widget.infoGrid",
    store: Ext.create('app.store.InfoStore'),
    useArrows:true,
    border:true,
	requires : [
        "app.view.main.admin.AddInfoWindow"
    ],
    columns: [
              { text: '标题',  dataIndex: 'name',flex:1 },
              {text:"时间",dataIndex:"infoTime"}
    ],
    mask:"读取中",
    listeners:{
    },
    tbar:[{
    	text:"新增信息",
    	handler:function(){
    		var tree = this.up("app-main").down("infoTypeTree");
    		var model = tree.getSelection();
    		model = model[0];
    		console.log(model);
    		if(model==null || model.id=="root"){
    			alert("请选择信息类别！");
    		}else{
    			var record = {
    				"infoTypeName":model.data.infoTypeName,
    				"infoTypeId":model.id
    			};
	    		Ext.create('app.view.main.admin.AddInfoWindow',{
	    			infoType:record
	    		}).show();
    		}
    	}
    },{
    	text:"修改信息"
    },{
    	text:"删除信息"
    }],
	bbar: {
	      xtype: 'pagingtoolbar',
	      pageSize: 10,
	      store: this.store,
	      displayInfo: true,
	      plugins: Ext.create("Ext.ux.ProgressBarPager")
	}
});
