const posts = [
  {
    image: "/images/post-1.jpg",
    title: "Téléconsultation : Comment bien préparer votre rendez-vous en ligne",
    link: "/actualites",
    description: "Découvrez nos conseils pratiques pour profiter au mieux de vos consultations médicales à distance et optimiser votre suivi santé.",
    delay: "0s"
  },
  {
    image: "/images/post-2.jpg",
    title: "Pharmacies de garde : Comment les trouver rapidement ?",
    link: "/actualites",
    description: "Apprenez à localiser facilement les pharmacies de garde près de chez vous grâce à notre plateforme et nos outils de recherche.",
    delay: "0.2s"
  },
  {
    image: "/images/post-3.jpg",
    title: "Résultats d'analyses : Comprendre vos examens médicaux",
    link: "/actualites",
    description: "Un guide complet pour vous aider à déchiffrer vos résultats de laboratoire et mieux communiquer avec votre médecin.",
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
              <h3 className="wow fadeInUp">Actualités</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Nos derniers articles</h2>
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
                    <a href={post.link} className="readmore-btn">Lire plus</a>
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