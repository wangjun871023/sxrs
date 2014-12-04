/**
 * 中间的新闻
 */
Ext.define("app.view.main.news.News", {
	extend : "Ext.panel.Panel",
	alias : "widget.mainNews",
	requires : [ 'app.view.common.ButtonTransparent' ],
	bodyStyle : {
		"background-image" : "url(app/view/main/news/images/1.jpg)",
		"background-repeat" : "no-repeat"
	},
	layout : "border",
	items : [ {
		xtype : "container",
		region : "center",
		layout : "hbox",
		defaults : {
			margin : "75 0 0 0"
		},
		items : [ {
			xtype : "buttontransparent",
			action : "left",
            frame:false,
            scale:"large",
			text : "<<"
		}, {
			xtype : "container",
			flex : 1
		}, {
			xtype : "buttontransparent",
			action : "right",
            frame:false,
            scale:"large",
			text : ">>"
		} ]
	}, {
		xtype : "container",
        frame:false,
		region : "south",
		height : 30,
	    style: "background:rgba(98,98,98,0.6); padding:5px;",
		layout : "hbox",
		items : [ {
			xtype : "buttontransparent",
			action:"content",
            frame:false,
			flex : 1,
			text : "testtesttesttesttesttesttesttest",
			handler:function(){
				 this.up("app-main").down("mainView").setHidden(true);
	    		 this.up("app-main").down("mainNewsInfo").setHidden(false);
    			 this.up("app-main").down("mainDept").setHidden(true);
			}
		}, {
			xtype : "container",
			defaults : {
				margin : "0 0 0 2"
			},
			items : [ {
				xtype : "buttontransparent",
                frame:false,
				action : "nums",
				text : "1"
			}, {
				xtype : "buttontransparent",
                frame:false,
				action : "nums",
				text : "2"
			}, {
				xtype : "buttontransparent",
                frame:false,
				action : "nums",
				text : "3"
			}, {
				xtype : "buttontransparent",
                frame:false,
				action : "nums",
				text : "4"
			} ]
		} ]
	} ],
	runner : null,
	task:null,
	num:0,
	btns:null,
	initComponent : function() {
		this.callParent(arguments);
		var btns = Ext.ComponentQuery.query('buttontransparent[action=nums]');
		btns[0].on("click", this.onClickNum);
		btns[1].on("click", this.onClickNum);
		btns[2].on("click", this.onClickNum);
		btns[3].on("click", this.onClickNum);
		btns[0].on("mouseover", this.onMouseover);
		btns[1].on("mouseover", this.onMouseover);
		btns[2].on("mouseover", this.onMouseover);
		btns[3].on("mouseover", this.onMouseover);
		btns[0].on("mouseout", this.onMouseout);
		btns[1].on("mouseout", this.onMouseout);
		btns[2].on("mouseout", this.onMouseout);
		btns[3].on("mouseout", this.onMouseout);
		this.btns = btns;
		var leftBtn = this.down("buttontransparent[action=left]");
		leftBtn.on("click", this.onClickNum);
		leftBtn.on("mouseover", this.onMouseover);
		leftBtn.on("mouseout", this.onMouseout);
		
		var rightBtn = this.down("buttontransparent[action=right]");
		rightBtn.on("click", this.onClickNum);
		rightBtn.on("mouseover", this.onMouseover);
		rightBtn.on("mouseout", this.onMouseout);
		
		var contentBtn = this.down("buttontransparent[action=content]");
		contentBtn.on("click", this.onClickNum);
		contentBtn.on("mouseover", this.onMouseover);
		contentBtn.on("mouseout", this.onMouseout);
		

		var num = 0;
		var updateClock = function() {
			for (var i = 0; i < 4; i++) {
				if (i == num % 4) {
					btns[num % 4].fireEvent("click", btns[num % 4]);
				} else {
					var b =document.getElementById(btns[i].id);
					b.style.backgroundImage = 'inherit';
					b.style.backgroundColor = 'inherit';
					b.style.borderColor = 'transparent';
				}
			}
			num = num + 1;
			this.num = num % 5;
			num = this.num;
		};
		
		var runner = new Ext.util.TaskRunner();
		var task = runner.start({
			run : updateClock,
			num :0,
			interval : 12000
		});
		this.runner = runner;
		this.task = task;
	},
	onClickNum : function(btn) {
		var b = document.getElementById(btn.id);
		b.style.backgroundImage = '';
		b.style.backgroundColor = '';
		b.style.borderColor = '';

		if(btn.action=='left'){
			var number =1;
			// 0 1 2 3
			if(this.up("mainNews").task.num>0){
				this.up("mainNews").task.num--;
				number = this.up("mainNews").task.num;
			}else{
				number=1;
			}
			var btns = this.up("mainNews").btns;
			for (var i = 0; i < 4; i++) {
				if (i ==number-1) {
					btns[i].fireEvent("click", btns[i]);
				} else {
					var b =document.getElementById(btns[i].id);
					b.style.backgroundImage = 'inherit';
					b.style.backgroundColor = 'inherit';
					b.style.borderColor = 'transparent';
				}
			}
		}else if(btn.action=='right'){
			var number =1;
			// 0 1 2 3
			
			if(this.up("mainNews").task.num<4){
				this.up("mainNews").task.num++;
				number = this.up("mainNews").task.num;
			}else{
				number=4;
			}
			var btns = this.up("mainNews").btns;
			for (var i = 0; i < 4; i++) {
				if (i ==number-1) {
					btns[i].fireEvent("click", btns[i]);
				} else {
					var b =document.getElementById(btns[i].id);
					b.style.backgroundImage = 'inherit';
					b.style.backgroundColor = 'inherit';
					b.style.borderColor = 'transparent';
				}
			}
		}else if(btn.action=='content'){
			 
			
		}else{
			var url = "url(app/view/main/news/images/" + btn.text + ".jpg)";
			var style = {
				"background-image" : url,
				"background-repeat" : "no-repeat",
				"background-size" : "100% 100%"
			};
			this.up("mainNews").setBodyStyle(style);
		}
	},
	onMouseover : function(btn) {
		var b = document.getElementById(btn.id);
		b.style.backgroundImage = '';
		b.style.backgroundColor = '';
		b.style.borderColor = '';
		
		if(btn.action=='left'||btn.action=='right'||btn.action=='content'){
		}else{
			
			var btns = this.up("mainNews").btns;
			for (var i = 0; i < 4; i++) {
				if (i ==btn.text-1) {
					btns[i].fireEvent("click", btns[i]);
				} else {
					var b =document.getElementById(btns[i].id);
					b.style.backgroundImage = 'inherit';
					b.style.backgroundColor = 'inherit';
					b.style.borderColor = 'transparent';
				}
			}
			
			
			var url = "url(app/view/main/news/images/" + btn.text + ".jpg)";
			var style = {
				"background-image" : url,
				"background-repeat" : "no-repeat",
				"background-size" : "100% 100%"
			};
			this.up("mainNews").setBodyStyle(style);
		}
		
		
		var runner = this.up("mainNews").runner;
		var task = this.up("mainNews").task;
		runner.stop(task);
	},
	onMouseout:function(btn){
		var b =document.getElementById(btn.id);
		b.style.backgroundImage = 'inherit';
		b.style.backgroundColor = 'inherit';
		b.style.borderColor = 'transparent';
		
		var runner = this.up("mainNews").runner;
		var task = this.up("mainNews").task;
	}
});
