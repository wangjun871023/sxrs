Ext.define("app.view.main.admin.MenuItem", {
	extend : "Ext.tree.Panel",
	alias : "widget.menuItem",
    autoScroll:true,
    store: Ext.create('Ext.data.TreeStore', {
        root: {
            text:"功能菜单",
            expanded: true,
            children: [
                { text: "功能一", leaf: true },
                { text: "功能二", leaf: true }
            ]
        }
    }),
    useArrows:true,
    listeners:{
        itemclick:function(){

        }
    }
});

