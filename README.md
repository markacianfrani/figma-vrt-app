# Figma Visual Regression Tool

Say you wanna change a color and you want to make sure you don't break your design system. This tool will take your Figma file, scan all of your pages and create snapshots of them. After that, you can go into your file, make some changes, and run another scan. It will then diff each snapshot and alert you if there are any regressions. 

Inspired by [BackstopJS](https://github.com/garris/BackstopJS)
Built with Vue
Powered by [Pixelmatch](https://github.com/mapbox/pixelmatch)