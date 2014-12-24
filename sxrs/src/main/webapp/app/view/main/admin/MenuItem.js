Ext.define("app.view.main.admin.MenuItem", {
	extend : "Ext.tree.Panel",
	alias : "widget.menuItem",
    autoScroll:true,
	requires : [
        "app.store.ModelTreeStore"
    ],
    store: Ext.create('app.store.ModelTreeStore'),
    useArrows:true,
    listeners:{
        itemclick:function(){
        	
        },
        beforerender:function(panel){
            panel.getRootNode().expand(false, false);
        }
    }
});

