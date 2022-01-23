import { wrapper } from '../redux-saga/createStore';
import { END } from 'redux-saga';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import { getGalleriesAction } from '../redux-saga/actions';

export default function Index() {
  return (
    <div className="container">
      <Sidebar />
      <div id="ct-js-wrapper" className="ct-pageWrapper">
        <Header />
      </div>
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  ({ dispatch, sagaTask }) =>
    async () => {
      dispatch(getGalleriesAction());
      dispatch(END);
      await sagaTask.toPromise();
    }
);
