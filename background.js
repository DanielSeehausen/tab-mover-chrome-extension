function moveTabToPosition(jaunt) {
  chrome.tabs.getSelected(undefined, (tab) => {
    var newTabIndex = tab.index + jaunt
    if (newTabIndex < 0) return // corner case
    chrome.tabs.move(tab.id, {index: newTabIndex})
  })
}

chrome.runtime.onMessage.addListener((req, sender, response) => {
    if (req.keyCode == 80) {
      moveTabToPosition(-1)
    } else if (req.keyCode == 220) {
      moveTabToPosition(1)
    }
  }
)
