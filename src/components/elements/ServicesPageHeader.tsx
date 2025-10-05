const ServicesPageHeader = () => {
  return (
    <div className="page-header bg-section parallaxie">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 className="text-anime-style-3" data-cursor="-opaque">Our services</h1>
              <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">services</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageHeader;
