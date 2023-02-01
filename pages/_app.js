import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import Layout from "../components/Layout";
// import Login from "../pages/login"


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     
        <Component {...pageProps} />

        
     
    </Layout>
  );
}

export default MyApp;

