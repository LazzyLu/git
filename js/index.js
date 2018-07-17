$(function(){
	$(".description1").not($(".description1").has('i')).click(function(){
//		var clientW = document.documentElement.clientWidth;
		var $left = $(this).offset().left;
		var $top = $(this).offset().top;
		$(".mask").css({width:"100%",height:"100%",zIndex:10,background:"rgba(200,200,200,0.2)"})
  
		$(".floater").show().stop().animate({width:330},1000,function(){
			$(".floater").stop().animate({height:615},1000)
		});
		$(".floater").css({left:$left,top:$top})
		$(".close").click(function(){
			$(".floater").hide(1000);
			$(".mask").hide();
		})
	})
})
