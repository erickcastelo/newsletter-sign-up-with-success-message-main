import "./MainContent.scss";

export const MainContent = () => {
  return (
    <section className="main-content margin-content">
      <h1 className="title">Stay updated</h1>
      <p className="sub-title">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="product-list">
        <li>Product discovery and building what matters</li>
        <li>Measuting to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
    </section>
  );
};
