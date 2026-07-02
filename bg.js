chrome.downloads.onCreated.addListener((item, c) => {
  if (!item.byExtensionId) {
    let { finalUrl } = item;
    let len = finalUrl.length;
    if (
      finalUrl[0] == "f" &&
      (c = finalUrl[--len]) == "." &&
      ((c = finalUrl[--len]) == "m" || c == "M") &&
      ((c = finalUrl[--len]) == "4" || c == "o" || c == "O") &&
      ((c == finalUrl[--len]) == "v" || c == "V")
    ) {
      let { id } = item;
      chrome.downloads.cancel(id);
      chrome.downloads.erase({ id });
      chrome.tabs.update({ url: "as.mp4.htm?" + finalUrl });
    }
  }
});