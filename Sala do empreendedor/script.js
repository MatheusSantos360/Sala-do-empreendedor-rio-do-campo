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
    window.location = this.getAttribute("link")
})

$(".block").on("mouseenter", function() {
    $(this).css("background-color", "#0d0c11")
})

$(".block").on("mouseleave", function() {
    $(this).css("background-color", "#282433")
})


// responsive

$(".menu").on("click", function() {
    $(".line3").css("transform", "rotate(45deg)")
})

$(".menu").on("click", function() {
    $(".line1").css("transform", "rotate(135deg)")
    $(".line1").css("transform", "translateY(100deg)")
})

$(".menu").on("click", function() {
    $(".line2").css("display",  "none")
})