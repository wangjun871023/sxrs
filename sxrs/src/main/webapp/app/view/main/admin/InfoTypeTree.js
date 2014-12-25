Ext.define("app.view.main.admin.InfoTypeTree", {
	extend : "Ext.tree.Panel",
	alias : "widget.infoTypeTree",
    autoScroll:true,
    store: Ext.create('app.store.InfoTypeTreeStore'),
    useArrows:true,
    mask:"读取中",
    listeners:{
        itemclick:function(obj,record){
            if(record.isRoot()==false){
            	
            } 
        },
        beforerender:function(panel){
            panel.getRootNode().expand(false, false);
        }
    }
});
