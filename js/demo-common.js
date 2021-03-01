
demo = window.demo || {};
(function() {
   alias = localStorage.getItem('shortcircuited');
   if (alias === null || alias === '') {
      //window.location="/index.html";
   }
   ccpUrl = 'https://shortcircuited.awsapps.com/connect/ccp#/';
   homeURL = 'https://shortcircuited.awsapps.com/connect/home';
   demo.alias = alias;
   demo.ccpUrl = ccpUrl;
   demo.homeURL = homeURL;
})();
