Bcastr 3.0 beta flash  通用的图片浏览器  


bcastr3.0 beta 是一款通用的图片浏览器
可以用于各种新闻系统或者blog系统


.可以读取xml设置播放列表,自定义xml地址
.可以将图片地址直接写网页中直接,不需要xml
.自动适应图片大小
.循环播放，自定义自动播放时间
.不限制图片数量
.自定义尺寸,自动适应任何比例，图片不变形
.自定义图片题目（可选）
.浏览过程中下载
.自定义图片连接（可选）
.自定界面色彩放案

3.0新增特点

.图片自动抗锯齿，效果更佳
.3种文字位置设定
.4种图片过渡效果，过渡更自然，
.可定义是否显示按钮，更适合做广告条
.可定义是否在心窗后中打开连接

.自定义尺寸,自动适应任何比例，图片不变形
.自定义图片题目（可选）
.浏览过程中下载
.自定义图片连接（可选）
.自定界面色彩放案


三种使用方法
方法一，直接copy下面代码，修改其中的 swf_width，swf_height，files，links，texts 参数


<script type="text/javascript">

var swf_width=220
var swf_height=220
var files='http://www.ruochi.com/product/bcastr/pic/gymnasium.jpg|http://www.ruochi.com/product/bcastr/pic/zd.jpg|http://www.ruochi.com/product/bcastr/pic/adidas.jpg|http://www.ruochi.com/product/bcastr/pic/Maradona.jpg|http://www.ruochi.com/product/bcastr/pic/poster.jpg'
var links='http://www.ruochi.com|http://www.ruochi.com|http://www.ruochi.com|http://www.ruochi.com|http://www.ruochi.com'
var texts='安联球场|齐达内|马拉多纳解说世界杯|Adidas的世界杯用球|世界杯海报'

document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ swf_width +'" height="'+ swf_height +'">');
document.write('<param name="movie" value="http://www.ruochi.com/product/bcastr3/bcastr3.swf"><param name="quality" value="high">');
document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
document.write('<param name="FlashVars" value="bcastr_file='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'">');
document.write('<embed src="http://www.ruochi.com/product/bcastr3/bcastr3.swf" wmode="opaque" FlashVars="bcastr_file='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'& menu="false" quality="high" width="'+ swf_width +'" height="'+ swf_height +'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'); document.write('</object>'); 


</script>





方法二，直接嵌入地址

<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="400" height="200">
	<param name="movie" value="http://www.ruochi.com/product/bcastr3/bcastr3.swf">
	<param name="quality" value="high">
	<param name="wmode" value="transparent">
	<param name="FlashVars" value="bcastr_file=http://www.ruochi.com/product/bcastr3/pic/a1.jpg|http://www.ruochi.com/product/bcastr3/pic/a2.jpg|http://www.ruochi.com/product/bcastr3/pic/a3.jpg|http://www.ruochi.com/product/bcastr3/pic/a4.jpg&bcastr_link=http://www.google.com|http://www.baidu.com|http://www.google.com|http://www.baidu.com&bcastr_title=Title 1|Title 2|Title 3|Title 4">	
	<embed src="http://www.ruochi.com/product/bcastr3/bcastr3.swf" FlashVars="bcastr_file=aaa.jpg|bbb.jpg|ccc.swf&bcastr_link=http://www.baidu.com|http://www.nba.com|http://www.ruochi.com&bcastr_title=百度|NBA|Ruochi.com" width="400" height="200" loop="false" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" salign="T" name="scriptmain" menu="false" wmode="transparent"></embed>
</object>


其中
bcastr_file=aaa.jpg|bbb.jpg|ccc.swf 是图片地址，用"|"符号分开
bcastr_link=http://www.baidu.com|http://www.nba.com|http://www.ruochi.com 是图片对应连接地址，用"|"符号分开
bcastr_title=百度|NBA|Ruochi.com 是图片对应标题，用"|"符号分开

注意其中的&连接符

方法三，使用xml地址
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="100" height="200">
	<param name="movie" value="http://www.ruochi.com/product/bcastr3/bcastr3.swf">
	<param name="quality" value="high">
	<param name="wmode" value="transparent">
	<param name="FlashVars" value="bcastr_xml_url=http://www.ruochi.com/product/bcastr3/bcastr.xml">
	<embed src="http://www.ruochi.com/product/bcastr3/bcastr3.swf" FlashVars="bcastr_xml_url=http://www.ruochi.com/product/bcastr3/bcastr.xml" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100" height="200"></embed>
</object>



修改上方2个bcastr_xml_url=http://www.ruochi.com/product/bcastr3/bcastr.xml地址即可

xml内容

item_url="pic/Maradona.jpg" 图片地址
link="http://www.google.com" 图片点击后 不填写就不可点击连接
itemtitle="马拉多纳受邀解说世界杯" 图片题目


高级设置
默认参数字符串 0xffffff:文字颜色|2:文字位置|0xff6600:文字背景颜色|60:文字背景透明度|0xffffff:按键文字颜色|0xff6600:按键默认颜色|0x000033:按键当前颜色|8:自动播放时间(秒)|2:图片过渡效果|1:是否显示按钮|_blank:打开窗口

颜色都以0x开始16进制数字表示

文字颜色：题目文字的颜色
文字位置：0表示题目文字在顶端，1表示文字在底部，2表示文字在顶端
文字背景透明度：0-100值，0表示全部透明
按键文字颜色：按键数字颜色
按键默认颜色：按键默认的颜色
按键当前颜色：当前图片按键颜色
自动播放时间：单位是秒
图片过渡效果：0，表示亮度过渡，1表示透明度过渡，2表示模糊过渡，3表示运动模糊过渡
是否显示按钮：0，表示隐藏按键部分，更适合做广告挑轮换



影片自动播放参数：0表示不自动播放，1表示自动播放
影片连续播放参数：0表示不连续播放，1表示连续循环播
默认音量参数 ：0-100 的数值，设置影片开始默认音量大小
控制栏位置参数 ：0表示在影片上浮动显示，1表示在影片下方显示
控制栏显示参数 ：0表示不显示；1表示一直显示；2表示鼠标悬停时显示；3表示开始不显示，鼠标悬停后显示
打开窗口：_blank表示新窗口打开。_self表示在当前窗口打开

<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="400" height="200">
	<param name="movie" value="http://www.ruochi.com/product/bcastr3/bcastr3.swf">
	<param name="quality" value="high">
	<param name="wmode" value="transparent">
	<param name="FlashVars" value="bcastr_file=http://www.ruochi.com/product/bcastr3/pic/a1.jpg|http://www.ruochi.com/product/bcastr3/pic/a2.jpg|http://www.ruochi.com/product/bcastr3/pic/a3.jpg|http://www.ruochi.com/product/bcastr3/pic/a4.jpg&bcastr_link=http://www.google.com|http://www.baidu.com|http://www.google.com|http://www.baidu.com&bcastr_title=Title 1|Title 2|Title 3|Title 4&bcastr_config=0xffffff:文字颜色|1:文字位置|0x0066ff:文字背景颜色|60:文字背景透明度|0xffffff:按键文字颜色|0x0066ff:按键默认颜色|0x000033:按键当前颜色|8:自动播放时间(秒)|2:图片过渡效果|1:是否显示按钮|_blank:打开窗口">	
	<embed src="http://www.ruochi.com/product/bcastr3/bcastr3.swf" FlashVars="bcastr_file=http://www.ruochi.com/product/bcastr3/pic/a1.jpg|http://www.ruochi.com/product/bcastr3/pic/a2.jpg|http://www.ruochi.com/product/bcastr3/pic/a3.jpg|http://www.ruochi.com/product/bcastr3/pic/a4.jpg&bcastr_link=http://www.google.com|http://www.baidu.com|http://www.google.com|http://www.baidu.com&bcastr_title=Title 1|Title 2|Title 3|Title 4&bcastr_config=0xffffff:文字颜色|1:文字位置|0x0066ff:文字背景颜色|60:文字背景透明度|0xffffff:按键文字颜色|0x0066ff:按键默认颜色|0x000033:按键当前颜色|8:自动播放时间(秒)|2:图片过渡效果|1:是否显示按钮|_blank:打开窗口" width="400" height="200" loop="false" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" salign="T" name="scriptmain" menu="false" wmode="transparent"></embed>
</object>




下载地址
http://www.ruochi.com/product/bcastr3/bcastr3.zip







Microsoft? 新近发布了一项 Internet Explorer 更新，
更改了 Internet Explorer 对于使用交互式控件的 Web 页面的处理方式。
交互式控件是提供用户界面的 ActiveX 控件。
当 Web 页使用 APPLET、EMBED 或 OBJECT 元素加载 ActiveX 控件时，
用户必须先激活它才能显示控件的用户界面。如果页面使用这些元素加载多个控件，
则必须逐一激活每个交互式控件。
为此，某些 Web 页（包括默认 Flash Player Web 页）可能需要用户通过单击控件或使用 Tab 和 Enter 键手动激活 ActiveX 控件。


有关此更改的详细信息，请参见 Microsoft Web 站点，
网址是：http://msdn.microsoft.com/library/default.asp?url=/workshop/author/dhtml/overview/activating_activex.asp。


为避免出现用户必须首先激活 Flash Player，才能与 Flash 内容交互的情况，

