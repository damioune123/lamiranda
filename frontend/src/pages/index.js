import { wrapper } from "../store/createStore";
import { getHomesAction } from "../actions";
import { END } from 'redux-saga';
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

export default function Index(){
    return (
        <div className="container">
            <Sidebar />
            <div id="ct-js-wrapper" className="ct-pageWrapper">
                <Header />
            </div>
        </div>
    );
}

export const getStaticProps = wrapper.getStaticProps(({ dispatch, sagaTask }) => async () => {
    dispatch(getHomesAction());
    dispatch(END);
    await sagaTask.toPromise();
});