requirejs.config({
	paths : {
		jquery : "jquery-1.8.3",
		outer : "indexOuter",
		anim : "Animation"
	}
})
requirejs(["jquery","outer","anim"],function($,outer,anim){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/360Market/data/miaosha.json",
		async:true,
		success:function(responseText){
			var s = outer.getMsStr(responseText);
			$("#msList").html(s);
			var mxGoods=outer.getMxgoodsStr(responseText);
			$("#star_goos_con").html(mxGoods);
			var floors=outer.getFloorsStr(responseText);
			$("#floors").html(floors);
			showFloor();
		},
		error:function(XMLHttpRequest,textStatus,ErrorThrow){
			console.log("------------"+textStatus+" "+ErrorThrow);
		}
	});
	$(".cycle_pointer span").mouseenter(function(){
		var index=$(this).index();
		$(this).animate({width:16,height:16},350).siblings().animate({width:12,height:12},350);
		$("#cycle_imgs li").eq(index).stop().animate({"opacity":"1"},1000).siblings().animate({"opacity":"0"},1000)
	})
	$("#left_floor li").mouseenter(function(){
		$(this).addClass("floor_enter").siblings().removeClass("floor_enter");
	}).mouseleave(function(){
		$(this).removeClass("floor_enter");
	})
	$("#left_floor li").click(function(){
		var index=$(this).index();
		if(index==$(this).parent().children().length-1){
			$("body,html").animate({"scrollTop":0},500);
		}else{
			var top = $(".louti").eq(index).offset().top;
			$("body,html").animate({"scrollTop":top},500);
		}
		
	})
	window.notshowLouti=true;
	window.onscroll=function(){
		showFloor();
	}
	function showFloor(){
		var top = $(".louti").eq(0).offset().top;
		if(window.notshowLouti){
			window.notshowLouti=false;
			var opacity=1-((top-$(window).scrollTop())/(1.5*$("#left_floor").height()));
			if(opacity<0){
				opacity=0;
			}
			$("#left_floor").css("opacity",opacity);
		}
		if($(window).scrollTop() > top){//显示楼层
			var $floor=$(".louti").filter(function(){
				console.log($(window).scrollTop()+"-------- "+$(this).index()+" ----------"+$(this).offset().top);
				return($(window).scrollTop()>$(this).offset().top);
			})
			$("#left_floor li").eq($floor.index()).addClass("floor_active").siblings().removeClass("floor_active");
		}else{//隐藏楼梯
			var opacity=1-((top-$(window).scrollTop())/(1.5*$("#left_floor").height()));
			if(opacity<0){
				opacity=0;
			}
			$("#left_floor").css("opacity",opacity);
		}
	}
//	window.onscroll=function(){
//		var top = $(".louti").eq(0).offset().top;
//		console.log($(window).scrollTop()+" "+top);
//		if($(window).scrollTop() > top){//显示楼梯
//			if(window.notshowLouti){
//				$("#left_floor").animate({"opacity":"1"},500);
//				window.notshowLouti=false;
//			}
//			//$("#left_floor").css("display","block")
//		}else{//隐藏楼梯
//			if(window.notshowLouti){//没有隐藏
//				
//			}else{
//				$("#left_floor").animate({"opacity":"0"},500);
//				window.notshowLouti=true;
//			}
//			//$("#left_floor").css("display","none")
//		}
//	}
})