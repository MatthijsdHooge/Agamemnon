(function(){
  var o=document.createElement('div');
  o.id='bsod';o.hidden=true;
  o.style.cssText='position:fixed;inset:0;z-index:2147483647;background:#0000aa url(bluescreen.avif) center/cover no-repeat;cursor:none';
  document.body.appendChild(o);
  function sync(){
    var fs=!!document.fullscreenElement||window.matchMedia('(display-mode: fullscreen)').matches;
    o.hidden=!fs;
  }
  document.addEventListener('fullscreenchange',sync);
  window.addEventListener('resize',sync);
  o.addEventListener('click',function(){if(document.fullscreenElement)document.exitFullscreen()});
  sync();
})();
