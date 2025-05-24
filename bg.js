chrome.omnibox.onInputEntered.addListener(s =>
  chrome.storage.local.set({ 0: s + "?" })
);
chrome.downloads.onCreated.addListener(item => {
  if (!item.byExtensionId) {
    let src = item.url;
    if (src[0] == "f") {
      let { id } = item;
      chrome.downloads.cancel(id);
      chrome.downloads.erase({ id });
      let ext = src.slice(-4).toLowerCase();
      ext == ".mov" || ext == ".m4v"
        ? chrome.storage.local.get("0", v =>
            chrome.tabs.update({
              url: (v[0] || "as.mp4.htm?") + src
            })
          )
        : chrome.downloads.resume(id)
    }
  }
});