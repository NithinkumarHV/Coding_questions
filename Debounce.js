let counter = 0;
function getData() {
  console.log("Fetching data... " + counter++);
}

const debounce = function (fn, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), d);
  };
};

const log = debounce(getData, 1000);

const throttle = function (fn, d) {
  return function (...args) {
    document.getElementById("button_id").disabled = true;
    setTimeout(() => {
      fn(...args);
    }, d);
  };
};

const throt = throttle(() => {
  document.getElementById("button_id").disabled = false;
  console.log("Button Clicked...");
}, 3000);
