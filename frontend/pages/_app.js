import App from 'next/app';
import { END } from 'redux-saga';
import { wrapper } from "../src/store/createStore";

import '../assets/css/bootstrap.css';
import '../assets/plugins/owl/owl.carousel.css';
import '../assets/plugins/owl/owl.theme.css';
import '../assets/plugins/owl/owl.transitions.css';
import '../assets/js/fullcalendar/fullcalendar.css';
import '../assets/js/select2/select2.css';
import '../assets/js/datapicker/datepicker.css';
import '../assets/fonts/css/weather-icons.css';
import '../assets/css/style.css';
import '../assets/css/motives/beach.css';
import '../assets/scss/style.scss';

class WrappedApp extends App {
  static getInitialProps = wrapper.getInitialAppProps(store => async context => {
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
  });

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(WrappedApp);