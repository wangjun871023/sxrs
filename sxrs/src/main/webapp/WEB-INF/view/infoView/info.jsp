<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>信息显示</title>
<script type="text/javascript" src="/sxrs/ext/build/bootstrap.js"></script>
<script type="text/javascript"
	src="/sxrs/ext/packages/ext-locale/build/ext-locale-zh_CN.js"></script>
<link rel="stylesheet" type="text/css" href="common/common.css"/>
<link rel="stylesheet" type="text/css"
	href="/sxrs/ext/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all.css">
<link rel="stylesheet" type="text/css"
	href="/sxrs/ext/packages/ext-theme-crisp/build/resources/ext-theme-crisp-all-debug.css">

<script type="text/javascript"
	src="/sxrs/ext/packages/ext-theme-crisp/build/ext-theme-crisp.js"></script>
<script type="text/javascript"
	src="/sxrs/ext/packages/ext-theme-crisp/build/ext-theme-crisp-debug.js"></script>


<script type="text/javascript">
	Ext.Loader.setConfig({
		enabled : true,
		paths : {//'类名前缀':'所在路径'  
			'Ext.ux' : '/sxrs/ext/src/ux'
		}
	});
	Ext.require([ 
		'app.view.main.region.Top',
		'app.view.main.newsInfo.NewsInfo',
		'app.view.main.region.Bottom'
	]);

	Ext.onReady(function() {
		Ext.create('Ext.container.Viewport', {
			overflowY : "scroll",
			layout : 'hbox',
			items : [ {
				//左边
				xtype : "panel",
				flex : 1
			}, {
				//中间
				xtype : "panel",
				width : 1024,
				items : [ Ext.create("app.view.main.region.Top", {
					height : 155
				}), {
					xtpe : "panel",
					bodyPadding : 1,
					items : [ Ext.create("app.view.main.newsInfo.NewsInfo") ]
				},
				//下面的pic
				Ext.create("app.view.main.region.Bottom", {
					height : 50
				}) ]
			}, {
				//右边
				xtype : "panel",
				flex : 1
			} ]
		});
	});
</script>
</head>
<body>
</body>
</html>
