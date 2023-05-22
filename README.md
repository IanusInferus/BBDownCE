# Bilibili Downloader Chrome Extension

[BBDown](https://github.com/nilaoda/BBDown) can be used to download a bilibili video. But recently bilibili restricts video resolution to 360p for non-logon users. We can specify `--cookie` to workaround this problem, but it is cumbersome to get the cookies from DevTools (F12 menu). Bilibili's cookies expire quickly and can be used for only a few hours.

This extension generates BBDown command from a Chromium-compatible browser and solves the problem.
