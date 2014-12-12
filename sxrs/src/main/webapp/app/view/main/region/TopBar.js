/*
 *主界面 Topbar
 * */

Ext.define('app.view.main.region.TopBar',{
    extend:"Ext.toolbar.Toolbar",
	alias : "widget.mainTopBar",
    initComponent: function() {
        this.callParent(arguments);
    },
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
	"->",{
        xtype:"label",
        text:"今日：2012-02-32     星期一 ",
        listeners:{
            beforerender:function(label){
            	var txt = Ext.Date.format(new Date(), '今日：l, Y-m-d');
                label.setText(txt);
            }
        }
    },
    "-",{
        xtype:"label",
        action:"count",
        text:"访问总数：888888"
    }]
});






