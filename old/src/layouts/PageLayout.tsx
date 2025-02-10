import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";
import { loadEnvConfig } from "@next/env";

const isDevelopment = process.env.NODE_ENV === "development";

/*const options = await client.queries.options({ relativePath: "index.json" });
const title = options.data.options.site_title;*/

const title = "RAB Website";

export default function PageLayout({ children }) {
	/*return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <title>{title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={isDevelopment ? "dev" : ""}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )*/
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
