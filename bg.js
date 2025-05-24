chrome.omnibox.onInputEntered.addListener(s =>
  chrome.storage.local.set({ 0: s + "?" })
);
chrome.downloads.onCreated.addListener(item => {
  if (!item.byExtensionId) {
    let src = item.url;
    if (src[0] == "f") {
      let n = src.length;
      let c = src[n - 1];
      (c == "v" || c == "V") && ((c = src[n - 3]) == "m" || c == "M") && src[n - 4] == "." && (
        chrome.downloads.cancel(item.id),
        chrome.storage.local.get("0", v =>
          chrome.tabs.create({
            url: (v[0] || "as.mp4.htm?") + src
          })
        )
      )
    } 
  }
});