$(function(){
    let num;
    let percentEvent = true;
//메인 슬라이드 (swiper)
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: false,
        speed:650,
        touchRatio: 0,//드래그 x

        // mousewheel: {
        //     invert: false,
        //   },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable : 'true',
          bulletElement : 'div'
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        keyboard: {
          enabled: true,          
        },
    });
//section2 슬릭 슬라이더
  const slider = $('.section2_slider');

  $('.section2_slider').slick({
        vertical : true,
        slidesToShow : 3.5,
        speed : 300,        
        arrows: false,
        infinite: false, //무한
        dots: true,
        centerMode : true,  //가운데    
    });    
//슬릭 마우스휠 작동
slider.on('wheel', (function(e) { 
    e.preventDefault(); 
    if (e.originalEvent.deltaY < 0) { 
      $(this).slick('slickPrev');
      num = $('.slick-active').index();      
      slickmove(num);
     } else {      
      $(this).slick('slickNext');
      num = $('.slick-active').index();      
      slickmove(num);
     } 
}));
//항목 클릭시
$('.con_txt1').click(function(){
  num = $(this).parent().parent().index();
  let num2 = $('.slick-active').index();
  if(num != num2){
    $('.section2_slider').slick('slickGoTo',num);
    slickmove(num);
  }else{
    num = num+2;
    swiper.slideTo(num,1000,false);
  }
});
//dots 클릭시
$('.slick-dots button').click(function(){
  num = $(this).parent().index(); 
  slickmove(num);
});
//글자 키워주는 함수
function slickmove(num){
  $('.con_txt1').removeClass('on');  
  $('.con_txt1').eq(num).addClass('on');
}

//페이지 변경 이벤트
swiper.on('slideChange', function () {
  
  $('.section2_slider').slick('setPosition'); //슬릭 위치잡아주기
  
  let now = swiper.realIndex;

  switch (now) {
    case 0 :
      $('.swiper-pagination').hide();
      $('#header').hide();
        break;
    case 1 :
      $('.swiper-pagination').hide();
      $('#header').show();
      $('.header_title').text('Content');
      $('.header_title').css('color','#fff');
      $('.swiper-pagination-bullet').css('background','none');
      $('.swiper-pagination-bullet').css('border-color','#fff');
      $('.swiper-pagination-bullet-active').css('background','#fff');
      $('.logo img').attr('src','images/logo_1_w.png')
      $('.header_logo2').attr('src','images/logo_2_w.png')
        break;
    case 2 :
      $('.swiper-pagination').show();
      $('#header').show();
      $('.header_title').text('About');
      $('.header_title').css('color','#fff');
      $('.swiper-pagination-bullet').css('background','none');
      $('.swiper-pagination-bullet').css('border-color','#fff');
      $('.swiper-pagination-bullet-active').css('background','#fff');
      $('.logo img').attr('src','images/logo_1_w.png');
      $('.header_logo2').attr('src','images/logo_2_w.png');
      $('.skill').addClass('on');
      if(percentEvent==true){  
        $({ val : 0 }).animate({ val : 90 }, {
          duration: 2000,
          step: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".count_num").text(num + '%');
          },
          complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $(".count_num").text(num + '%');
          }
        });
        function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        percentEvent=false;
      }
        break;
    case 3 :
      $('.swiper-pagination').show();
      $('#header').show();
      $('.header_title').text('Portfolio');
      $('.header_title').css('color','#000');
      $('.swiper-pagination-bullet').css('background','none');
      $('.swiper-pagination-bullet').css('border-color','#000');
      $('.swiper-pagination-bullet-active').css('background','#000');
      $('.logo img').attr('src','images/logo_1.png')
      $('.header_logo2').attr('src','images/logo_2.png')
        break;
    case 4 :
      $('.swiper-pagination').show();
      $('#header').show();
      $('.header_title').text('Design');
      $('.header_title').css('color','#fff');
      $('.swiper-pagination-bullet').css('background','none');
      $('.swiper-pagination-bullet').css('border-color','#fff');
      $('.swiper-pagination-bullet-active').css('background','#fff');
      $('.logo img').attr('src','images/logo_1_w.png')
      $('.header_logo2').attr('src','images/logo_2_w.png')
        break;
    case 5 :
      $('.swiper-pagination').show();
      $('#header').hide();
      $('.swiper-pagination-bullet').css('background','none');
      $('.swiper-pagination-bullet').css('border-color','#000');
      $('.swiper-pagination-bullet-active').css('background','#000');
        break;      
  }
  
});

$('.page .imgbox').mouseenter(function(){
  $(this).find('.img_cover').show();
});
$('.page .imgbox').mouseleave(function(){
  $(this).find('.img_cover').hide();
});
$('.tab>div').click(function(){
  num = $(this).index();
  $(this).addClass('on').siblings().removeClass('on');
  $('.center').hide();
  $('.center').eq(num).show();
  $('.center').slick('setPosition');
});

// 이동버튼
$('.btn_next').click(function(){
  swiper.slideNext(1000);
});
$('.btn_prev').click(function(){
  swiper.slidePrev(1000);
});

//활성화된 인덱스 확인      
      swiper.on('transitionEnd', function() { 
        console.log('now index :::', swiper.realIndex); 
      });      
//테스트용 활성화된 네비 인덱스
      $('.swiper-pagination-bullet').click(function(){        
        num = $(this).index();
        console.log('네비인덱스' + num);
      });

$('.center').slick({
  centerMode: true,
  // centerPadding: '160px',
  slidesToShow: 3,
});









});