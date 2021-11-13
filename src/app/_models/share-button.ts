export interface Share {
    title?: string;
    text?: string;
    url?: string;
}

export interface ExtendNavigator extends Navigator {
    share: (share: Share) => Promise<void>;
}

export interface ExtendWindow extends Window {
    navigator: ExtendNavigator;
}
