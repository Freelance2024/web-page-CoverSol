(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Inicia wow.js
    new WOW().init();

    // Navbar fija
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Botón "volver arriba"
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Video modal
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

    // Contador de hechos
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Carrusel de proyectos
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

    // Carrusel de testimonios
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    // -------------------------------
    // Código para generar la galería
    // -------------------------------

    // Arreglo de imágenes
    const galleryImages = [
        { src: "img/images/1.jpeg", title: "Escalera", subtitle: "Coversol" },
        { src: "img/images/2.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/3.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/4.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/5.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/6.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/7.jpeg", title: "Toldo", subtitle: "Coversol" },
        { src: "img/images/8.jpeg", title: "Escalera", subtitle: "Coversol" },
        { src: "img/images/9.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/10.jpeg", title: "Toldo", subtitle: "Coversol" },
        { src: "img/images/11.jpeg", title: "Baranda", subtitle: "Coversol" },
        { src: "img/images/12.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/13.jpeg", title: "Rejas", subtitle: "Coversol" },
        { src: "img/images/14.jpeg", title: "Rejas", subtitle: "Coversol" },
        { src: "img/images/15.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/16.jpeg", title: "Escalera", subtitle: "Coversol" },
        { src: "img/images/17.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/18.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/19.jpeg", title: "Toldo", subtitle: "Coversol" },
        { src: "img/images/20.jpeg", title: "Toldo", subtitle: "Coversol" },
        { src: "img/images/21.jpeg", title: "Rejas", subtitle: "Coversol" },
        { src: "img/images/22.jpeg", title: "Baranda", subtitle: "Coversol" },
        { src: "img/images/23.jpeg", title: "Baranda", subtitle: "Coversol" },
        { src: "img/images/24.jpeg", title: "Rejas", subtitle: "Coversol" },
        { src: "img/images/25.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/26.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/27.jpeg", title: "Baranda", subtitle: "Coversol" },
        { src: "img/images/28.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/29.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/30.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/31.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/32.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/33.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/34.jpeg", title: "Baranda", subtitle: "Coversol" },
        { src: "img/images/35.jpeg", title: "Toldo", subtitle: "Coversol" },
        { src: "img/images/36.jpeg", title: "Rejas", subtitle: "Coversol" },
        { src: "img/images/38.jpeg", title: "Toldo", subtitle: "Coversol" },
        { src: "img/images/39.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/40.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/41.jpeg", title: "Rejas", subtitle: "Coversol" },
        { src: "img/images/42.jpeg", title: "Techo", subtitle: "Coversol" },
        { src: "img/images/43.jpeg", title: "Toldo", subtitle: "Coversol" },
    ];


    // Función para generar la galería
    function generateGallery() {
        const container = document.getElementById('gallery-container');
        let htmlContent = '';

        galleryImages.forEach((image, index) => {
            const delay = (0.1 * (index % 3)).toFixed(1) + 's';
            htmlContent += `
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="${delay}">
                    <div class="team-item">
                        <img class="img-fluid" src="${image.src}" alt="${image.title}">
                        <div class="d-flex">
                            <div class="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4" style="height: 90px;">
                                <h5>${image.title}</h5>
                                <span class="text-primary">${image.subtitle}</span>
                                <div class="team-social" style="justify-content: center">
                                    <a href="" class="btn btn-secondary py-3 px-5 animated slideInRight">Consultar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = htmlContent;
    }

    // Llamamos a la función cuando el DOM esté listo
    $(document).ready(function() {
        generateGallery();
    });

})(jQuery);
