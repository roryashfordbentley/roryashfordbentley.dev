import "@styles/tokens/colours.css";
import "@styles/tokens/fonts.css";
import "@styles/tokens/spacing.css";
import "@styles/tokens/media-queries.css";
import "@styles/tokens/border-radius.css";
import "@styles/tokens/utility.css";
import "@styles/reset.css";
import "@styles/global.css";
import "@styles/typography.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${inter.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</>
	);
}
