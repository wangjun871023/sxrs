Ext.define("app.view.main.admin.MenuItem", {
	extend : "Ext.tree.Panel",
	alias : "widget.menuItem",
    autoScroll:true,
	requires : [
        "app.store.ModelTreeStore",
        "app.view.main.admin.InfoManager"
    ],
    store: Ext.create('app.store.ModelTreeStore'),
    useArrows:true,
    listeners:{
        itemclick:function(tree,record){
        	var tabs = this.up("app-main").down("tabpanel[id='admin-tabpanel']");
        	if(record.data.text == "信息发布"){
        		var infoManager =  this.up("app-main").down("infoManager");
            	if(infoManager==null){
            		tab = tabs.add({
                		xtype:"infoManager",
                		closable : true,
                		title:"信息发布"
                	});
            		tabs.setActiveTab(tab);
            	}else{
    	        	tabs.setActiveTab(infoManager);
            	}
        	}
        },
        beforerender:function(panel){
            panel.getRootNode().expand(false, false);
        }
    }
});

