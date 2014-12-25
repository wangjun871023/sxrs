Ext.define("app.view.main.admin.InfoGrid", {
	extend : "Ext.grid.Panel",
	alias : "widget.infoGrid",
    store: Ext.create('app.store.InfoStore'),
    useArrows:true,
    border:true,
    columns: [
              { text: '标题',  dataIndex: 'name',flex:1 },
              {text:"时间",dataIndex:"infoTime"}
    ],
    mask:"读取中",
    listeners:{
    }
});
