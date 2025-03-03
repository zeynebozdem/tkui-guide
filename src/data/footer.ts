import { IMenuItem } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
} = {
    subheading: "Empowering businesses with cutting-edge financial technology solutions.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Components",
            url: "#components"
        },
        {
            text: "Faqs",
            url: "#faqs"
        }
    ],
    email: 'WEBFRONTENDTEAM@THY.COM',
}