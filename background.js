let currentURL = ""

chrome.runtime.onInstalled.addListener(() => {
  console.log('Loaded');
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	//if (changeInfo.status == 'complete' && tab.url != currentURL) {
		chrome.tabs.sendMessage(tabId, {message: "addDislikes"}); 
		currentURL = tab.url;
	//}
});