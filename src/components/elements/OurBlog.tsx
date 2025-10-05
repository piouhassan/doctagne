const posts = [
  {
    image: "/images/post-1.jpg",
    title: "What to Expect During Detox: A First-Timer's Guide",
    link: "/blog-single.html",
    description: "Learn about the different phases of recovery and what to expect during each step of your journey toward lasting sobriety.",
    delay: "0s"
  },
  {
    image: "/images/post-2.jpg",
    title: "Nutrition and Recovery: Healing from the Inside Out",
    link: "/blog-single.html",
    description: "Discover practical techniques to maintain mental health and build resilience in your everyday routine.",
    delay: "0.2s"
  },
  {
    image: "/images/post-3.jpg",
    title: "How Group Therapy Builds Connection and Accountability",
    link: "/blog-single.html",
    description: "A comprehensive guide for families navigating the challenges and rewards of supporting a loved one's recovery journey.",
    delay: "0.4s"
  }
];

const OurBlog = () => {
  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Latest blog</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Explore our latest insights on addiction recovery</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {posts.map((post, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className={`post-item wow fadeInUp`} data-wow-delay={post.delay}>
                <div className="post-featured-image">
                  <a href={post.link} data-cursor-text="View">
                    <figure className="image-anime">
                      <img src={post.image} alt={post.title} />
                    </figure>
                  </a>
                </div>
                <div className="post-item-body">
                  <div className="post-item-content">
                    <h2><a href={post.link}>{post.title}</a></h2>
                  </div>
                  <div className="post-item-btn">
                    <a href={post.link} className="readmore-btn">read more</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBlog;