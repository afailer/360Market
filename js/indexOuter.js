define(function(){
	return {
		getMsStr : function(data){
			var str=""
			for(var v=0;v<data.ms.length;v++){
				var item=data.ms[v];
				str+=`<li>
							<a href="#">
								<img src="${item.src}"/>
								<h5 class="proname">${item.name}</h5>
								<p>${item.price}<em>${item.oldPrice}</em></p>
							</a>
					</li>`
					}
			return str;
		},
		getMxgoodsStr : function(data){
			var str=""
			for(var v=0;v<data.mx_goods.length;v++){
				var item=data.mx_goods[v];
				if(v>0 && v%4==0){
					console.log(v);
					str+=`<li class="last_goods goods">
						<a href="#">
								<img src="${item.src}"/>
								<h5 class="proname">${item.name}</h5>
								<p>${item.price}</p>
						</a>
					</li>`
				}else{
					str+=`<li class="goods">
						<a href="#">
								<img src="${item.src}"/>
								<h5 class="proname">${item.name}</h5>
								<p>${item.price}</p>
						</a>
					</li>`
				}
			}
			return str;
		},
		getFloorsStr : function(data){
//			<div class="floor">
//			<p class="floor_title">手机/配件</p>
//			<div class="floor_con">
//				<div class="floor_left">
//					<img src="img/flt1.jpg" class="left_top_img"/>
//					<img src="img/flb1.jpg" class="left_bottom_img"/>
//				</div>
//					<ul class="floor_right">
//						<li class="goods">
//							<a>
//								<img src="img/mxd1.jpg"/>
//								<h5>
//									360安全路由器P1 家用300M无线穿墙 光纤wifi信号放大 智能
//								</h5>
//								<p>￥99</p>
//							</a>
//						</li>	
//					</ul>
//			</div>
//		</div>
			var getGoodsStr=function(gs){
				var str=""
				for(var v=0;v<gs.length;v++){
					var item=gs[v];
					if((v+1)%4==0){
						console.log(v);
						str+=`<li class="last_goods goods">
							<a href="#">
									<img src="${item.src}"/>
									<h5 class="proname">${item.name}</h5>
									<p>${item.price}</p>
							</a>
						</li>`
					}else{
						str+=`<li class="goods">
							<a href="#">
									<img src="${item.src}"/>
									<h5 class="proname">${item.name}</h5>
									<p>${item.price}</p>
							</a>
						</li>`
					}
				}
				console.log(str);
				return str;
			}
			var getFloorStr=function(floor){
							return `<div class="floor louti">
										<p class="floor_title">${floor.title}</p>
										<div class="floor_con">
											<div class="floor_left">
												<img src="${floor.leftTopImg}" class="left_top_img"/>
												<img src="${floor.leftBottomImg}" class="left_bottom_img"/>
											</div>
												<ul class="floor_right">
													`+getGoodsStr(floor.goods)+`
												</ul>
										</div>
									</div>`;
						
			}
			var str="";
			for(var v=0;v<data.floors.length;v++){
				str+=getFloorStr(data.floors[v]);
			}
			console.log(str);
			return str;
		}
	}
})

