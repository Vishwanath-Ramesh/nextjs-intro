import './styles.css'

// this file is created automatically for us by nextjs
export default function App({ Component, pageProps }) {
    console.log('env', process.env.BASE_URL)
  return <Component {...pageProps} />;
}
