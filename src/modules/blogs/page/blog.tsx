import React from "react";
import { BlogSkeleton, BlogCard } from "../components/";

export const Blog: React.FC = () => {
  let fetched = false;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [blogs, setBlogs] = React.useState<MediumFeedItem[]>([]);

  const fetchblogs = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@w.xy020203",
    );
    const data = await response.json();
    fetched = true;
    setBlogs(data.items);
    setIsLoading(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (!fetched) setIsLoading(true); // delay skeleton for faster preceived load
    }, 500);

    fetchblogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // only run on mount

  return (
    <div className="flex flex-col gap-y-24 items-center mx-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl justify-self-start max-w-2xl w-full">
        Blogs
      </h1>

      {isLoading
        ? new Array(3).fill(0).map((_, index) => <BlogSkeleton key={index} />)
        : blogs.map((item) => <BlogCard key={item.guid} item={item} />)}
    </div>
  );
};

export default Blog;
