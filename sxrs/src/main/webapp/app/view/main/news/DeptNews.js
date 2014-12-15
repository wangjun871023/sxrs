/**
 * 部门的新闻
 */
Ext.define("app.view.main.news.DeptNews", {
	extend : "Ext.panel.Panel",
	alias : "widget.deptNews",
	html:"<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" " +
			"codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\" " +
			"width=\"100%\" height=\"100%\">" +
			"<param name=\"movie\" value=\"common/bcastr/bcastr3.swf\">" +
			"<param name=\"quality\" value=\"high\">" +
			"<param name=\"wmode\" value=\"transparent\">" +
			"<param name=\"FlashVars\" value=\"bcastr_xml_url=app/view/main/news/xml/bcastr.xml\">" +
			"<embed src=\"common/bcastr/bcastr3.swf\" FlashVars=\"bcastr_xml_url=app/view/main/news/xml/bcastr.xml\" " +
			"quality=\"high\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\"  " +
			"type=\"application/x-shockwave-flash\" width=\"100%\" height=\"100%\">" +
			"</embed>" +
			"</object>"
});

