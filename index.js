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
    $("." + this.id + "-container").removeClass("hide");
});

