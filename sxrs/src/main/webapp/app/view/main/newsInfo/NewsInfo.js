Ext.define('app.view.main.newsInfo.NewsInfo', {
	extend : 'Ext.panel.Panel',
	alias : "widget.mainNewsInfo",
	//overflowY : "scroll",
	items : [ {
		xtype : "panel",
		html:"test<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a<p>a",
		bbar:['->',{
			text:"关闭",
			handler:function(){
				window.opener = null;//为了不出现提示框 
				window.close();
			}
		},'->'],
		listeners:{
			beforerender:function(){
				var panel = this.up("mainNewsInfo");
				var myMask = new Ext.LoadMask(panel, {
					msg : "请稍等,正在导入..."
				});
				myMask.show();
				var id = getQueryString("id");	
				Ext.Ajax.request({
					url : 'info/showInfo.do',
					params : {
						id : id
					},
					success : function(response) {
						var text = response.responseText;
						var info = Ext.decode(text);
						if (myMask != undefined) {
							myMask.hide();
						}
						panel.down("panel").setHtml(info.model.infoContent);
					}
				});
			}
		}
	} ]
	
});
