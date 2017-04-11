# This extension adds two hotkeys (compatible with Mac OS):

## cmd + shift + P  (move current tab left: wraps if at index/position 0)
## cmd + shift + O  (move current tab right: wraps if at index/position len(tabcount))

### Why '\\' was not used:
Using plain window level javascript, keydown/press/up events are not capture-able when the focus is on the address bar or other non-window chrome elements (i.e. everything outside of the current loaded page). Because of this, the extension makes use of a lower level key input capture (at the chrome application level) to catch hotkey input. Unfortunately, only a-zA-Z and 0-9 can be captured, disqualifying '\\' :(

#### If your keys are already bound (shouldn't be by default), you will need to re-bind them in your chrome extensions options page (scroll to the bottom)
