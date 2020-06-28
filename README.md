# First Chrome Extension

I wanted to make this more than just a literal following of the Chrome
Developers [Getting Started
Tutorial](https://developer.chrome.com/extensions/getstarted) for Chrome
Extensions, but having never delved into Chrome Extensions, I settled for
getting something at all working. There's a fair amount of flexibility in the
extension and Chrome APIs that I'll need to get familiar with before this'll do
anything that's not just exactly the Getting Started tutorial.

## What's it do?

It allows you to change the background color of pages served from
developer.chrome.com. There are four choices of color available in the
extension options.

Yeah, that's all it does.

## So what's the point?

Well, fundamentals of Chrome extensions are covered, along with a simple use
case. The extension manifest (`manifest.json`) is introduced as the entry point
for extensions, describing what the extension is, enumerating required
permissions, and specifying entry points like background scripts, popup pages,
and option pages.

The **background script** is run automatically when the extension is loaded.
Here, this is used to initialize storage that the extension will use, and to
set up rules for when the extension should be active.

The **popup** is the extension user interface, which appears when the extension
icon is clicked. Here this just shows a button with color that you can elect to
turn the background of a `developer.chrome.com` page to.

The **options** page is accessible through a right-click on the extension icon,
and here allows the user to change the color that pages on
`developer.chrome.com` can be changed to.

## How could this be enhanced?

Allow a second click to restore the page color to the original color would be
kind of interesting, adding a bit more statefulness to the extension.

My original intent for a first extension was to pull the currently-playing
track from [JEMP Radio](https://jempradio.com) and show it somewhere. The
current track could be stored in extension storage and shown on the popup. This
could tie in use of the
[`chrome.alarms`](https://developer.chrome.com/apps/alarms) API to schedule
periodic updates and the [Cross-Origin
XMLHttpRequest](https://developer.chrome.com/extensions/xhr) extension API to
fetch data from JEMP Radio's status API. However, this is more than I'm going
do tonight?

## How to install

First, why do you want to install this? Just kidding. I'm sure you have your
reasons.

* Clone the repository
* Navigate to [`chrome://extensions`](chrome://extensions)
  in your Chromium-based browser
* Enable developer mode Select **Load Unpacked**, and then choose
  the directory where you've cloned this repo

The extension will now be active for pages served by
[developer.chrome.com](https://developer.chrome.com). You can mess around with
the code and then click the Refresh button on the extensions page to reload the
extension. If there are errors, an **Errors** button will appear.  I
encountered some errors when changing `background.js` that were resolved by
removing the extension and reloading it fresh, so if you encounter errors on
refresh, this might be worth trying.
