const ContactMapSection = () => {
  return (
    <div className="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387178.82361127954!2d0.8736482462671321!3d8.619543584807944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf68f769c3a5c46f%3A0xe0afa7b79eb24b5d!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sfr!2stg!4v1703159000000!5m2!1sfr!2stg"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ width: '100%', height: '400px', border: 0 }}
      ></iframe>
    </div>
  );
};

export default ContactMapSection;
