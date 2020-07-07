export interface Content {
    header: Header;
    homeCTA: HomeCTA;
    footer: Footer;
}

export interface Footer {
    heading: string;
    ctaButtons: Array<CTAButtons>;
    logo: string;
    address: string;
    email: string;
    socialMedia: SocialMedia;
    company: CompanyLinks;
}

export interface CompanyLinks {
    link: string;
    url: string;
}

export interface SocialMedia {
    name: string;
    icon: string;
    url: string;
} 

export interface HomeCTA {
    mainMessage: string;
    subMessage: string;
    createListingButton: CTAButtons;
    valuationButton: CTAButtons;
    searchButton: CTAButtons;
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
    imageLeft: boolean;
    imageRight: boolean;
    imageUrl: string;
    ctaButtonText: string;
    ctaButtonUrl: string;
    ctaButtonSubText: string;
}

export interface List {
    listTitle: string;
    listIcon: string;
}

