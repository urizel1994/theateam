let slideNow = 1;
let slideCount = $('#slidewrapper').children().length;
let slideInterval = 3000;
let navBtnId = 0;
let translateWidth = 0;

$(document).ready(function() {
    // modals begin
	let overlay = $('.overlay'),
    	dloadLink = $('.dload-copy'),
    	back = $('.head_first'),
    	morePic = $('.morepic'),
    	addCollection = $('.add-copy'),
    	dloadModal = $('.dload-modal'),
    	buyModal = $('.buy-modal'),
    	addModal= $('.add-modal');
    back.click(function() {
    	overlay.hide();
    	dloadModal.removeClass('modal_active');
    	buyModal.removeClass('modal_active');
    	addModal.removeClass('modal_active');
    });
    overlay.click(function() {
    	overlay.hide();
    	dloadModal.removeClass('modal_active');
    	buyModal.removeClass('modal_active');
    	addModal.removeClass('modal_active');
    });
    dloadLink.click(function() {
    	overlay.show();
    	dloadModal.addClass('modal_active');
    });
    morePic.click(function() {
    	buyModal.addClass('modal_active');
    });
    addCollection.click(function() {    	
    	overlay.show();
    	addModal.addClass('modal_active');
    });
    // modals end


	//slider begin
    let switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });
	
    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();
        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }	
    //slider end






}