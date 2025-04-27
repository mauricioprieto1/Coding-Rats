import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Form from './Form';
import Loading from './Loading';
import Recommendations from './Recommendations';
import Message from './Message';

function App() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const fetchRecommendations = async (subject, level) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post('https://your-backend-api.com/recommend', {
        subject,
        level
      });

      if (response.data.books && response.data.books.length > 0) {
        setBooks(response.data.books);
        setMessage('Recommendations fetched successfully!');
      } else {
        setMessage('No recommendations found.');
      }
    } catch (err) {
      setError('Error occurred while fetching recommendations.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Teacher's Book Recommendation</h1>
      </header>
      <main>
        <Form onSubmit={fetchRecommendations} />
        <Loading isLoading={loading} />
        <Message message={message} error={error} />
        <Recommendations books={books} />
      </main>
    </div>
  );
}

export default App;
