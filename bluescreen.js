(function(){
  var o=document.createElement('div');
  o.id='bsod';o.hidden=true;
  o.style.cssText='position:fixed;inset:0;z-index:2147483647;background:#0000aa url(bluescreen.avif) center/cover no-repeat;cursor:none';
  document.body.appendChild(o);
  /* 1st press: page goes fullscreen (existing handler).
     2nd press while fullscreen: stay fullscreen and show the bluescreen. */
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('#btn-max');
    if(b&&document.fullscreenElement){
      e.stopPropagation();
      o.hidden=false;
    }
  },true);
  /* Leaving fullscreen (Esc etc.) removes the bluescreen again. */
  document.addEventListener('fullscreenchange',function(){
    if(!document.fullscreenElement)o.hidden=true;
  });
})();
