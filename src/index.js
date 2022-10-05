import 'bootstrap'
import './sass/main.scss'


jQuery(function ($) {
  $('.newsletter-signup').on('submit', function (e) {
    // submits data via ajax call
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    submitViaAjax(formData);
  });
});

jQuery((function(e) {
    const n = document.getElementsByClassName("navbar");
    document.addEventListener("scroll", (function() {
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? n[0].classList.add("nav-scroll") : n[0].classList.remove("nav-scroll")
    }), {
        passive: !0
    })
}));

// this is a mock ajax call
function submitViaAjax(formData) {
  // DO NOT EDIT BELOW THIS LINE
  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  console.log(json);
}
