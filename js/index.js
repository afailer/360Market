requirejs.config({
	paths : {
		jquery : "jquery-1.8.3",
		outer : "indexOuter"
	}
})
requirejs(["jquery","outer"],function($,outer){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/360Market/data/miaosha.json",
		async:true,
		success:function(responseText){
			console.log("@@@@@@@@"+responseText);
			var s = outer.getMsStr(responseText);
			$("#msList").html(s);
			var mxGoods=outer.getMxgoodsStr(responseText);
			$("#star_goos_con").html(mxGoods);
			var floors=outer.getFloorsStr(responseText);
			console.log("********"+floors);
			$("#floors").html(floors);
		},
		error:function(XMLHttpRequest,textStatus,ErrorThrow){
			console.log("------------"+textStatus+" "+ErrorThrow);
		}
	});
})