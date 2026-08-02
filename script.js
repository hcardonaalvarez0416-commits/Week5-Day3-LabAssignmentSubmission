// Variables & Arrays
var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li class='photo'>";
var closeList = "</li>";

var captions = [
  "Jasper 1", "Jasper 2", "Petunio 1", "Petunio 2",
  "Charles 1", "Charles 2", "Uncle Tom 1", "Uncle Tom 2",
  "Rex 1", "Rex 2", "Shadow 1", "Shadow 2",
  "Tora 1", "Tora 2", "Manchas 1", "Manchas 2",
  "Mr Rabbit 1", "Mr Rabbit 2"
];

var hoverDescriptions = [
  "High-energy and joyful. A total social butterfly who loves outdoor playtime.",
  "Attentive and loyal. Loves sunny spots and watching their human.",
  "Quiet lazy afternoon resting by the window",
  "Energetic dog exploring the backyard greens",
  "Sweet-natured and gentle. Ready for cozy walks.",
  "Loves taking long naps on fluffy rugs",
  "Enjoys chasing laser pointers around rooms",
  "Perfect family companion for small children",
  "Regal and soulful. Deep affectionate bonds.",
  "Athletic and adventurous. Loves long walks.",
  "Bright eyes, eager to learn tricks.",
  "Extremely intelligent and quick at training",
  "Small bundle of joy and energy",
  "Quiet companion that loves music",
  "Beautiful markings with shiny coat",
  "LOVES belly rubs and plushies",
  "Enjoys chewing crunchy carrots",
  "Active jumper that loves exploring"
];


for (var i = 0; i < 18; i++) {

  fileNames.push("adopt" + (i + 1));

  
  photos.push(
    "<img class='gallery-img' src='images/" + fileNames[i] + ".jpg' alt='" + captions[i] + "'>"
  );

  var captionHtml = "<div class='caption'>" + captions[i] + "</div>";
  var overlayHtml = "<div class='overlay-desc'>" + hoverDescriptions[i] + "</div>";

  image =
    openList +
    "<div class='img-container' data-index='" + i + "'>" +
    photos[i] +
    overlayHtml +
    "</div>" +
    captionHtml +
    closeList;

  imageList.push(image);
}

document.getElementById("album").innerHTML = imageList.join("");


var infoBox = document.getElementById("infoBox");
var infoHeading = document.getElementById("infoHeading");
var infoText = document.getElementById("infoText");
var closeBtn = document.getElementById("closeBtn");

var imgContainers = document.querySelectorAll(".img-container");
imgContainers.forEach(function (container) {
  container.addEventListener("click", function () {
    var index = this.getAttribute("data-index");
    infoHeading.innerHTML = captions[index];
    infoText.innerHTML = hoverDescriptions[index];
    infoBox.style.visibility = "visible";
  });
});

closeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  infoBox.style.visibility = "hidden";
});


$(document).ready(function(){

    $(document).on('click', '.gallery-img', function(){

        // If lightbox is already open, close it
        if ($('.box').is(':visible')) {
            $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
                $('.backdrop').css('display', 'none');
            });
            $('.box').fadeOut();
            return; // Stop here
        }

        // Otherwise, open the lightbox
        $('.backdrop')
            .animate({'opacity':'.50'}, 300, 'linear')
            .css('display', 'block');

        $('.box').fadeIn();

        // Remove previous image
        $('.box img').remove();
        $('.lightbox-caption').remove();

        // Clone clicked image
        var img = $(this).clone();
        $('.box').append(img);

        // Add caption
        var index = $(this).closest('.img-container').data('index');
        var caption = captions[index];
        $('.box').append('<p class="lightbox-caption">' + caption + '</p>');
    });

    /* Close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});
