# Internet Archive Grayjay Plugin

A high-quality Grayjay source plugin for **Internet Archive (archive.org)** focused on video content.

## Features

- **Home Feed**: Curated movies and documentaries.
- **Search**: Advanced search for videos.
- **Channels**: Browse collections and user uploads as channels.
- **Streaming**: Direct playable URLs for high-quality MP4/WebM files.

## Development

1. `npm install`
2. `npm run build`
3. `npm run dev` to start a local server.

## Installation in Grayjay

### Quick Install (Latest Version)
1. Enable **Developer Mode** in Grayjay (Settings -> About -> Tap version multiple times).
2. Go to **Sources** -> **Add Source** -> **Import from URL**.
3. Enter the following URL:
   `https://raw.githubusercontent.com/swankwc/grayjay-plugin-spotify-to-modify/main/InternetArchiveConfig.json`

### Local Development Install
1. Run `npm run build` and `npm run dev` to start a local server.
2. In Grayjay, add a new source using your local IP:
   `http://<your-ip>:8080/build/InternetArchiveConfig.json`

## Signing

Use `sign.sh` to sign the plugin for production.
