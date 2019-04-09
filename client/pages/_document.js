import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';

const { publicRuntimeConfig: { staticFolder } } = getConfig();

const Wrapper = ({ children }) => {
  return <div id="wrapper">{ children }</div>
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <link href={`${staticFolder}/styles/style.css`} rel="stylesheet" />
          {/* <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> */}
        </Head>
        <body className="custom_class">
          <Wrapper>
            <Main />
            <NextScript />
          </Wrapper>
        </body>
      </Html>
    );
  }
}

export default MyDocument