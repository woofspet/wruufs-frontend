import "./AvailableOn.css";

const AvailableOn = () => {
  const AMAZON_URL = `https://www.amazon.in/s?k=${import.meta.env.VITE_AMAZON_STORE_URL}`;
  const FLIPKART_URL = `https://tinyurl.com/${import.meta.env.VITE_FLIPKART_STORE_URL}`;

  return (
    <section className="available-section">
      <p className="available-text">Products Available On</p>

      <div className="available-logos">
        <a
          href={AMAZON_URL}
          target="_blank"
          rel="noreferrer"
          className="logo-circle"
          aria-label="Amazon Store"
        >
          <img src="/ecommerce/amazon.png" alt="Amazon" />
        </a>

        <a
          href={FLIPKART_URL}
          target="_blank"
          rel="noreferrer"
          className="logo-circle"
          aria-label="Flipkart Store"
        >
          <img src="/ecommerce/flipkart.png" alt="Flipkart" />
        </a>
      </div>
    </section>
  );
};

export default AvailableOn;
