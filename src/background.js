window.chrome.browserAction.onClicked.addListener(function() {
  window.chrome.tabs.executeScript(null, {file: "./static/js/content.js"});
});