// $(window).load(function() {
//     $(".carousel .item").each(function() {
//         var i = $(this).next();
//         i.length || (i = $(this).siblings(":first")),
//           i.children(":first-child").clone().appendTo($(this));
        
//         for (var n = 0; n < 4; n++)(i = i.next()).length ||
//           (i = $(this).siblings(":first")),
//           i.children(":first-child").clone().appendTo($(this))
//     })
// });



$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    nextArrow: '<div class="btndiv"><button class="nextbutton"></button></div>',
    prevArrow: '<div class="btndiv"> <button class="previousbutton"></button></div>'
  });
