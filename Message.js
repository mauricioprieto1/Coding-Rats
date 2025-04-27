function Message({ message, error }) {
    return (
      <section id="message">
        {message && !error && <p id="success-message">{message}</p>}
        {error && <p id="error-message">{error}</p>}
      </section>
    );
  }
  
  export default Message;
  