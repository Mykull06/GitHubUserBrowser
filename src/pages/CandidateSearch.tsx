import React, { useState, useEffect } from "react";

// Define the User interface for type-checking
interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  location: string;
  email: string;
  company: string;
  bio: string;
}

const CandidateSearch: React.FC = () => {
  const [query, setQuery] = useState(""); // For the search query
  const [users, setUsers] = useState<User[]>([]); // For storing users based on search
  const [randomUser, setRandomUser] = useState<User | null>(null); // For storing random user
  const [error, setError] = useState<string | null>(null); // For handling errors

  // Fetch one random user on page load (when no search has been made)
  useEffect(() => {
    if (!query) {
      fetchRandomUser(); // Fetch random user only if there's no search query
    }
  }, [query]);

  // Fetch a random user from GitHub
  const fetchRandomUser = async () => {
    try {
      // Generate a random user ID
      const randomId = Math.floor(Math.random() * 100000) + 1; // Random user ID between 1 and 1000
      const response = await fetch(`https://api.github.com/users?since=${randomId}&per_page=1`, {
        headers: {
          Authorization: `YOUR_GITHUB_TOKEN_HERE`, // Optional: For better rate limiting
        },
      });

      // Check for rate-limiting or other errors
      if (response.status === 403) {
        setError("Rate limit exceeded. Please try again later.");
        return;
      }

      const data = await response.json();
      setRandomUser(data[0]); // Set the random user
    } catch (error) {
      console.error("Error fetching random user", error);
      setError("Failed to fetch a random user.");
    }
  };

  // Handle the search functionality for the username
  const handleSearch = async () => {
    if (!query) {
      return; // Prevent empty search
    }
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      const data = await response.json();
      setUsers(data.items || []); // Update users based on the search
      setRandomUser(null); // Remove the random user when search is used
    } catch (error) {
      console.error("Error searching users", error);
      setError("Failed to fetch users.");
    }
  };

  // Save the user to localStorage
  const saveCandidate = (user: User) => {
    const savedCandidates: User[] = JSON.parse(
      localStorage.getItem("savedCandidates") || "[]"
    );
    localStorage.setItem(
      "savedCandidates",
      JSON.stringify([...savedCandidates, user])
    );
    alert(`${user.login} has been saved!`);
  };

  // Skip the current user (move to next one)
  const skipCandidate = () => {
    if (query) {
      // If there’s a search query, just clear the search results
      setUsers([]);
    } else {
      // If there's no search query, fetch a new random user
      fetchRandomUser();
    }
  };

  return (
    <div className="container">
      <h1>Candidate Search</h1>

      {/* Display error if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for candidates..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* If there's a random user, display that user */}
      {randomUser && !query && (
        <div className="candidate-card">
          <h2>Random Candidate</h2>
          <img
            src={randomUser.avatar_url}
            alt={`${randomUser.login}'s avatar`}
            width="100"
          />
          <p>{randomUser.login}</p>
          <p>{randomUser.location || "Location: N/A"}</p>
          <p>{randomUser.email || "Email: N/A"}</p>
          <p>{randomUser.company || "Company: N/A"}</p>
          <p>{randomUser.bio || "Bio: N/A"}</p>
          <button onClick={() => saveCandidate(randomUser)}>+</button>
          <button onClick={skipCandidate}>-</button>
        </div>
      )}

      {/* If a search was performed, display the search results */}
      {users.length > 0 && query && (
        <div className="search-results">
          <h2>Search Results</h2>
          <div className="candidate-list">
            {users.map((user) => (
              <div key={user.id} className="candidate-item">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  width="50"
                />
                <div className="candidate-info">
                  <p>{user.login}</p>
                  <p>{user.location || "Location: N/A"}</p>
                  <p>{user.email || "Email: N/A"}</p>
                  <p>{user.company || "Company: N/A"}</p>
                  <p>{user.bio || "Bio: N/A"}</p>
                </div>
                <div className="buttons">
                  <button onClick={() => saveCandidate(user)}>+</button>
                  <button onClick={skipCandidate}>-</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* If no search results are found */}
      {users.length === 0 && query && <p>No candidates found.</p>}
    </div>
  );
};

export default CandidateSearch;
