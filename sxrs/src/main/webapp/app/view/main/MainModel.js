/**
 * Main系统ViewModel
 */
Ext.define('app.view.main.MainModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.mainViewModel',
	data : {
		name : 'app',
		// 系统信息
		system : {
			name : '山西人寿',
			version : 'version 1.0.0',
			iconTopUrl : 'resources/imgs/chinalife.gif',
			iconBottomUrl : 'resources/imgs/bottom_bg.gif'
		}
	}

});
