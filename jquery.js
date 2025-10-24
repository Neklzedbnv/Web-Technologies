$(document).ready(function() {

  console.log("✅ jQuery is ready!");

  // --------------------------------------------------
  // Task 1: Live Search Filter
  // --------------------------------------------------
  $("#searchBox").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $(".card").filter(function () {
      $(this).toggle($(this).text().toLowerCase().includes(value));
    });
  });

  // --------------------------------------------------
  // Task 2: Spotlight Search (Apple Style)
  // --------------------------------------------------

  // List of recipe names for suggestions
  const spotlightRecipes = [
    "Pancakes", "Blueberry Muffins", "Avocado Toast",
    "Caesar Salad", "Chicken Soup", "Ramen Bowl",
    "Chocolate Cake", "Soufflé", "Tacos", "Oatmeal Bowl"
  ];

  // Open Spotlight on button click
  $("#openSpotlight").on("click", function () {
    $("#spotlightOverlay").fadeIn(200);
    $("#spotlightInput").val("").focus();
    $("#spotlightResults").empty();
  });

  // Close Spotlight when clicking outside
  $("#spotlightOverlay").on("click", function (e) {
    if (e.target.id === "spotlightOverlay") {
      $("#spotlightOverlay").fadeOut(200);
    }
  });

  // Live filtering while typing
  $("#spotlightInput").on("input", function () {
    let value = $(this).val().toLowerCase();
    $("#spotlightResults").empty();
    spotlightRecipes.forEach(recipe => {
      if (recipe.toLowerCase().includes(value) && value.length > 0) {
        $("#spotlightResults").append(`<li>${recipe}</li>`);
      }
    });
  });

  // When user clicks on suggested recipe
  $("#spotlightResults").on("click", "li", function () {
    let selected = $(this).text();
    alert("🔍 Opening recipe: " + selected);
    $("#spotlightOverlay").fadeOut(200);
  });

  

}); 

// Task 3: Highlight Matches in Card Titles and Text
$("#searchBox").on("keyup", function () {
  let search = $(this).val().toLowerCase();

  $(".card-title, .card-text").each(function () {
    let text = $(this).text();
    if (search.length > 0) {
      let regex = new RegExp(search, "gi");
      let newText = text.replace(regex, match => `<span class="highlight">${match}</span>`);
      $(this).html(newText);
    } else {
      $(this).text(text); // Reset if search box empty
    }
  });
});

// --------------------------------------------------
// Task 4: Scroll Progress Bar
// --------------------------------------------------
$(window).on("scroll", function () {
  let scrollTop = $(window).scrollTop();
  let docHeight = $(document).height() - $(window).height();
  let scrollPercent = (scrollTop / docHeight) * 100;
  $("#scrollBar").css("width", scrollPercent + "%");
});

// --------------------------------------------------
// Task 5: Animated Number Counters
// --------------------------------------------------
function animateCounters() {
  $(".counter").each(function () {
    let $this = $(this);
    let target = +$this.data("target");
    let count = 0;

    let step = target / 80; // speed control

    let counterInterval = setInterval(function () {
      count += step;
      if (count >= target) {
        $this.text(target);
        clearInterval(counterInterval);
      } else {
        $this.text(Math.floor(count));
      }
    }, 20);
  });
}
// Run animation when page loads
animateCounters();

// --------------------------------------------------
// Task 6: Loading Spinner on Contact Form Submit
// --------------------------------------------------
$("#contactForm").on("submit", function(e) {
  e.preventDefault(); // Предотвращаем стандартную отправку (чтобы не перезагружалась страница)

  let btn = $(this).find("button[type=submit]");

  btn.prop("disabled", true); 
  btn.html("⏳ Sending..."); // Меняем текст

  setTimeout(() => {
    btn.html("✅ Message Sent!");
    setTimeout(() => {
      btn.prop("disabled", false);
      btn.html("Send Message");
    }, 1500);
  }, 2000);
});

// --------------------------------------------------
// Task 7: Toast Notification (Bottom Center)
// --------------------------------------------------
function showToast(message) {
  $("#toast").text(message).addClass("show");
  setTimeout(() => {
    $("#toast").removeClass("show");
  }, 2000);
}

// Показ тоста при нажатии кнопки Open Recipe
$(".btn-primary").on("click", function () {
  showToast("✅ Recipe opened!");
});

// Task 8: Copy to Clipboard
$(".copyBtn").on("click", function () {
  let text = $(this).prev(".recipeText").text();
  navigator.clipboard.writeText(text);

  let btn = $(this);
  btn.text("✅ Copied!");
  setTimeout(() => btn.text("Copy"), 1500);
});


// Task 9: Scroll to Top Button
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 300) {
    $("#toTopBtn").fadeIn();
  } else {
    $("#toTopBtn").fadeOut();
  }
});

$("#toTopBtn").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
});




