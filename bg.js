chrome.downloads.onCreated.addListener(item => {
  if (!item.byExtensionId) {
    let { url } = item;
    if (url[0] == "f" && /\.m[o4]v$/i.test(url)) {
      let { id } = item;
      chrome.downloads.cancel(id);
      chrome.downloads.erase({ id });
      chrome.tabs.update({ url: "as.mp4.htm?" + url });
    }
  }
});