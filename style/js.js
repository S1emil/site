$(function() {
	const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).removeClass('not_show');
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);
        $('.modal__mult__photo').slick('setPosition');
    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });
    $('.town__Slider').slick({
    	infinite: true,
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	fade: true,
    	arrows: false,
    	dots: false
    });
    $("#town__Next").on("click", function(event){
    	event.preventDefault();
    	$('.town__Slider').slick("slickNext")
    });
    $("#town__Previous").on("click", function(event){
    	event.preventDefault();
    	$('.town__Slider').slick("slickPrev")
    });
    $('.mult__Slider').slick({
    	infinite: true,
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	fade: true,
    	arrows: false,
    	dots: false
    });
    $('.mult__button__Slider').slick({
    	infinite: true,
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	fade: true,
    	arrows: false,
    	dots: false
    });
    $("#mult__Next").on("click", function(event){
    	event.preventDefault();
    	$('.mult__Slider').slick("slickNext")
    	$('.mult__button__Slider').slick("slickNext")
    });
    $("#mult__Previous").on("click", function(event){
    	event.preventDefault();
    	$('.mult__Slider').slick("slickPrev")
    	$('.mult__button__Slider').slick("slickPrev")
    });


});