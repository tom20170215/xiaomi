$(function() {
	//购物车切换图片
	var isHover = false;
	var timer1 = null;
	$(".buy_car_img").hover(function() {
		isHover = true;
		$(".buy_car_img").attr("src", "images/shopcarhover.png");
		$(".buy_car_spec").animate({
			height: 100
		}, 200, function() {
			$(".buy_car p").html("购物车中还没有商品，赶紧选购吧！");
		});
	}, function() {
		isHover = false;
		$(this).stop(timer1);
		timer1 = setTimeout(function() {
			if (!isHover) {
				$(".buy_car_spec").animate({
					height: 0
				}, 200, function() {
					$(".buy_car p").html("");
				});
				$(".buy_car_img").attr("src", "images/shopcar.png");
			}
		}, 200);
	});
	$(".buy_car_spec").hover(function() {
		isHover = true;
		$(".buy_car_img").attr("src", "images/shopcarhover.png");
		$(".buy_car_spec").animate({
			height: 100
		}, 200, function() {
			$(".buy_car p").html("购物车中还没有商品，赶紧选购吧！");
		});
	}, function() {
		isHover = false;
		$(this).stop(timer1);
		timer1 = setTimeout(function() {
			if (!isHover) {
				$(".buy_car_spec").animate({
					height: 0
				}, 200, function() {
					$(".buy_car p").html("");
				});
				$(".buy_car_img").attr("src", "images/shopcar.png");
			}
		}, 200);
	});


	//搜索点击框，移入、移出动画
	$(document).click(function() {
		$(".search_extra").hide();
		$(".search_txt").css("border", "1px solid #e0e0e0");
		$(".search_btn").css("border", "1px solid #e0e0e0");
		$(".search_btn").css("border-left", "none");
		$(".hot_word1,.hot_word2").show();
		$(".hot_word1,.hot_word2").animate({
			opacity: 100
		}, 300);
	});
	$(".search_box").click(function() {
		$(".search_extra").show();
		$(".search_txt").css("border", "1px solid #ff6700");
		$(".search_txt").css("border_bottom", "none");
		$(".search_btn").css("border", "1px solid #ff6700");
		$(".search_btn").css("border-left", "#ff6700");
		$(".hot_word1,.hot_word2").animate({
			opacity: 0
		}, 300);
		//防止冒泡到document
		return false;
	});



	//首页大图切换
	$(".category_move span").click(function() {
		$(".category_move span").removeClass("cur_move");
		$(this).addClass("cur_move");
		var index = $(this).parent().index();
		$(".category_hot_list > li").css("display", "none");
		$(".category_hot_list > li:eq(" + index + ")").css("display", "block");
	});

 	cateIndex = 0;
	function categoryMove(){
		if (cateIndex > 4) {
			cateIndex = 0;
		}
		$(".category_move span").removeClass("cur_move");
		$(".category_move span:eq("+ cateIndex +")").addClass("cur_move");
		$(".category_hot_list > li").css("display", "none");
		$(".category_hot_list > li:eq(" + cateIndex + ")").css("display", "block");
		cateIndex++;
		var test = setTimeout(function(){
		categoryMove();
	},3000);
	}
	categoryMove();
	
	
	//category栏的category_item_box显示隐藏
	$(".category_item").hover(function() {
		var index = $(this).index();
		$(".category_item_box:eq(" + index + ")").css("display", "block");
		var category_item_list = $(this).find(".category_item_box").children(".category_item_list");
		var width = $(this).index() === 0 ? 270 : 220;
		var len = category_item_list.length;
		category_item_list.width(width);
		width = len == 1 ? len * width : len * width + 70;
		$(".category_item_box").width(width);
	}, function() {
		var index = $(this).index();
		$(".category_item_box:eq(" + index + ")").css("display", "none");
	});
	//小米明星单品切换
	var dir = 0; //0代表第一页，1代表第二页
	$(".left_img").click(function() {
		if (dir) {
			$(".left_img >img").attr("src", "images/icon/left2.png");
			$(".right_img > img").attr("src", "images/icon/right1.png");
			$(".star_spec .spec_item_list").animate({
				left: "0"
			}, 200);
			dir = 0;
		}
	});
	$(".right_img").click(function() {
		if (dir === 0) {
			$(".left_img >img").attr("src", "images/icon/left1.png");
			$(".right_img > img").attr("src", "images/icon/right2.png");
			$(".star_spec .spec_item_list").animate({
				left: "-1234"
			}, 200);
			dir = 1;
		}
	});

	//导航单品切换
	$(".spec_type_nav > li > a").hover(function() {
		var index = $(this).index();
		$(".match .cur").removeClass("cur");
		$(this).addClass("cur");
	});

	$(".accessories .spec_type_nav >li > a").hover(function() {
		var index = $(this).index();
		$(".accessories .cur").removeClass("cur");
		$(this).addClass("cur");
	});
	$(".around .spec_type_nav > li > a").hover(function() {
		var index = $(this).index();
		$(".around .cur").removeClass("cur");
		$(this).addClass("cur");
	});

	//为你推荐单品切换
	function changeDir(dir) {
		if (dir === 0) {
			$(".img1 > img").attr("src", "images/icon/left_b_2.png");
			$(".img2 > img").attr("src", "images/icon/right_b_1.png");
		} else if (dir === 1) {
			$(".img1 > img").attr("src", "images/icon/left_b_1.png");
			$(".img2 > img").attr("src", "images/icon/right_b_1.png");
		} else {
			$(".img1 > img").attr("src", "images/icon/left_b_1.png");
			$(".img2 > img").attr("src", "images/icon/right_b_2.png");
		}
	}
	$(".img1").click(function() {
		if (dir > 0) {
			dir--;
			changeDir(dir);
			$(".recommend .recommend_spec_list").animate({
				left: "+=1234px"
			}, 200);
		}
	});
	$(".img2").click(function() {
		if (dir < 2) {
			dir++;
			changeDir(dir);
			$(".recommend .recommend_spec_list").animate({
				left: "-=1234px"
			}, 200);
		}
	});


	//内容单品切换
	$(".content_spec > li").hover(function() {
		var This = $(this);
		$(this).find(".content_left,.content_right").css("display", "block");

		$(this).find(".content_left").hover(function() {
			$(this).attr("src", "images/icon/content_left_hover.png");
			var left = This.find(".content_spec_list").position().left;
			//判断改变鼠标样式
			if (left / -296 > 0) {
				$(this).css("cursor", "pointer");
			} else {
				$(this).css("cursor", "default");
			}
			//点击左移动
			$(this).unbind("click").click(function() {
				left = This.find(".content_spec_list").position().left;
				if (!This.find(".content_spec_list").is(":animated") && left < 0) {
					This.find(".content_spec_list").animate({
						left: "+=296px"
					});
					//圆圈也要跟着切换
					This.find(".content_page > li > span").removeClass("active");
					This.find(".content_page > li:eq(" + (left / -296 - 1) + ") > span").addClass("active");
				}
				console.log(left / -296);
				//当左移动到第一个时，鼠标变成默认

				left = This.find(".content_spec_list").position().left;
				if (left / -296 > 1) {
					$(this).css("cursor", "pointer");
				} else {
					$(this).css("cursor", "default");
				}
				return false;
			});

		}, function() {
			$(this).attr("src", "images/icon/content_left.png");
		});
		//点击右移动
		$(this).find(".content_right").hover(function() {
			$(this).attr("src", "images/icon/content_right_hover.png");
			var left = This.find(".content_spec_list").position().left;
			if (left / -296 < 3) {
				$(this).css("cursor", "pointer");
			} else {
				$(this).css("cursor", "default");
			}
			$(this).unbind("click").click(function() {
				left = This.find(".content_spec_list").position().left;
				if (!This.find(".content_spec_list").is(":animated") && left > -888) {
					This.find(".content_spec_list").animate({
						left: "-=296px"
					});
					//圆圈也要跟着切换
					This.find(".content_page > li > span").removeClass("active");
					This.find(".content_page > li:eq(" + (left / -296 + 1) + ") > span").addClass("active");
				}
				console.log(left / -296);
				//当右移到第四个时，鼠标变成默认
				left = This.find(".content_spec_list").position().left;
				if (left / -296 < 2) {
					$(this).css("cursor", "pointer");
				} else {
					$(this).css("cursor", "default");
				}
				return false;
			});
		}, function() {
			$(this).attr("src", "images/icon/content_right.png");
		});
	}, function() {
		$(this).find(".content_left,.content_right").css("display", "none");
	});
	//内容content栏下方圆圈切换
	$(".content_page > li >span").hover(function() {
		$(this).css("cursor", "pointer");
		$(this).click(function() {
			var root = $(this).parent().parent().parent();
			var This = $(this);
			var index = $(this).parent().index();
			var left = -index * 296;
			if (!root.find(".content_spec_list").is(":animated")) {
				root.find(".content_page > li >span").removeClass("active");
				This.addClass("active");
				root.find(".content_spec_list").animate({
					left: "" + left + "px"
				});
			}
		});
	});
	//导航栏显示隐藏div
	var isHoverNav = false;
	var curIndex = -1;
	var preIndex = -1;
	var timer2 = null;


	function changeStateDown(index) {
		switch (index) {
			case 0:
				$(".nav_menu_show1").slideDown(400);
				break;
			case 1:
				$(".nav_menu_show2").slideDown(400);
				break;
			case 2:
				$(".nav_menu_show3").slideDown(400);
				break;
			case 3:
				$(".nav_menu_show4").slideDown(400);
				break;
			case 4:
				$(".nav_menu_show5").slideDown(400);
				break;
			case 5:
				$(".nav_menu_show6").slideDown(400);
				break;
		}
	}

	function changeStateUp(index) {
		var elem = $(".navMenu:eq(" + index + ")");
		switch (index) {
			case 0:
				$(".nav_menu_show1").slideUp(400);
				break;
			case 1:
				$(".nav_menu_show2").slideUp(400);
				break;
			case 2:
				$(".nav_menu_show3").slideUp(400);
				break;
			case 3:
				$(".nav_menu_show4").slideUp(400);
				break;
			case 4:
				$(".nav_menu_show5").slideUp(400);
				break;
			case 5:
				$(".nav_menu_show6").slideUp(400);
				break;
		}
	}
	$(".nav .nav_list li").hover(function() {
		curIndex = $(this).index();
		$(".navMenu:eq("+ curIndex +")").css("display","block");
	},function(){
		$(".navMenu:eq("+ curIndex +")").css("display","none");
	});
	$(".navMenu").hover(function(){
		$(this).css("display","block");
	},function(){
		$(this).css("display","none");
	});
});
