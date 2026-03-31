export type Settings = {}

export type State = {}

export type InternetArchiveSource = Required<Omit<Source<
    { readonly [key: string]: string },
    string,
    typeof Type.Feed.Mixed,
    typeof Type.Feed.Mixed,
    typeof Type.Feed.Mixed,
    Settings
>,
    "searchSuggestions"
    | "getComments"
    | "getSubComments"
    | "getSearchChannelContentsCapabilities"
    | "getLiveChatWindow"
    | "searchChannelContents"
    | "getContentRecommendations"
    | "getPlaybackTracker"
    | "getUserPlaylists"
    | "getUserSubscriptions"
    | "getPlaylist"
    | "searchPlaylists"
    | "getChannelPlaylists"
    | "isPlaylistUrl"
    | "getContentDetails"
    | "isContentDetailsUrl"
    | "getVideoDetails"
>> & {
    getContentDetails?: (url: string) => PlatformVideoDetails;
    isContentDetailsUrl: (url: string) => boolean;
    getVideoDetails: (url: string) => PlatformVideoDetails;
}

export interface IASearchResponse {
    response: {
        numFound: number;
        start: number;
        docs: IADoc[];
    }
}

export interface IADoc {
    identifier: string;
    title?: string;
    description?: string;
    mediatype: string;
    collection?: string[];
    creator?: string[];
    date?: string;
    runtime?: string;
}

export interface IAMetadataResponse {
    created: number;
    d1: string;
    d2: string;
    dir: string;
    files: IAFile[];
    files_count: number;
    item_last_updated: number;
    metadata: IAMetadata;
    server: string;
    uniq: number;
    workable_servers: string[];
}

export interface IAFile {
    name: string;
    source: string;
    format: string;
    size?: string;
    mtime?: string;
    md5?: string;
    crc32?: string;
    sha1?: string;
    height?: string;
    width?: string;
    length?: string;
}

export interface IAMetadata {
    identifier: string;
    title?: string;
    description?: string;
    mediatype: string;
    collection?: string[];
    creator?: string | string[];
    date?: string;
    uploader?: string;
    addeddate?: string;
    publicdate?: string;
    runtime?: string;
}
