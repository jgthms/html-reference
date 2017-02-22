document.addEventListener('DOMContentLoaded', function() {
  var $root = document.documentElement;
  var $alo = document.getElementById('alo');
  var $bsaShadow = document.getElementById('bsaShadow');

  var toTravel = $root.scrollHeight - window.innerHeight;
  var fromTop = $alo.offsetTop;
  var menuThrottle = null;

  if ($alo) {
    document.addEventListener('scroll', function(event) {
      var scrollTop = window.scrollY;
      setBsa(scrollTop);
      clearTimeout(menuThrottle);
      throttle = setTimeout(setBsaShadows(scrollTop), 100);
    });

    function setBsaShadows(scrollTop) {
      var distance = toTravel - scrollTop;
      var topFactor = 1 - (distance / toTravel);
      $bsaShadow.style.opacity = topFactor;
      $bsaShadow.style.transform = 'scaleY(' + topFactor + ')';
    }

    function setBsa(scrollTop) {
      if (scrollTop >= fromTop) {
        $alo.classList.add('is-fixed');
      } else {
        $alo.classList.remove('is-fixed');
      }
    }

    setBsaShadows(0);
  }
});
