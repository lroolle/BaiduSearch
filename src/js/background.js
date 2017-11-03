

function blackBaiduSearch(selection, tab){
    var text = encodeURIComponent(selection.selectionText);
    var url = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=" + text;
    window.open(url);
}

chrome.contextMenus.create(
    {
        "title": "Search B_Baidu for “%s”",
        "contexts": ["selection"],
        "onclick": blackBaiduSearch
    }
);

