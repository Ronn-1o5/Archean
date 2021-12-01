$(document).ready(function(){
    var slidersetttings = {
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 2,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
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
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
        };

    $('.brandslider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
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
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    $('.blog-slider').slick({
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

  $('.social-post-slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
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
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    $('.slider-arrows a').click(function(e){
      e.preventDefault();
      if($(this).hasClass('slider-arrow-prev'))
        $('.brandslider').slick('slickPrev');
      else
        $('.brandslider').slick('slickNext');
    });

    $('.slider-arrows.blog-arrows a').click(function(e){
      e.preventDefault();
      if($(this).hasClass('slider-arrow-prev'))
        $('.blog-slider').slick('slickPrev');
      else
        $('.blog-slider').slick('slickNext');
    });

    $('.slider-arrows.social-arrows a').click(function(e){
      e.preventDefault();
      if($(this).hasClass('slider-arrow-prev'))
        $('.social-post-slider').slick('slickPrev');
      else
        $('.social-post-slider').slick('slickNext');
    });

    if($(window).width() >= 992)
    {
      $('.services-slider').slick(slidersetttings);
    }
    else{
        $('.services-slider').slick(slidersetttings);
        $('.showservicessub').hover(function(){
          var submenuheight = $('.submenu').outerHeight();
          $('.belowsubmenu').css('marginTop',submenuheight+'px');
        },function(){
          setTimeout(function(){ $('.services-slider').slick('unslick'); }, 300);
        });
    }

    $('.uploadcustomfile').click(function(e){
      e.preventDefault();
      $(this).parent().find('#formupload').trigger('click');
    });

    $('#formupload').change(function() {
      console.log("hello");
      var file = $('#formupload')[0].files[0].name;
      $(this).parent().parent().find('h6').text("File Uploaded: "+file);
    });

    
    

    //ready closes here
});

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2dnl5c2luZ2giLCJhIjoiY2twdXR6ZGtoMHhqZTJ4bzFpbWxyZDhmeiJ9.b6bOG8ZTIQz1_EdZpkP9zA';
var map = new mapboxgl.Map({
container: 'map',
center: [144.7729589,-37.9716929],
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 9 // starting zoom
});


// ______________________________________________________+++++___________________________________________________________

/*=============== ACCORDION ===============*/
// const accordionItems = document.querySelectorAll('.accordion__item')

// // 1. Selecionar cada item
// accordionItems.forEach((item) =>{
//     const accordionHeader = item.querySelector('.accordion__header')

//     // 2. Seleccionar cada click del header
//     accordionHeader.addEventListener('click', () =>{
//         // 7. Crear la variable
//         const openItem = document.querySelector('.accordion-open')
        
//         // 5. Llamar a la funcion toggle item
//         toggleItem(item)

//         // 8. Validar si existe la clase
//         if(openItem && openItem!== item){
//             toggleItem(openItem)
//         }
//     })
// })

// // 3. Crear una funcion tipo constante
// const toggleItem = (item) =>{
//     // 3.1 Crear la variable
//     const accordionContent = item.querySelector('.accordion__content')

//     // 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
//     if(item.classList.contains('accordion-open')){
//         accordionContent.removeAttribute('style')
//         item.classList.remove('accordion-open')
//     }else{
//         // 4. Agregar el height maximo del content
//         accordionContent.style.height = accordionContent.scrollHeight + 'px'
//         item.classList.add('accordion-open')
//     }
// }