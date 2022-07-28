import axios from "axios";
import { action } from "../typesAndInterfaces";


const SET_POSTS = "SET_POSTS";
const SET_SEARCH = "SET_SEARCH";
const SET_SORT = "SET_SORT";

const initialState = {
    posts: [],
    searchedPosts: [],
    isFetching: true,
    postsPerPage: 10,
    pageCount: 10,
    search: '',
    sort: ['id', false],
};

const postsReducer = (state = initialState, action: action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
                searchedPosts: action.payload,
                isFetching: false,
                pageCount: 10,
            };
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload,
            }
        case SET_SORT:
            return {
                ...state,
                sort: action.payload
            }
        default:
            return state;
    }
}

export default postsReducer;

export const setPosts = (posts: Array<object>) => ({
    type: SET_POSTS,
    payload: posts,
})

export const setSearch = (search: string) => ({
    type: SET_SEARCH,
    payload: search,
})

export const setSort = (sort: string, direction: boolean) => ({
    type: SET_SORT,
    payload: [sort, direction],
})

export const setPostsThunk = (currentPage: number, postPerPage: number) => (dispatch: any) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postPerPage}`)
        .then(response => {
            dispatch(setPosts(response.data));
        })
}