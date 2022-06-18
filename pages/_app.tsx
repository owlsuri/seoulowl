import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalStyles'
import { RecoilRoot} from 'recoil';
import '../styles/globals.css'
import ApolloSetting from '../src/commons/apollo';
import { AppProps } from 'next/app';
import Layout from '../src/components/commons/layout';

function MyApp({ Component, pageProps }: AppProps) {

  return(
  <RecoilRoot> 
    <ApolloSetting>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloSetting>
  </RecoilRoot>
  )
}

export default MyApp
