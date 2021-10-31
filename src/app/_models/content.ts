export interface Content {
    header?: Header;
    homeCTA?: HomeCTA;
    footer?: Footer;
    createListing?: CreateListing;
    search?: Search;
}

export interface Search {
    heading: string;
    subHeading: string;
}

export interface CreateListing {
    heading: string;
    placeholderPlate: string;
    plateFree: boolean;
    platePremuim: boolean;
    stepperLabels: Array<StepperLabels>;

    formCards: Array<FormCards>;
    meanings: FormSetup;
    plate: FormSetup;
    ethnicities: FormSetup;
    costs: FormSetup;
    boughtFrom: FormSetup;
    plateType: FormSetup;

    formCardsTwo: Array<FormCards>;
    names: FormSetup;
    contactDetails: FormSetup;
    address: FormSetup;

    formCardsThree: Array<FormCards>;
    carManufacturers: FormSetup;
    carModels: FormSetup;
    carFinance: FormSetup;
    carSatisfaction: FormSetup;
    carNext: FormSetup;
    carNextModel: FormSetup;
    carMoneyNoObject: FormSetup;

    carInsurance: FormSetup;
    carInsuranceRenewalDate: FormSetupDate;
    carInsuranceMonthlyOrYearly: FormSetup;
    carInsuranceExcess: FormSetup;
    carInsuranceProviders: FormSetup;

    houseInsuranceRenewalDate: FormSetupDate;
    houseInsuranceMonthlyOrYearly: FormSetup;
    houseInsuranceProviders: FormSetup;

    mobileContractRenewalDate: FormSetupDate;
    mobileInsurance: FormSetup;
    mobileNumberDuration: FormSetup;
    mobileManufacturer: FormSetup;

    electricCar: FormSetup;
    electricCarNextVehicle: FormSetup;
    electricCarFavourite: FormSetup;
    electricCarTestDrive: FormSetup;
    electricCarWhyNot: FormSetup;

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

export interface FormSetupDate {
    formGroup: string;
    formGroupName: string;
    selectTitle: string;
    date: string;
    readOnly: boolean;
}

export interface FormSetup {
    formGroup: string;
    formGroupName: string;
    selectTitle: string;
    inputFields: Array<InputFields>;
}

export interface InputFields {
    name: string;
    required?: boolean;
    type?: string;
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
