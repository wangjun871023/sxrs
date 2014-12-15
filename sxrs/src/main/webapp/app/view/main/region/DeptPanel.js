Ext.define("app.view.main.region.DeptPanel", {
	extend : "Ext.tree.Panel",
	alias : "widget.deptPanel",
    autoScroll:true,
    store: Ext.create('Ext.data.TreeStore', {
        root: {
            text:"公司部门",
            expanded: true,
            children: [
                { text: "办公室", leaf: true },
                { text: "工会工作部", leaf: true },
                { text: "监察部公室", leaf: true },
                { text: "销售督察部", leaf: true },
                { text: "内控合规部", leaf: true },
                { text: "人力资源部", leaf: true },
                { text: "教育培训部", leaf: true },
                { text: "电销中心", leaf: true },
                { text: "健康保险部", leaf: true },
                { text: "团体业务部", leaf: true },
                { text: "个险销售部", leaf: true },
                { text: "县域保险部", leaf: true },
                { text: "银行保险部", leaf: true },
                { text: "客服管理", leaf: true },
                { text: "业务管理", leaf: true },
                { text: "财务管理", leaf: true },
                { text: "信息技术部", leaf: true }
            ]
        }
    }),
    useArrows:true,
    listeners:{
        itemclick:function(){
             this.up("app-main").down("mainView").setHidden(true);
             this.up("app-main").down("mainNewsInfo").setHidden(true);
             this.up("app-main").down("mainDept").setHidden(false);
             this.up("app-main").down("mainNewsInfoMore").setHidden(true);
             this.up("app-main").down("mainAdmin").setHidden(true);
        }
    }
});
