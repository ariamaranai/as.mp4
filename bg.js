{
  let { downloads, tabs } = chrome;
  downloads.onCreated.addListener(item => {
    let { finalUrl } = item;
    if (finalUrl[0] === "h" && (!item.referrer || item.byExtensionId))
      return;
    let len = finalUrl.length;
    let c = finalUrl[--len];
    return (c === "v" || c === "V") &&
      ((c = finalUrl[--len]) === "4" || c === "o" || c === "O") &&
      ((c = finalUrl[--len]) === "m" || c === "M") &&
      (c = finalUrl[--len]) === "." && (
        downloads.cancel(c = item.id),
        downloads.erase({ id: c }),
        tabs.update({ url: "as.mp4.htm?" + finalUrl })
      );
  });
}
