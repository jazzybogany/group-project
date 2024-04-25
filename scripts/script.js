function menu_item_selected() {
  if (window.location.hash.slice(1) == "home") {
    document.getElementById("home").style = "color: black; font-weight: bold;";
    document.getElementById("about").style = "color: #461306;";
    document.getElementById("staff").style = "color: #461306;";
    document.getElementById("gallery").style = "color: #461306;";
    document.getElementById("testimonials").style = "color: #461306;";
    document.getElementById("contact").style = "color: #461306;";
  } else if (window.location.hash.slice(1) == "about") {
    document.getElementById("home").style = "color: #461306;";
    document.getElementById("about").style = "color: black; font-weight: bold;";
    document.getElementById("staff").style = "color: #461306;";
    document.getElementById("gallery").style = "color: #461306;";
    document.getElementById("testimonials").style = "color: #461306;";
    document.getElementById("contact").style = "color: #461306;";
  } else if (window.location.hash.slice(1) == "staff") {
    document.getElementById("home").style = "color: #461306;";
    document.getElementById("about").style = "color: #461306;";
    document.getElementById("staff").style = "color: black; font-weight: bold;";
    document.getElementById("gallery").style = "color: #461306;";
    document.getElementById("testimonials").style = "color: #461306;";
    document.getElementById("contact").style = "color: #461306;";
  } else if (window.location.hash.slice(1) == "gallery") {
    document.getElementById("home").style = "color: #461306;";
    document.getElementById("about").style = "color: #461306;";
    document.getElementById("staff").style = "color: #461306;";
    document.getElementById("gallery").style =
      "color: black; font-weight: bold;";
    document.getElementById("testimonials").style = "color: #461306;";
    document.getElementById("contact").style = "color: #461306;";
  } else if (window.location.hash.slice(1) == "testimonials") {
    document.getElementById("home").style = "color: #461306;";
    document.getElementById("about").style = "color: #461306;";
    document.getElementById("staff").style = "color: #461306;";
    document.getElementById("gallery").style = "color: #461306;";
    document.getElementById("testimonials").style =
      "color: black; font-weight: bold;";
    document.getElementById("contact").style = "color: #461306;";
  } else if (window.location.hash.slice(1) == "contact") {
    document.getElementById("home").style = "color: #461306;";
    document.getElementById("about").style = "color: #461306;";
    document.getElementById("staff").style = "color: #461306;";
    document.getElementById("gallery").style = "color: #461306;";
    document.getElementById("contact").style =
      "color: black; font-weight: bold;";
    document.getElementById("testimonials").style = "color: #461306;";
  }
}
