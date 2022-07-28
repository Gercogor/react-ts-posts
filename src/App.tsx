import React, { useEffect } from 'react';
import styles from './App.module.css';
import Table from './components/table/Table';
import Input from './components/search/Input';
import { setPostsThunk } from './store/postsReducer';
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from 'react-paginate';
import Loader from './components/loader/Loader';
import { AppDispatch, dataObj,onPageChange } from './typesAndInterfaces';
import { usePosts } from './hooks/usePosts';

function App() {
  const dispatch: AppDispatch = useDispatch();

  const isFetching: boolean = useSelector((state: any) => state.posts.isFetching)
  const posts: Array<dataObj> = useSelector((state: any) => state.posts.posts)
  const pageCount: number = useSelector((state: any) => state.posts.pageCount)
  const postsPerPage: number = useSelector((state: any) => state.posts.postsPerPage)
  const query: string = useSelector((state: any) => state.posts.search)
  const [sort, direction]: [string, boolean] = useSelector((state: any) => state.posts.sort)

  const sortedAndSearchedPosts = usePosts(posts, sort, direction, query)

  useEffect(() => {
    window.history.replaceState({}, '', `posts?page=1`);
    dispatch(setPostsThunk(1, postsPerPage));
  }, [dispatch, postsPerPage])

  const onPageChange: (page: onPageChange) => void = (page) => {
    window.history.replaceState({}, '', `posts?page=${page.selected + 1}`);
    dispatch(setPostsThunk(page.selected + 1, postsPerPage));
  }

  return (
    <div className={styles.App}>
      <Input />
      {
        isFetching
          ? <Loader />
          : <Table data={sortedAndSearchedPosts} />
      }
      <ReactPaginate
        className={styles.pagination}
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        nextLabel='Далее'
        nextClassName={styles.nextButton}
        previousLabel='Назад'
        previousClassName={styles.prevButton}
        pageClassName={styles.pages}
        activeLinkClassName={styles.activeLinkClassName}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default App; 
