(async () => {

const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
var activeTab = tabs[0];
var url = activeTab.url;
var regex = new RegExp(/https:\/\/www\.bilibili\.com\/video\/.*|https:\/\/www\.bilibili\.com\/cheese\/play\/.*/);
if (!url.match(regex)) {
  document.querySelector("#result").innerText = "非视频网页";
  return;
}
var cookies = await chrome.cookies.getAll({domain: ".bilibili.com"});
var all = cookies.map(c => c.name + "=" + c.value).join("; ");
document.querySelector("#result").innerText = "BBDown.exe -c \"" + all + "\" \"" + url + "\"";

document.querySelector("#button_copy").onclick = () => {
  navigator.clipboard.writeText(document.querySelector("#result").innerText);
}

})();
