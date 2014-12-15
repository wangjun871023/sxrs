Ext.define("app.view.main.admin.MenuItem", {
	extend : "Ext.tree.Panel",
	alias : "widget.menuItem",
    autoScroll:true,
    store: Ext.create('Ext.data.TreeStore', {
        root: {
            text:"功能菜单",
            expanded: true,
            children: [
                { text: "部门人员信息", leaf: true },
                { text: "通知发文", leaf: true },
                { text: "信息类别", leaf: true },
                { text: "图片新闻", leaf: true },
                { text: "部门动态", leaf: true },
                { text: "联系方式", leaf: true },
                { text: "热点关注", leaf: true },
                { text: "理论学习", leaf: true },
                { text: "信息交流", leaf: true },
                { text: "网站维护", leaf: true },
                { text: "每日更新", leaf: true },
                { text: "当前关注", leaf: true },
                { text: "网上投票", leaf: true },
                { text: "网上考试", leaf: true },
                { text: "网上测评", leaf: true },
                { text: "个人信息", leaf: true }
            ]
        }
    }),
    useArrows:true,
    listeners:{
        itemclick:function(){
              
        }
    }
});

