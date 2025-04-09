  import { useEffect } from "react";

  function MyApp({ Component, pageProps }) {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "mkCA4neBR-ERcWq2nzTYD"; // Reemplaza con tu ID de Chatbase
      script.async = true;
      document.body.appendChild(script);
    }, []);

    return <Component {...pageProps} />;
  }

  export default MyApp;
