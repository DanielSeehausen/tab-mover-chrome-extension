function moveTabToPosition(jaunt, tabCount) {
  chrome.tabs.getSelected(undefined, (tab) => {
    if (tab.index === tabCount - 1 && jaunt === 1) { // if the last tab is being moved right
      chrome.tabs.move(tab.id, {index: 0})
    } else if (tab.index === 0 && jaunt === -1) { // if first tab is being moved left
      chrome.tabs.move(tab.id, {index: tabCount-1})
    } else {
      chrome.tabs.move(tab.id, {index: (tab.index + jaunt)})
    }
  })
}

chrome.commands.onCommand.addListener((command) => {
  // looks like only the commands that are part of this extension are captured, so no need to check
  chrome.tabs.query({}, (foundTabs) => {
    let tabCount = foundTabs.length
    if (tabCount === 1) return // escape corner case
    let jaunt = (command === 'move-tab-right') ? 1 : -1
    moveTabToPosition(jaunt, tabCount)
  })
})
