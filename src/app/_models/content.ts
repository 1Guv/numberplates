export interface Content {
    header: Header;
    homeCTA: HomeCTA;
    footer: Footer;
    createListing: CreateListing;
}

export interface CreateListing {
    heading: string;
    placeholderPlate: string;
    plateFree: boolean;
    platePremuim: boolean;
    stepperLabels: Array<StepperLabels>;

    formCards: Array<FormCards>;
    meanings: FormSetup;
    ethnicities: FormSetup;
    costs: FormSetup;
    boughtFrom: FormSetup;
    plateType: FormSetup;

    formCardsTwo: Array<FormCards>;
    names: FormSetup;
    contactDetails: FormSetup;
    address: FormSetup;

    formCardsThree: Array<FormCards>;
    car: FormSetup;
    carManufacturers: FormSetup;
    carModels: FormSetup;
    carInsurance: FormSetup;
    houseInsurance: FormSetup;
    mobile: FormSetup;
    electricCar: FormSetup;

    premium: Section;
    premiumCarouselSectionContent: Section;
    premiumFBScreenShotsCarousel: Carousel;
}

export interface Carousel {
    bgColour: string;
    containerMaxWidth: string;
    interval: number;
    images: Array<CarouselImage>;
}

export interface CarouselImage {
    src: string;
    alt: string;
}

export interface Footer {
    heading: string;
    ctaButtons: Array<CTAButtons>;
    logo: string;
    address: string;
    email: string;
    socialMedia: SocialMedia;
    company: Array<CompanyLinks>;
    help: Array<CompanyLinks>;
}

export interface FormSetup {
    formGroup: string;
    formGroupName: string;
    selectTitle: string;
    inputFields: Array<InputFields>
}

export interface InputFields {
    name: string;
    required?: boolean
}

export interface FormCards {
    title: string;
    subTitle: string;
    footer: string;
    bgColour: string;
}

export interface StepperLabels {
    label: string;
}

export interface CompanyLinks {
    name: string;
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

