import { ThemeProvider } from 'next-themes'
import { Provider } from 'next-auth/client'
import { themes } from '../components/ThemeSwitch'
import '../styles/global.css'
import '../styles/prism-theme-synthwave.css'
import '../styles/recursive-font.css'

// export const reportWebVitals = (metric) => console.log(metric)

export default function App({ Component, pageProps }) {
	const themeNames = themes.map(t => t.name)
	return (
		<ThemeProvider attribute='class' themes={themeNames}>
			<Provider
				options={{ keepAlive: 0, clientMaxAge: 0 }}
				session={pageProps.session}>
				<Component {...pageProps} />
			</Provider>
		</ThemeProvider>
	)
}
