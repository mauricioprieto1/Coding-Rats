function Loading({ isLoading }) {
    return isLoading ? (
      <section id="loading">
        <p>Loading...</p>
      </section>
    ) : null;
  }
  
  export default Loading;
  