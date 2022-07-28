import { useMemo } from "react";
import { dataObj } from "../typesAndInterfaces";

export const useSortedPosts = (posts: Array<dataObj>, sort: string, direction: boolean) => {
    const sortedPosts = useMemo(() => {
        if (sort === 'title') {
            let newPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title))
            return direction? newPosts.reverse() : newPosts;
        } else if (sort === 'body') {
            let newPosts = [...posts].sort((a, b) => a.body.localeCompare(b.body))
            return direction? newPosts.reverse() : newPosts;
        } else {
            let newPosts = [...posts].sort((a, b) => a.id - b.id)
            return direction? newPosts.reverse() : newPosts;
        }
    }, [sort, posts, direction]);
    return sortedPosts;
}

export const usePosts = (posts: Array<dataObj>, sort: string, direction: boolean, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort, direction);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])
    return sortedAndSearchedPosts;
}