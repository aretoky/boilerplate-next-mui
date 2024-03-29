import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import GlobalStyle from '@/components/helpers/GlobalStyle';
import Layout from '@/layouts/Index';
import { styleTheme } from '@/theme/styleTheme';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<RecoilRoot>
			<ThemeProvider theme={styleTheme}>
				<CssBaseline />
				<GlobalStyle />
				<Layout>
					<Component {...pageProps}></Component>
				</Layout>
			</ThemeProvider>
		</RecoilRoot>
	);
}
App.getInitialProps = async () => ({ pageProps: {} });
