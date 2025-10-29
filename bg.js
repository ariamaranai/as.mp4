chrome.downloads.onCreated.addListener(item => {
  if (!item.byExtensionId) {
    let src = item.url;
    if (src[0] == "f" && /\.m[o4]v$/i.test(src)) {
      let id = item.id;
      chrome.downloads.cancel(id);
      chrome.downloads.erase({ id });
      chrome.tabs.update({ url: "as.mp4.htm?" + src });
    }
  }
});