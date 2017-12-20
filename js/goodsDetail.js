var mask;
var photo;
var img;
window.onload=function(){
	//initEle();
	var setting={
			obj:$(".mask").eq(0),
			parent:$(".photo").eq(0),
			cssName:"show",
			//d:"v"// "h" stands for Horizontal."v" stands for  Vertical
			callBack:function(thisSetting){},
			mouseLeave:function(se){
				this.obj.css("display","none");
			}
			,
			bigImg:"img/big_img.jpg",
			bigConClass:"bigCon"
		}
	
	new Drag().init(setting);
	var xd={
			objList : [
				{
					obj:$(".goods_title").eq(0),
					dis:$(".goods_title").eq(0).parent().height()
				},
				{
					obj:$(".goods_title").eq(1),
					dis:$(".goods_title").eq(1).parent().height()
				}
			]
		}
	new Scroll().init(xd);
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/360Market/data/goodsDetail.json",
		async:true,
		success:function(data){
			var str=process(data);
			$(".goods_comment_ul").eq(0).html(str);
		}
	});
	$("#head").load("http://127.0.0.1/360Market/common.html #top")
}
function process(data){
	var str="";
			for (var v=0;v<data.goods.length;v++) {
				var item = data.goods[v];
				str += `<li>
							<div class="comment_item">
								<p class="star">${item.star}<span class="comment_user">3***5</span></p>
								<p class="comment_con">${item.comment}</p>
								<p class="comment_time">${item.time} ${item.info}</p>
							</div>
						</li>`
			}
			
			return str;
}
