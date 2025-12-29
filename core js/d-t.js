let input = document.querySelector("input");
// debounce
function debounce(cb) {
  let timeout = null;
  return function (event) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      cb(event);
    }, 1000);
  };
}

input.addEventListener(
  "keydown",
  debounce((event) => {
    console.log(input.value);
  })
);

function throttling(cb) {
  let interval = true;
  return function (event) {
    if (interval) {
      interval = false;
      cb(event);
      setTimeout(() => {
        interval = true;
      }, 1000);
    }
  };
}

window.addEventListener(
  "scroll",
  throttling((event) => {
    const section = document.querySelector("main");
    const topPos = section.getBoundingClientRect().bottom;
    console.log(topPos);
  })
);

// 5 to 10 mb => long time => localStorage (browser)
// 5 to 10 mb => limited (session) time => sessionStorage (browser)
// 4kb => handling some tokens in secure way => cookies (browser or server) => it has a life
// unlimited data => offline service => indexDB
// save my html pages for offline service => cache service worker
