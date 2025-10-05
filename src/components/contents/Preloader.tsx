export default function Preloader() {
  return (
    <div className="preloader">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src="/images/loader.svg" alt="Loading..." />
        </div>
      </div>
    </div>
  );
}