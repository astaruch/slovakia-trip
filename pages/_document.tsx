import Document, {
  DocumentContext,
  Html,
  Head,
  NextScript,
  Main,
} from "next/document";
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: Averta, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: white;
    font-size: 1rem;
}

p {
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
}

a {
  color: inherit;
  text-decoration: none;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
}

* {
  box-sizing: border-box;
}

#__next {
background: #161616;
}

div {
transition: opacity 0.2s ease-in-out;
}

.slick-slide {
opacity: 0.52;
padding: 0 1rem;
}

.slick-current {
opacity: 1;
}

.slick-dots {
  > li > button:before {
    color: white;
  }
  > li.slick-active > button:before {
    color: white;
  }
}

`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyle />
                <App {...props} />
              </>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/public/fonts/Averta-Regular.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/public/fonts/Averta-Bold.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/public/fonts/Averta-Light.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/public/fonts/Averta-Black.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
