import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import { AnimatePresence, motion } from "framer-motion";
import { FETCH_MEDIUM_FEED_URL, blog } from "@/constants";
import { Centred } from "@/modules";
import { slideVariants } from "@/lib/variants";
import { slideTransition } from "@/lib/transition";
import { useDirection } from "@/hooks";
import { BlogSkeleton, BlogCard, BlogMe } from "..";

const fetchBlogs = async () => {
  const [response] = await Promise.all([
    fetch(FETCH_MEDIUM_FEED_URL),
    new Promise((resolve) => setTimeout(resolve, 2200)),
  ]); // Simulate loading
  const data = await response.json();
  return data as MediumData;
}

export const Blog: React.FC = () => {
  const { pathname } = useLocation()
  const direction = useDirection(pathname);

  const blogQuery = useQuery({
    queryKey: ['blog'],
    queryFn: fetchBlogs,
  })

  return (
    <motion.div
      className="flex flex-col  items-center px-6 w-full"
      variants={slideVariants}
      custom={direction}
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
        {blogQuery.isLoading &&
          new Array(3).fill(0).map((_, index) => <BlogSkeleton key={index} />)}

        {/* Failed to fetch data */}
        {blogQuery.isError && (
          <Centred>
            <p className="text-gray-500 text-center">Failed to fetch blogs</p>
          </Centred>
        )}

        {/* Successfully fetched data */}
        {blogQuery.isSuccess && (
          <>
            <BlogMe feed={blogQuery.data.feed} />

            {blogQuery.data.items.map((item) => (
              <BlogCard key={item.guid} item={item} />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Blog;
