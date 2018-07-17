$(function(){
	$("nav>ul:first-child").css({height : document.documentElement.clientHeight});
	$("#secondlist").css({height : document.documentElement.clientHeight});
	$("#haslist,#secondlist").mouseenter(function(){
		$("#secondlist").css({display:"block"})
	})
	$("#haslist,#secondlist").mouseleave(function(){			
			$('#secondlist').css({display:"none"})
	})
	var ele =$(".rightsider ul li:last-child");
	$(window).scroll(function(){
		//滚动事件待改进
		 if($(window).scrollTop() > 100){
			 ele.show();
		 }else{
			ele.hide(1000);
		}
		ele.click(function(){			
			$(window).scrollTop() = 0;
		});
	})
})