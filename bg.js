chrome.downloads.onCreated.addListener(item => {
  if (item.referrer && !item.byExtensionId) {
    let { finalUrl } = item;
    let len = finalUrl.length;
    let c = finalUrl[--len];
    if (
      (c == "v" || c == "V") &&
      ((c = finalUrl[--len]) == "4" || c == "o" || c == "O") &&
      ((c = finalUrl[--len]) == "m" || c == "M") &&
      (c = finalUrl[--len]) == "."
    ) {
      let { id } = item;
      let { downloads, tabs } = chrome;
      downloads.cancel(id);
      downloads.erase({ id });
      tabs.update({ url: "as.mp4.htm?" + finalUrl });
    }
  }
});
