// Mobile Menu
$(".hamburger-menu").on("click", function() {
    $(".mobile-nav-container").removeClass("hide");
})

$(".close-icon").on("click", function() {
    $(".mobile-nav-container").addClass("hide");
})

// Destination
$(".destination-option").on("click", function(event) {
    $(".destination-container").addClass("hide");
    $("." + this.id + "-container").removeClass("hide");
});

// Crew
$(".gallery-btn").on("click", function(event) {
    $(".crew-container").addClass("hide");
    $(".gallery-btn").removeClass("gallery-btn-selected");
    $("." + this.id + "-container").removeClass("hide");
    $("." + this.id + "-gallery-btn").addClass("gallery-btn-selected");
});

// Technology
$(".page-number-btn").on("click", function(event) {
    $(".technology-container").addClass("hide");
    $(".page-number-btn").removeClass("page-number-btn-selected");
    $("." + this.id + "-container").removeClass("hide");
    $("." + this.id + "-btn").addClass("page-number-btn-selected");
})