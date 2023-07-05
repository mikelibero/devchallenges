function ready(fn) {
    if (document.readyState !== 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  
  ready(function () {
    const menuButtom = document.querySelector(".menu-mobile-toggle");
    const closeButtom = document.querySelector(".close");
    menuButtom.addEventListener('click', function (event) {
        onToggleClick(false)
    });
    closeButtom.addEventListener('click', function (event) {
        onToggleClick(true)
    });
    function onToggleClick(ocultar) {
        document.querySelector("#content").style.display = ocultar ? 'flex' : 'none';
        document.querySelector(".menu-mobile").style.display = ocultar ? 'none' : 'flex';
    }
  });