Ext.define("app.view.main.dept.DeptInfoType", {
	extend : "Ext.tree.Panel",
	alias : "widget.deptInfoType",
    autoScroll:true,
    store: Ext.create('Ext.data.TreeStore', {
        root: {
            text:"信息类别",
            expanded: true,
            children: [
                { text: "类别1", leaf: true },
                { text: "类别1", leaf: true },
                { text: "类别1", leaf: true },
                { text: "类别1", leaf: true },
                { text: "类别1", leaf: true },
                { text: "类别1", leaf: true },
                { text: "类别1", leaf: true },
                { text: "类别1", leaf: true },
                { text: "类别1", leaf: true },
                { text: "类别2", leaf: true },
                { text: "类别2", leaf: true },
                { text: "类别2", leaf: true },
                { text: "类别2", leaf: true },
                { text: "类别2", leaf: true },
                { text: "类别2", leaf: true },
                { text: "类别2", leaf: true },
                { text: "类别2", leaf: true }
            ]
        }
    }),
    useArrows:true,
    listeners:{
        itemclick:function(){
            alert("类型");
        }
    }
});

