var $services_main_blocks = $('.services_main_blocks');

$services_main_blocks.slick({
     dots: true,
     infinite: true,
     arrow: true,
     autoplay: true,
     speed: 300,
     slidesToShow: 4,
     slidesToScroll: 4,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
   });




$(document).ready(function(){

$('.readmore').each(function(index) {
 var $this = $(this)
 $this.on('click', function() {
   var number = $this.data('slide_number');
   console.log(number);
   $('.work_main_blocks').slick('slickGoTo', number -1);
 });
});


 $('.work_main_blocks').slick({
   dots: true,
   infinite: false,
   speed: 300,
   slidesToShow: 3,
   slidesToScroll: 3,
   responsive: [
     {
       breakpoint: 1100,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 770,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 });

 $('.review_main_blocks').slick({
   dots: true,
   infinite: true,
   autoplay: true,
   speed: 300,
   slidesToShow: 1,
   slidesToScroll: 1,
   responsive: [
     {
       breakpoint: 1100,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 770,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 });

 var myFullpage = new fullpage('#fullpage', {
   licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
   anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage'],
   menu: 'nav',
   lazyLoad: true
});

});
