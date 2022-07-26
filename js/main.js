(function($){

  var menu = $(".gnb > li ");
	var content = $("section");//section 으로 변경할 부분
	
	menu.click(function(event){
		/*preventDefault 는 a 태그 처럼 클릭 이벤트 외에 
별도의 브라우저 행동을 막기 위해 사용됩니다.*/
		event.preventDefault();
		
		//사용자가 클릭한 li
		var tg = $(this);
		//순서값을 찾는 함수 index()
		var idx = tg.index();
		//선택한 li와 순서가 같은 content 를 찾음 eq()
		var section = content.eq(idx);
		//선택된 영역의 top 의 좌표값을 저장
		//.offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동하게 합니다.
		var tt = section.offset().top;
 
		//스크롤이 tt의 값에 맞게 움직이게
	$(".wrap").stop().animate({scrollTop:tt});
		});//menu.click() 끝
		
		// 윈도우에서 scroll() 스크롤이 작동될 때 일어날 일.
		$(".wrap").scroll(function(){
		//.scrollTop()은 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정합니다.
		var location = $(window).scrollTop();
		
		content.each(function() {
			//반복문(each)
      		var tg = $(this);
			var idx = tg.index();
			
			if(tg.offset().top - 50 <= location){  //active 위치가 안맞으면 location + 위치값 을 추가하면 됨
				menu.removeClass("active");
				menu.eq(idx).addClass("active");
				}
			

    });//each() 끝
			});//scroll() 끝

  $.aniPage=function(e,type){
    if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
      $("body, html").animate({
        scrollTop:$(window).scrollTop()-$(window).height()
      },1000,function(){
          $.aniOk = 0;
      });
    }else{
      $("body, html").animate({
        scrollTop:$(window).scrollTop()+$(window).height()
      },1000,function(){
          $.aniOk = 0;
      });
    }
  };
})(jQuery);
$(function(){
  $(window).height();
  $.aniOk=0;
  $(window).scrollTop(0);
});
$(document).on("mousewheel DOMMouseScroll",function(e){
  e.preventDefault();
  if($.aniOk == 0){
    $.aniPage(e,e.type);
    $.aniOk = 1;
  }

  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
     responsive: [
      { breakpoint: 760,    
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
    }},
              { breakpoint: 425,    
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }},
          ]
  });
  
});