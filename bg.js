chrome.downloads.onCreated.addListener(item => {
  if (!item.byExtensionId) {
    let src = item.url;
    if (src[0] == "f") {
      let id = item.id;
      chrome.downloads.cancel(id);
      chrome.downloads.erase({ id });
      let ext = src.slice(-4).toLowerCase();
      (ext == ".mov" || ext == ".m4v") &&
      chrome.tabs.update({ url: "as.mp4.htm?" + src });
    }
  }
});