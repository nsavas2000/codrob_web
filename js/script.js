function _0x117e(_0x28e0cc,_0xdb03de){var _0x435401=_0x4354();return _0x117e=function(_0x117e02,_0x5b6b85){_0x117e02=_0x117e02-0xb8;var _0x312970=_0x435401[_0x117e02];return _0x312970;},_0x117e(_0x28e0cc,_0xdb03de);}var _0x6c47fd=_0x117e;(function(_0x3cdc6e,_0xb086f4){var _0x41673d=_0x117e,_0xe186b6=_0x3cdc6e();while(!![]){try{var _0x3b8928=-parseInt(_0x41673d(0xbd))/0x1+parseInt(_0x41673d(0xb8))/0x2+parseInt(_0x41673d(0xc4))/0x3*(parseInt(_0x41673d(0xd5))/0x4)+parseInt(_0x41673d(0xbb))/0x5*(parseInt(_0x41673d(0xc9))/0x6)+parseInt(_0x41673d(0xc8))/0x7*(parseInt(_0x41673d(0xbc))/0x8)+-parseInt(_0x41673d(0xce))/0x9+parseInt(_0x41673d(0xcb))/0xa;if(_0x3b8928===_0xb086f4)break;else _0xe186b6['push'](_0xe186b6['shift']());}catch(_0x44febf){_0xe186b6['push'](_0xe186b6['shift']());}}}(_0x4354,0x4a1e1));function redirectToPage(_0x190d55){var _0x277ea1=_0x117e;window[_0x277ea1(0xc7)][_0x277ea1(0xd0)]=_0x190d55;}document[_0x6c47fd(0xbf)]('DOMContentLoaded',function(){var _0x2fe386=_0x6c47fd,_0x4c5708=document[_0x2fe386(0xd4)](_0x2fe386(0xca));_0x4c5708[_0x2fe386(0xd2)](function(_0x2c0911){var _0x2b8fb6=_0x2fe386;_0x2c0911['addEventListener'](_0x2b8fb6(0xba),function(){var _0x1ab056=_0x2b8fb6,_0xefef99=_0x2c0911[_0x1ab056(0xd1)](_0x1ab056(0xc2));window[_0x1ab056(0xcc)](_0xefef99,_0x1ab056(0xc5));});});});let accordionHeaders=Array[_0x6c47fd(0xd3)](document['querySelectorAll'](_0x6c47fd(0xc3)));accordionHeaders[_0x6c47fd(0xb9)](_0x3b6377=>_0x3b6377[_0x6c47fd(0xbf)](_0x6c47fd(0xba),()=>{toggleAccordion(_0x3b6377);}));function _0x4354(){var _0x2550af=['map','click','70MAGbUZ','10536AMSHao','602721OMKlyu','classList','addEventListener','nextElementSibling','toggle','data-pdf','.accordion-header','114enkmrP','_blank','remove','location','1463nWjSOz','191742kjkLWC','.pdf-container','1060590vACssa','open','active-content','4449060jHJNZf','active','href','getAttribute','forEach','from','querySelectorAll','42876lwyzAx','329228qEEuDP'];_0x4354=function(){return _0x2550af;};return _0x4354();}function toggleAccordion(_0x54872e){accordionHeaders['map'](_0x26f271=>{var _0x26c3e2=_0x117e;const _0xa99fa3=_0x26f271[_0x26c3e2(0xc0)],_0x2eefe7=_0x26f271['firstElementChild'];_0x54872e!==_0x26f271?(_0x2eefe7[_0x26c3e2(0xbe)]['remove'](_0x26c3e2(0xcf)),_0xa99fa3[_0x26c3e2(0xbe)][_0x26c3e2(0xc6)](_0x26c3e2(0xcd))):(_0x2eefe7[_0x26c3e2(0xbe)][_0x26c3e2(0xc1)](_0x26c3e2(0xcf)),_0xa99fa3[_0x26c3e2(0xbe)][_0x26c3e2(0xc1)](_0x26c3e2(0xcd)));});}


function button1Action() {
    alert('Button 1 clicked');
    hidePopup();
}

function button2Action() {
    alert('Button 2 clicked');
    hidePopup();
}

document.getElementById('overlay').addEventListener('click', hidePopup);

function filterItems(category) {
    const items = document.querySelectorAll('#itemList .col-md-4');
    items.forEach(item => {
      if (category === '' || item.getAttribute('data-filter') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
}  

document.addEventListener('DOMContentLoaded', function() {
  const card = document.querySelector('.card');
  const detailLink = document.querySelector('.btn');

  card.addEventListener('click', function(event) {
    window.location.href = detailLink.href;
  });
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }
    
    slides.style.transform = `translateX(${-index * 100}%)`;
    currentIndex = index;
}

function openPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Close popup when clicking outside of it
window.onclick = function(event) {
  const popup = document.getElementById('popup');
  if (event.target == popup) {
      closePopup();
  }
}
