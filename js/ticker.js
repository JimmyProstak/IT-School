$(document).ready(function () {
    $('.ticker__1').marquee({
      duration: 20000,
      gap: 5,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true,
    });
    $('.ticker__2').marquee({
      duration: 20000,
      gap: 50,
      delayBeforeStart: 0,
      direction: 'right',
      duplicated: true,
    });
});