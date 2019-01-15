$(function(){

// address

	$('.zggk_fbmc li').first().addClass('on').siblings('li').removeClass('on');
	$('.zggk_fbmc li').click(function(){
		$(this).addClass('on').siblings('li').removeClass('on');
		$('.zggk_fxbox').hide();
		$('.zggk_fxbox').eq($(this).index()).show();
	});
	$('.zggk_fxbox').first().show().siblings('.zggk_fxbox').hide();
	$('.zggk_fxbox').each(function(){
		$(this).find('.zggk_fxmc li').first().addClass('on').siblings('li').removeClass('on');
		$(this).find('.zggk_fxdc dl').first().show().siblings('dl').hide();
		$(this).find('.zggk_fxmc li').click(function(){
			$(this).addClass('on').siblings('li').removeClass('on');
			$(this).parents('.zggk_fxbox').find('.zggk_fxdc dl').hide();
			$(this).parents('.zggk_fxbox').find('.zggk_fxdc dl').eq($(this).index()).show();
		});
	});

//顶部悬浮框
$('.ban_zx a,.course_other').click(function(){
	$('.zgxf_top,.zg_zzc').css('display','inline-block');
})

$('.xftop_close').click(function(){
	$('.zgxf_top,.zg_zzc').css('display','none');
});

var major = $('.ban_top b').text().trim();
$('.xftop_word a').each(function(){
	if(major == $(this).html()){
		$(this).addClass('on');
	}
});

$('.zd_ul').on('click','li',function(){
	$(this).addClass('on').siblings().removeClass('on');
	$('.point_right').eq($(this).index()).show().siblings('.point_right').hide();
});


//左侧悬浮

$('.xfl_close').click(function(){
	$('.zgxf_left').css('display','none');
	$('.xfl_slide').css('display','inline-block');
});

$('.xfl_slide').click(function(){
	$('.xfl_slide').css('display','none');
	$('.zgxf_left').css('display','inline-block');
});

//右侧悬浮
$('.xfr_close').click(function(){
	$('.xfr_back').css('display','none');
	$('.xfr_slide').css('display','inline-block');
});
$('.xfr_slide').click(function(){
	$('.xfr_main').css('display','inline-block');
	$('.xfr_slide').css('display','none');
});
$('.xfr_goback').click(function(){
	$('.xfr_main').css('display','none');
	$('.xfr_back').css('display','inline-block');
});

$('.xfr_tel .xfr_midimg,.xfr_goback').click(function(){
	$('.xfr_back').css('display','none');
	$('.xfr_main').css('display','inline-block');
});
// 面授网校
$('.course_btn').click(function(){
	$(this).addClass('on').siblings('.course_btn').removeClass('on');
	$('.course_wrap').eq($(this).index()).show().siblings('.course_wrap').hide();
});
$('.xfr_gotop').click(function(){
	$('html,body').animate({'scrollTop':'0px'},500)
});



$('.xfr_ms').click(function(){
	$('html,body').animate({'scrollTop':$('.cour_tab').offset().top-10},500);
	$('.xfr_back').css('display','none');
	$('.xfr_class').css('display','inline-block');

	$('.course_wang').hide();
	$('.course_mian').show();
	$('.cour_tab a').eq(0).addClass('on').siblings().removeClass('on');
});

$('.xfr_wk').click(function(){
	$('html,body').animate({'scrollTop':$('.cour_tab').offset().top-10},500);
	$('.course_mian').hide();
	$('.course_wang').show();
	$('.cour_tab a').eq(1).addClass('on').siblings().removeClass('on');
});
$('.xfr_totel').click(function(){
	$('.xfr_back').css('display','none');
	$('.xfr_tel').css('display','inline-block');
});

	/*=========================== 课程部分	=============================*/


	
 	$('.fenbu_box').each(function(){
 		$(this).find('.fun_yijichange li').eq(0).addClass('on').siblings('li').removeClass('on');
 		$(this).find('.yjxilie_box').eq(0).show().siblings('.yjxilie_box').hide();
 		$(this).find('.yjxilie_box').each(function(){
 			$(this).find('.erjixilie_name a').removeClass('on').eq(0).addClass('on');
 			//});
 		$(this).find('.fun_yijichange li').on('click',function(){
 			if($(this).hasClass('cur'))
 				{
 					return 
 				}else{
 					
 				$(this).addClass('on').siblings('li').removeClass('on');
 				$(this).parent().nextAll('.yjxilie_box').eq($(this).index()).show().siblings('.yjxilie_box').hide();
 				var _this = $(this).parents('.fenbu_box').index()-2;
 				 $('.inside_bar ul').eq(_this).show().siblings().hide();
				$('.inside_bar ul').eq(_this).find('div').hide();
	 			$('.inside_bar ul').eq(_this).find('li').eq($(this).index()).find('div').show();
 			}
 			alert(1)
 		});
 	});

	$('.inside_bar li').each(function(){
 			$(this).find('div a').removeClass('on').eq(0).addClass('on');
 		});
	$('.inside_bar ul').each(function(){
		$(this).find('div').hide().find('li').eq(0).find('div').show();
		});
	});


	$('.fenbu_dishi li').each(function(b){
		$(this).find('.fenbu_cont').find('p').eq(0).show().siblings().hide();
		$(this).find('.fenbu_cont>a').eq(0).addClass('hover').siblings('a').removeClass('hover');
		$(this).find('.fenbu_cont').hide();
	});
	$('.fun_fenbu li').each(function(b){
		$(this).find('.fenbu_cont').css('left',-($(this).position().left))
	});

    $('.zg_day1 li').eq(0).addClass('on').siblings().removeClass('on')
	$('.fenbu_dishi li').eq(0).addClass('on active').siblings().removeClass('on active')
	$('.fenbu_dishi li').eq(0).find('.fenbu_cont a').eq(0).addClass('on').siblings('a').removeClass('on');
   /* $('.fenbu_dishi li').each(function () {
		$(this).find('.fenbu_cont div p').hide();
    });
    $('.fenbu_dishi li').eq(0).find('.fenbu_cont div p').eq(0).show();
	*/
	$('.datatable_dl dt span').click(function(){
		$(this).toggleClass('on');
		$(this).siblings('a').toggle();
		$(this).parents('.datatable_dl').find('dd').toggle();
	});

	//分部
	$('.fun_fenbu li').on('click',function(){
		$(this).addClass('on').siblings('li').removeClass('on');
		$(this).siblings().find('div').hide();
		$(this).siblings().children('a').find('span').hide();
		$(this).find('div').show();
		$(this).children('a').find('span').show();
	});
	$('.fenbu_cont').mouseleave(function(){
		$(this).hide();
		$(this).siblings().find('span').hide();
		if($(this).parents('li').hasClass('active')){
		}else{
			$(this).parents('li').removeClass('on')
		}
	});


//显示地址
$('.fenbu_cont a').on('mouseover',function(){
	$(this).addClass('hover').siblings().removeClass('hover');
	$(this).siblings('div').find('p').eq($(this).index()).show().siblings().hide();
})


//切换课程
	$('.fenbu_cont a').on('click',function(){
		$(this).addClass('on').siblings('a').removeClass('on');
		$(this).parents('li').addClass('active')
		$(this).parents('li').siblings('li').removeClass('active')
		$(this).parents('li').siblings('li').find('a').removeClass('on');
        $(this).siblings('div').find("p").eq($(this).index()).show().siblings('p').hide();
       // $(this).parents('li').siblings('li').find('div p').hide();
		var _fbindex=$(this).attr('data-fenbuid');//点击分部时相对于所有分部的下标
	 	$('.fenbu_box').hide()
	 	$('#'+_fbindex).show();
	 	$('.inside_bar ul').hide()
	 	$('#x'+_fbindex).show();
	 	
	});
	
	 $('.yjxilie_box').each(function(){
	 	$(this).find('.erjixilie_box').first().show().siblings('.erjixilie_box').hide();
	 	$(this).find('.erjixilie_name a').on('click',function(){
	 		$(this).addClass('on').siblings('a').removeClass('on');
	 		$(this).parents('.yjxilie_box').find('.erjixilie_box').hide();
	 		$(this).parents('.yjxilie_box').find('.erjixilie_box').eq($(this).index()).show();
	 		$('.inside_bar ul').eq($(this).parents('.fenbu_box').index()-2).find('li').eq($(this).parents('.yjxilie_box').index()-2).find('.erji_namsre a').eq($(this).index()).addClass('on').siblings().removeClass('on');

	 		var _yijiindex=$(this).parents('.yjxilie_box').index()-2;
	 		var _fenbuindex=$(this).parents('.fenbu_box').attr('id');
	 		var _nowindex=$(this).attr('data-ejxlid')
	 		$('#x'+_fenbuindex).find('li div').hide()
	 		$('#x'+_fenbuindex).find('li').eq(_yijiindex).find('div').show();


	 		var idHei=$('#'+_nowindex).find('.kcts_content').height();
			var idHtml=$('#'+_nowindex).find('.kcts_content').html();
			if(idHtml==""||idHtml==" "){
				$('#'+_nowindex).find('.kcts_box').hide();
			}else{
				if(idHei<=100){
					$('#'+_nowindex).find('.kcts_box div').css({'height':'auto','overflow':'auto'});
					$('#'+_nowindex).find('.kcts_title .fun_kcts').hide();

				}else{
					$('#'+_nowindex).find('.kcts_title .fun_kcts').show();
					$('#'+_nowindex).find('.kcts_box div').css({'height':100,'overflow':'hidden'});
				}
				console.log(idHei)
			}
	 	});
	 });



	 $('.inside_bar ul').eq(0).show().siblings('ul').hide();
	 $('.fenbu_box').first().show().siblings('.fenbu_box').hide();
	 $('.fun_kcts').each(function(b){
	  	var onoff=true;
		$(this).on('click',function(){
	 		if(onoff){
	 			$(this).parents('.kcts_box').find('div').css({'height':'auto','overflow':'auto'});
	 			$(this).html('收起课程介绍')
	 			onoff=false;
	 		}else{
	 			$(this).parents('.kcts_box').find('div').css({'height':102,'overflow':'hidden'});
	 			$(this).html('展开全部课程介绍')
	 			onoff=true;
	 		}
	 	});
	  });


	 $('.inside_bar li>a').on('click',function(){
	 	var _parIndex=$(this).parent().index()
	 	var _parsIndex=$(this).parents('ul').index()
	 	//var scrTop=$('.fenbu_box').eq(_parsIndex).find('.yjxilie_box').eq(_parIndex).offset().top;
	 	$('html ,body').animate({'scrollTop':$('.course_wrap').offset().top})
	 	$('.inside_bar li').find('div').hide();
	 	$(this).parent().find('div').show();
	 	$('.fenbu_box').eq(_parsIndex).find('.yjxilie_box').eq(_parIndex).show().siblings('.yjxilie_box').hide();
	 	$('.fenbu_box').eq(_parsIndex).find('.fenbu_dishi li').eq(_parIndex).addClass('on').siblings().removeClass('on');
	 });

	 $('.erji_namsre>a').on('click',function(){
	 	var _parLIndex=$(this).parents('li').index()//一级
	 	var _parUIndex=$(this).parents('ul').index()//分部
	 	var scrTop=$('.fenbu_box').eq(_parUIndex).find('.yjxilie_box').eq(_parLIndex).find('.erjixilie_box').eq($(this).index()).offset().top;
	 	$('html ,body').animate({'scrollTop':scrTop});
	 	$('.fenbu_box').eq(_parUIndex).find('.yjxilie_box').eq(_parLIndex).find('.erjixilie_box').hide()
	 	$('.fenbu_box').eq(_parUIndex).find('.yjxilie_box').eq(_parLIndex).find('.erjixilie_box').eq($(this).index()).show();
	 	$('.fenbu_box').eq(_parUIndex).find('.yjxilie_box').eq(_parLIndex).find('.erjixilie_name a').removeClass('on');
	 	$('.fenbu_box').eq(_parUIndex).find('.yjxilie_box').eq(_parLIndex).find('.erjixilie_name a').eq($(this).index()).addClass('on');
	 	$(this).addClass('on').siblings().removeClass('on');
		

	 })
	 $('.inside_bar ul').each(function(){
	 	$(this).find('li').each(function(){
	 		if($(this).find('div>a').html()===""||$(this).find('div>a').html()===" "){
	 			$(this).addClass('on01')
	 		}
	 	})
	 });


});


function autoHei(){
 	$('.kcts_content').each(function(){
		var tsHei=$(this).height();
		var tsHtml=$(this).html();
		if(tsHtml==""||tsHtml==" "){
			$(this).parents('.kcts_box').hide();
		}else{
			if(tsHei<=90){
				$(this).parent().css({'height':'auto','overflow':'auto'});
				$(this).parent().siblings('h3').find('.fun_kcts').hide();
			}else{
				$(this).parent().css({'height':102,'overflow':'hidden'});
			}
		}
 	});
}