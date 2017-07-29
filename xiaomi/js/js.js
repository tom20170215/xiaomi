$(function() {
	//购物车切换图片
	var isHover = false;
	var timer1 = null;
	$(".buy_car_img").hover(function() {
		isHover = true;
		$(".buy_car_img").attr("src", "images/shopcarhover.png");
		$(".buy_car_spec").animate({
			heigh: 100
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
		console.log(index);
		$(".category_hot_list > li:eq(" + index + ")").css("display", "block");
	});


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
});