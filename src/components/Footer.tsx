import config from "../content/config/config.json";
import { ContactWidget } from "./ContactWidget";
const today = new Date();

export const Footer = () => {
    return (
        <footer>
            &copy; {today.getFullYear()}
            {config.seo.siteOwner}. All rights reserved.
            <ContactWidget />
        </footer>
    )
}
