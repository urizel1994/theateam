var owl = $(".painting-carousel");
owl.owlCarousel({
    items: 1,
    pagination: false,
    navigation: true,
    navigationText : ["<img src='img/main/arrow-right.svg'>", "<img src='img/main/arrow-right.svg'>"],
    rewindNav : false,
    URLhashListener: true,
});

$(document).ready(function(){

  $(".copy-dnlw-btn").magnificPopup(
    
  );

  $(".dialog-buy-pack").magnificPopup(
    
  );

  $(".collection-add-btn").magnificPopup(
    
  );

});


// $(".next").click(function(){
//   owl.trigger('owl.next');
// })
// $(".prev").click(function(){
//   owl.trigger('owl.prev');
// })

// document.getElementById('painting-interior').innerHTML = '<img src="img/carousel/54b68e50b96943f5cae0a93bd0820307.jpg" alt="Демон сидящий-оригинал">';