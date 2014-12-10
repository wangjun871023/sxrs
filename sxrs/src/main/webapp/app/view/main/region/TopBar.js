/*
 *主界面 Topbar
 * */

Ext.define('app.view.main.region.TopBar',{
    extend:"Ext.toolbar.Toolbar",
	alias : "widget.mainTopBar",
    items:[{
        xtype:"breadcrumb",
        showIcons: true,
        store:new Ext.data.TreeStore({
            root: {
                text:"首页",
                expanded: true,
                children: [{
                    text: '一级菜单',
                    children: [{ 
                        leaf:true, 
                        text: '二级菜单' 
                    }]
                }]
            }		                
        }),
        listeners:{
            selectionchange: function(bar,node) {
                 this.up("app-main").down("mainView").setHidden(false);
                 this.up("app-main").down("mainNewsInfo").setHidden(true);
                 this.up("app-main").down("mainDept").setHidden(true);
                 this.up("app-main").down("mainNewsInfoMore").setHidden(true);
                 this.up("app-main").down("mainAdmin").setHidden(true);
             }  
        }
    },
	"->",
    "今日：2012-02-32     星期一 ",
    "-",
    "访问总数：888888"
    ]
});






