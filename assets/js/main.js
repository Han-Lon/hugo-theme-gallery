import "./menu.js";
import "./gallery.js";
import "./lightbox.js";

document.addEventListener('contextmenu', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        event.preventDefault();
    }
});