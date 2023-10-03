import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { blogSlice, fetchMediumData } from "@/store/slices";
import { BlogSkeleton, BlogCard, BlogMe } from "../components/";

export const Blog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogState = useSelector((state: RootState) => state.blog);

  React.useEffect(() => {
    const timeoutID = setTimeout(() => {
      // delay skeleton for faster preceived load
      if (!blogState.hasFetched) dispatch(blogSlice.actions.setLoading(true));
    }, 500);

    dispatch(fetchMediumData());

    return () => clearTimeout(timeoutID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // only run on mount

  return (
    <div className="flex flex-col gap-y-12 items-center mx-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl justify-self-start max-w-2xl w-full">
        Blogs
      </h1>

      {/* Loading Skeleton */}
      {blogState.isLoading ? (
        new Array(3).fill(0).map((_, index) => <BlogSkeleton key={index} />)
      ) : (
        <>
          <BlogMe feed={blogState.data!.feed} />
          {blogState.data!.items.map((item) => (
            <BlogCard key={item.guid} item={item} />
          ))}
        </>
      )}

      {/* Finished loading yet data is still not fetched */}
      {!blogState.isLoading && !blogState.hasFetched && (
        <p className="text-gray-500 text-center">Failed to fetch blogs</p>
      )}
    </div>
  );
};

export default Blog;
