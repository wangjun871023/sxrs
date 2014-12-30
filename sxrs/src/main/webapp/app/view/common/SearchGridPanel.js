Ext.define("app.view.common.SearchGridPanel", {
	extend : "Ext.grid.Panel",
	alias : 'widget.searchgridpanel',
	requires : [ 'Ext.selection.CheckboxModel' ],
	loadMask : true,
	toolbarItems : null,
	extraParams : null,

	initComponent : function() {
		var me = this;

		me.dockedItems = [ {
			xtype : 'pagingtoolbar',
			pageSize : 15,
			store : me.store, // same store GridPanel is using
			dock : 'bottom',
			beforePageText : "页",
			afterPageText : "共 {0}页",
			displayMsg : "记录数{0} - {1} 共{2}",
			displayInfo : true,
			 plugins: Ext.create("Ext.ux.ProgressBarPager")
		} ];

		me.store.on('beforeload', function(store, options) {
			Ext.apply(me.store.proxy.extraParams, this.extraParams);
		});

		me.callParent(arguments);
	}
});
