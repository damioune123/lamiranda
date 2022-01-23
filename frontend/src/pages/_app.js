import App from 'next/app';
import { END } from 'redux-saga';
import { wrapper } from '../redux-saga/createStore';

class WrappedApp extends App {
  static getInitialProps = wrapper.getInitialAppProps(
    (store) => async (context) => {
      // 1. Wait for all page actions to dispatch
      const pageProps = {
        // https://nextjs.org/docs/advanced-features/custom-app#caveats
        ...(await App.getInitialProps(context)).pageProps,
      };

      // 2. Stop the saga if on server
      if (context.ctx.req) {
        store.dispatch(END);
        await store.sagaTask.toPromise();
      }

      // 3. Return props
      return { pageProps };
    }
  );

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(WrappedApp);
