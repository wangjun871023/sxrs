Ext.define("app.view.main.region.DeptPanel", {
	extend : "Ext.tree.Panel",
	alias : "widget.deptPanel",
    autoScroll:true,
    requires:[
        "app.store.DeptTreeStore"
    ],
    store: Ext.create('app.store.DeptTreeStore'),
    useArrows:true,
    mask:"读取中",
    listeners:{
        itemclick:function(obj,record){
            if(record.isRoot()==false){
                this.up("app-main").down("mainView").setHidden(true);
                this.up("app-main").down("mainNewsInfo").setHidden(true);
                this.up("app-main").down("mainDept").setHidden(false);
                this.up("app-main").down("mainNewsInfoMore").setHidden(true);
                this.up("app-main").down("mainAdmin").setHidden(true);
            } 
        },
        beforerender:function(panel){
            panel.getRootNode().expand(false, false);
        }
    }
});
