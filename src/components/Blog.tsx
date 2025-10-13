import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/images/blog/64da632dcb0668320f7df26c_Rectangle 42083 (1).svg",
      date: "August 14, 2023",
      title: "Need haveing About Elbail Coveraged program Benefits",
      size: "small"
    },
    {
      id: 2,
      image: "/images/blog/64da63680a76cc423a0a902f_Rectangle 42083 (3).svg",
      date: "August 14, 2023", 
      title: "Need haveing About Elbail Coveraged program Benefits",
      size: "small"
    },
    {
      id: 3,
      image: "/images/blog/64da63540da6f02bcdaffe7a_Rectangle 42083 (2).svg",
      date: "August 14, 2023",
      title: "Need haveing About Elbail Coveraged program Benefits", 
      size: "small"
    },
    {
      id: 4,
      image: "/images/blog/64da638238b492f0d396c51e_Rectangle 42083 (4).svg",
      date: "August 14, 2023",
      title: "Need haveing About Elbail Coveraged program Benefits",
      size: "large"
    }
  ];

  const smallPosts = blogPosts.filter(post => post.size === "small");
  const largePost = blogPosts.find(post => post.size === "large");

  return (
    <section id="blogs" className="bg-white py-16 lg:py-24 scroll-mt-24">
      <div className="max-w-[1450] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
            Name Change Resources & Guides

          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Small Posts */}
          <div className="space-y-8">
            {smallPosts.map((post) => (
              <div key={post.id} className="flex gap-6 group cursor-pointer">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-24 lg:w-40 lg:h-32 rounded-xl overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={160}
                      height={128}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-2">
                    {post.date}
                  </p>
                  <h3 className="text-lg lg:text-xl font-bold text-black leading-tight group-hover:text-gray-700 transition-colors duration-200">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Large Post */}
          {largePost && (
            <div className="group cursor-pointer">
              {/* Large Image */}
              <div className="w-full h-64 lg:h-80 rounded-xl overflow-hidden mb-6">
                <Image
                  src={largePost.image}
                  alt={largePost.title}
                  width={500}
                  height={320}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-gray-500 text-sm mb-3">
                  {largePost.date}
                </p>
                <h3 className="text-xl lg:text-2xl font-bold text-black leading-tight mb-6 group-hover:text-gray-700 transition-colors duration-200">
                  {largePost.title}
                </h3>
                
                {/* Read Blog Button */}
                <Link href="/#contact">
                  <button className="bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm">
                    Read blog
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
