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

### Quick Install (Official Release)
1. Enable **Developer Mode** in Grayjay (Settings -> About -> Tap version multiple times).
2. Go to **Sources** -> **Add Source** -> **Import from URL**.
3. Enter the following URL:
   `https://swankwc.github.io/grayjay-plugin-spotify-to-modify/InternetArchiveConfig.json`

### Testing/Dev Install
You can also import directly from the raw GitHub URL:
`https://raw.githubusercontent.com/swankwc/grayjay-plugin-spotify-to-modify/main/InternetArchiveConfig.json`

### Local Development
1. Run `npm install` then `npm run build`.
2. Start the dev server: `npm run dev`.
3. In Grayjay, add a source using your local IP:
   `http://<your-dev-machine-ip>:8080/build/InternetArchiveConfig.json`

## Signing the Plugin

To ensure integrity and allow easy updates in Grayjay, you should sign your plugin.

1. **Generate RSA Keypair**:
   ```bash
   openssl genrsa -out id_rsa 2048
   ```
   *(Ensure it's in PEM format, which is the default for this command)*

2. **Sign the Script**:
   Run the signing script, passing the path to the compiled JS and the config file:
   ```bash
   sh sign.sh build/InternetArchiveScript.js InternetArchiveConfig.json
   ```
   This will update `InternetArchiveConfig.json` with the `scriptSignature` and `scriptPublicKey`.

3. **Deploy**:
   Commit the signed `InternetArchiveConfig.json` and the built `build/InternetArchiveScript.js`.
