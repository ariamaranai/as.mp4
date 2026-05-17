chrome.downloads.onCreated.addListener(item => {
  if (!item.byExtensionId) {
    let { finalUrl } = item;
    let len = finalUrl.length;
    let c;
    if (
      finalUrl.charCodeAt() == 102 &&
      ((c = finalUrl.charCodeAt(len - 4)) == 118 || c == 86) &&
      ((c = finalUrl.charCodeAt(len - 3)) == 52 || c == 111 || c == 79) &&
      ((c = finalUrl.charCodeAt(len - 2)) == 109 || c == 77) &&
      (c = finalUrl.charCodeAt(len - 1)) == 46
    ) {
      let { id } = item;
      chrome.downloads.cancel(id);
      chrome.downloads.erase({ id });
      chrome.tabs.update({ url: "as.mp4.htm?" + finalUrl });
    }
  }
  return 0;
});