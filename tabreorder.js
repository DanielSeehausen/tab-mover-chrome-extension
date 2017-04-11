document.addEventListener("keydown", function(e) {
  //only pass if the right modifiers are down and it is a valid hotkey
  if ((e.shiftKey && e.metaKey) && (e.keyCode == 80 || e.keyCode == 220)) {
    chrome.extension.sendMessage({keyCode: e.keyCode})
    console.log("Sent mdg")
    e.stopPropagation()
    e.preventDefault()
  }
}, true)
