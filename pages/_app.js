import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faHome, faSearch,faBookmark} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHome,faSearch,faBookmark)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
