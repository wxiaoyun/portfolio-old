import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { blogSlice, fetchMediumData } from "@/store/slices";
import { BlogSkeleton, BlogCard, BlogMe } from "../components/";
import { Centred } from "@/modules";
import { slideVariants } from "@/lib/variants";
import { slideTransition } from "@/lib/transition";
import { blog } from "@/constants";

export const Blog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogState = useSelector((state: RootState) => state.blog);
  const routeState = useSelector((state: RootState) => state.route);

  React.useEffect(() => {
    if (blogState.data) return; // already fetched data

    const timeoutID = setTimeout(() => {
      // delay skeleton for faster preceived load
      if (blogState.fetchState === "idle")
        dispatch(blogSlice.actions.setFetchState("loading"));
    }, 300);

    dispatch(fetchMediumData());

    return () => clearTimeout(timeoutID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // only run on mount

  return (
    <motion.div
      className="flex flex-col  items-center mx-6 w-full"
      variants={slideVariants}
      custom={routeState.direction}
      initial="enter"
      animate="center"
      exit="exit"
      transition={slideTransition}
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl self-start">
        {blog.title}
      </h1>

      <AnimatePresence initial={false}>
        {/* Loading Skeleton */}
        {blogState.fetchState === "loading" &&
          new Array(3).fill(0).map((_, index) => <BlogSkeleton key={index} />)}

        {/* Failed to fetch data */}
        {blogState.fetchState === "failed" && (
          <Centred>
            <p className="text-gray-500 text-center">Failed to fetch blogs</p>
          </Centred>
        )}

        {/* Successfully fetched data */}
        {blogState.fetchState === "succeeded" && (
          <>
            <BlogMe feed={blogState.data!.feed} />

            {blogState.data!.items.map((item) => (
              <BlogCard key={item.guid} item={item} />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Blog;
