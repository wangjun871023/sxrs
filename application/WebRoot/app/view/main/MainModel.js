/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('app.view.main.MainModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.main',

	data : {
		name : 'app',
		// 系统信息
		system : {
			name : '山西人寿',
			version : 'version 1.0.0',
			iconUrl : 'resources/imgs/chinalife.gif'
		}
	}

});