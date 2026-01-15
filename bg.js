chrome.downloads.onCreated.addListener(item => {
  if (!item.byExtensionId) {
    let { finalUrl } = item;
    if (finalUrl[0] == "f" && /\.m[o4]v$/i.test(finalUrl)) {
      let { id } = item;
      chrome.downloads.cancel(id);
      chrome.downloads.erase({ id });
      chrome.tabs.update({ url: "as.mp4.htm?" + finalUrl });
    }
  }
});