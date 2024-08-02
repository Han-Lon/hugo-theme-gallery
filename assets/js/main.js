import "./menu.js";
import "./gallery.js";
import "./lightbox.js";

// For mobile touch handling
let touchStartTime = 0;
const LONG_PRESS_THRESHOLD = 500; // 500ms for a long press

document.addEventListener('contextmenu', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        event.preventDefault();
    }
});

// Prevent bringing up context menu on mobile devices with a long press
document.addEventListener('touchstart', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        touchStartTime = Date.now();
    }
});

document.addEventListener('touchend', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        const touchEndTime = Date.now();
        const touchDuration = touchEndTime - touchStartTime;

        if (touchDuration >= LONG_PRESS_THRESHOLD) {
            // It's a long press, prevent default behavior
            event.preventDefault();
        }
        // If it's a quick tap, don't prevent default behavior
    }
});