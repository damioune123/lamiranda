import { wrapper } from "../src/store/createStore";
import { getHomesAction } from "../src/actions";
import { END } from 'redux-saga';
import Sidebar from "../src/components/Sidebar/Sidebar";
import Header from "../src/components/Header/Header";

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