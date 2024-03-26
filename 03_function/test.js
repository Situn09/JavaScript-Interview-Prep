for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log("first", i);
  }, i * 1000);
}
for (var i = 0; i < 3; i++) {
  function Inner(j) {
    setTimeout(function log() {
      console.log("second", j);
    }, i * 1000);
  }
  Inner(i);
}
