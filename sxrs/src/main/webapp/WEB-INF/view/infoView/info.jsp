<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@ page isELIgnored="false" %> 
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
	var html = '${info.infoContent}';
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
		    layout: 'border',
		    items: [{
		        region: 'north',
		        html: '<h1 class="x-panel-header">Page Title</h1>',
		        border: false,
		        margin: '0 0 5 0'
		    }, {
		        region: 'west',
		        collapsible: true,
		        title: 'Navigation',
		        width: 150
		        // could use a TreePanel or AccordionLayout for navigational items
		    }, {
		        region: 'south',
		        title: 'South Panel',
		        collapsible: true,
		        html: 'Information goes here',
		        split: true,
		        height: 100,
		        minHeight: 100
		    }, {
		        region: 'east',
		        title: 'East Panel',
		        collapsible: true,
		        split: true,
		        width: 150
		    }, {
		        region: 'center',
		        xtype: 'tabpanel', // TabPanel itself has no title
		        activeTab: 0,      // First tab active by default
		        items: {
		            title: 'Default Tab',
		            html: 'The first tab\'s content. Others may be added dynamically'
		        }
		    }]
		});
		
		
	});
</script>
</head>
<body>
</body>
</html>
