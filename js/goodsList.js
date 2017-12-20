requirejs.config({
	paths : {
		jquery : "jquery-1.8.3",
		outer : "goods_outer"
	}
})
requirejs(["jquery","outer"],function($,outer){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/360Market/data/goods_list.json",
		async:true,
		success:function(data){
			var goodsStr = outer.getGoodsListStr(data);
			$(".goods_list").html(goodsStr);
		}
		
	});
	alert("")
	$("#head").load("http://127.0.0.1/360Market/common.html #top")
})