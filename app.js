//#40514e grey
//#2f89fc blue
//#30e3ca green
//#f5f5f5 white
//<i class="fas fa-comments"></i>
//<i class="fas fa-award"></i>
//<script src="https://kit.fontawesome.com/18d863c735.js" crossorigin="anonymous"></script>
var myCarousel = document.querySelector('#carouselExampleSlidesOnly')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
  wrap: false,
  cycle: true
})