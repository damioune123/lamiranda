import React from 'react';
import { wrapper } from "../src/store/createStore";
import { getHomesAction } from "../src/actions";
import { END } from 'redux-saga';
import Sidebar from "../src/components/Sidebar/Sidebar";

export default function Index(){
    return (
        <div className="container">
            <Sidebar />
        </div>
    );
}

export const getStaticProps = wrapper.getStaticProps(({ dispatch, sagaTask }) => async () => {
    dispatch(getHomesAction());
    dispatch(END);
    await sagaTask.toPromise();
});