import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalStyles'
import { RecoilRoot} from 'recoil';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
  <RecoilRoot> 
    <Global styles={globalStyles} />
    <Component {...pageProps} />
  </RecoilRoot>
  )
}

export default MyApp
