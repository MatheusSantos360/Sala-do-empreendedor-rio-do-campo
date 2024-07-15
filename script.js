addEventListener("resize", function() {
    if (window.innerWidth <= 776) {
        document.getElementById("bannerImg").src = "assets/banner mobile.png";
    } else if (window.innerWidth > 776) {
        document.getElementById("bannerImg").src = "assets/banner desktop.jpg";
    }
});

function redirect(el) {
    window.location.href = (window.location.href).replace("#aprendizado", "").replace("#capacitacoes", "") + "#" + el.getAttribute("section")
}

//
const list = $("#materiais-categoria li");
const divs = $("div.itens > div.categorias_itens");

for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
        for (var j = 0; j < list.length; j++) {
            list[j].classList.remove("active");
        }
        this.classList.add("active");
        for (var j = 0; j < list.length; j++) {
            divs[j].classList.remove("active");
        }
        const div = this.getAttribute("categoria")
        $("div.itens > div#" + div).addClass("active");
    });
}

// slick slider

$(document).ready(function() {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        appendArrows: $(".prevNextArrow"),
        prevArrow: "<div class='prevBtn' onclick='clicked(this)'></div>",
        nextArrow: "<div class='nextBtn' onclick='clicked(this)'></div>",
        speed: 300,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 875,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "180px"
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "100px"
                }
            }, {
                breakpoint: 705,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "20px"
                }
            }, {
                breakpoint: 250,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: "10px"
                }
            }
        ],
    });
});

function clicked(arrow) {
    arrow.style.animation = "click 0.5s ease"
    setTimeout(() => {
        arrow.style.animation = ""
    }, 500)
}

$(".block").on("click", function() {
    window.open(this.getAttribute("link"));
})

$(".block").on("mouseenter", function() {
    $(this).css("background-color", "#0d0c11")
})

$(".block").on("mouseleave", function() {
    $(this).css("background-color", "#282433")
})


// responsive

$(".menu").on("click", function() {
    $(".menu .line1").css("rotate", "45deg")
    $(".menu .line1").css("transform", "translateY(2px)")
    $(".menu .line2").css("display", "none")
    $(".menu .line3").css("rotate", "-45deg")
    $(".menu .line3").css("transform", "translateY(-4px)")
})

function activeItem(that) {
    const item = document.getElementById(that.getAttribute("categoria"))
    var activeDelete = $(".categorias_itens")
    for (var i = 0; i < activeDelete.length; i++) {
        activeDelete[i].classList.remove("active")
    }
    item.classList.add("active")
}

$(".menu").on("click", function() {
    $(".menuMobile").css("display", "block")
    $(".menuMobile").css("left", "0")
    $("html").css("overflow", "hidden")
    $(".clickk").css("display", "block")
})

$(".clickk").on("click", function() {
    $(".clickk").css("display", "none")
    $("html").css("overflow", "visible")
    $(".menuMobile").css("left", "-100%")

    $(".menu .line1").css("rotate", "180deg")
    $(".menu .line1").css("transform", "translateY(6px)")
    $(".menu .line2").css("display", "block")
    $(".menu .line3").css("rotate", "180deg")
    $(".menu .line3").css("transform", "translateY(-6px)")
})

for (var i = 0; i < $(".menuMobile li").length; i++) {
    $(".menuMobile li")[i].addEventListener("click", function() {
        $(".clickk").css("display", "none")
        $("html").css("overflow", "visible")
        $(".menuMobile").css("left", "-100%")

        $(".menu .line1").css("rotate", "180deg")
        $(".menu .line1").css("transform", "translateY(6px)")
        $(".menu .line2").css("display", "block")
        $(".menu .line3").css("rotate", "180deg")
        $(".menu .line3").css("transform", "translateY(-6px)")
    })
}

window.addEventListener("resize", function() {
 if (window.innerWidth > 585 ) {
    $(".clickk").css("display", "none")
    $("html").css("overflow", "visible")
    $(".menuMobile").css("left", "-100%")

    $(".menu .line1").css("rotate", "180deg")
    $(".menu .line1").css("transform", "translateY(6px)")
    $(".menu .line2").css("display", "block")
    $(".menu .line3").css("rotate", "180deg")
    $(".menu .line3").css("transform", "translateY(-6px)")
 }
})