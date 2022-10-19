// promoBox({
//     imagePath: 'images/ea.jpeg',
    
    
//     target: '_blank',
//     disableOverlay: false,
//     disableOverlayClose: false,
//     disableStyles: false,
//     disableCloseButton: false,
//     disableKeyClose: false,
//     closeButtonText: '',
//     //            showOnHash: '#promo',
//     //            startDate: 'April 12, 2014 02:30:00',
//     //            endDate: 'May 20, 2014 19:27:00',
//     //            frequency: 0.33,
//     deleteCookieOnUrl: '#clear',
//     fadeInDuration: 0.5,
//     fadeOutDuration: 0.2,
//     loadDelay: 0.1,
//     //            interstitialSkipText: 'Skip this advertisement',
//     //            interstitialText: 'or wait %s secs',
//     autoCloseSeconds: 30
//   });
  
//   var demoImage;
  


  
//   // callback functions
  
//   var promoBoxStart = function () {
//     if (typeof console !== "undefined") {
//       console.log('promoBox has started...');
//     }
//   };
      
//   var promoBoxClick = function () {
//     if (typeof console !== "undefined") {
//       console.log('promoBox image was clicked');
//     }
//   };
      
//   var promoBoxClose = function () {
//     if (typeof console !== "undefined") {
//       console.log('promoBox terminated');
//     }
//   };

function popup_content(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('popup_content_wrap').style.display = "none";
    else document.getElementById('popup_content_wrap').removeAttribute('style');
}
window.onload = function () {
    setTimeout(function () {
        popup_content('show');
    }, 100);
}