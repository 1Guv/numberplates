export interface Content {
    header: Header;
    homeCTA: HomeCTA;
}

export interface HomeCTA {
    mainMessage: string;
    subMessage: string;
    createListingButton: CTAButtons;
    howItWorks: Array<Section>;
}

export interface Header {
    leftLogoUrl: string;
    middleLogoUrl: string;
    headerMenuOptions: Array<HeaderMenuOptions>;
}

export interface HeaderMenuOptions {
    name: string;
    icon: string;
    url: string;
    toolTip: string;
}

export interface CTAButtons {
    name: string;
    url: string;
}

export interface Section {
    subTitle: string;
    title: string;
    paragraph: string;
    list: Array<List>;
    imageUrl: string;
}

export interface List {
    listTitle: string;
    listIcon: string;
}

