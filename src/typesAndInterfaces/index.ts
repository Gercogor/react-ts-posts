import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type AppDispatch = ThunkDispatch<any, any, AnyAction>

export type dataObj = {
    userId: number,
    id: number,
    title: string,
    body: string,
};

export type onPageChange = {
    selected: number,
}

export type action = {
    type: string,
    payload?: any,
};

export interface TableDataRowProps {
    postId: number | undefined;
    title: string | undefined;
    body: string | undefined;
}

export interface ITable {
    data: Array<dataObj>;
}