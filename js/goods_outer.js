define(function(){
	return {
		getGoodsListStr : function(data){
			var str="";
			for (var v=0;v<data.goods.length;v++) {
				var item = data.goods[v];
				str += `<li>
					<div class="goods_item">
						<a href="#">
							<img src="${item.src}"/>
						</a>
						
						<p class="goods_name">${item.name}</p>
						<p class="goods_price">${item.price}</p>
						<p class="add_to_cart"><span class="iconfont icon-gouwuche"></span>加入购物车</p>
					</div>
				</li>`
			}
			
			return str;
		}
	}
})