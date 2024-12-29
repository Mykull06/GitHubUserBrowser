# GitHub User Browser

## Description

The **GitHub User Browser** is a web application that allows users to search for GitHub profiles, view detailed information about users (such as location, email, company, bio), and store their favorite candidates. It uses GitHub's public API to search for users and display relevant details in an easy-to-navigate interface.

This application is useful for developers, recruiters, or anyone interested in exploring GitHub profiles based on specific search criteria.

## Features

- **Search for GitHub Users**: Search for GitHub users by username and see detailed information.
- **View Random GitHub Users**: Fetch random user profiles with a single click.
- **Save and Manage Candidates**: Save favorite users to a list and manage them easily.
- **User-Friendly Interface**: View users in a card format with profile images, bios, and contact details.
- **Responsive Design**: Fully responsive and works well on both desktop and mobile devices.

## How to Use

### Steps to Run Locally

1. **Clone the Repository**:
First, clone the repository to your local machine.

Install Dependencies: Navigate to the project directory and install the necessary dependencies.

cd your-repository-name
npm install
Start the Development Server: After the dependencies are installed, you can start the development server.


npm run dev

This will start the app and open it in your default browser at http://localhost:.

Search for GitHub Users: Use the search bar at the top to search for users by their GitHub usernames.

View Random Users: If no search query is entered, a random GitHub user will be displayed.

Save and Manage Candidates: Click the + button to save a user to your candidate list and - to skip and move to the next user.

How to Use (Video)
[Insert video here: A screencast or tutorial video that demonstrates how to use the application.]

You can create a screen recording using tools like Loom or OBS Studio, then embed the video here by using:


## APIs and Tools Used
GitHub API:
GitHub User Search API: This API allows us to search for GitHub users based on a query and fetch data like login, bio, email, location, and more.
Endpoint: https://api.github.com/search/users?q={query}
Example: https://api.github.com/search/users?q=yoursearchterm
GitHub Random User API:

To fetch random users, we use GitHub's public user endpoint.
Endpoint: https://api.github.com/users?per_page=1
React:

React is used for building the user interface and managing the state of the application.
Version used: React 18
React Router:

Used for client-side routing to allow navigating between different views (e.g., candidate search, saved candidates).
GitHub LFS (Large File Storage):

If you are using large files (e.g., images or assets) in this project, Git LFS may be used to manage these large files efficiently.
CSS:

The project uses custom CSS for styling, with a responsive layout that adapts to different screen sizes.
LocalStorage:

The application uses LocalStorage to persist saved candidates between page refreshes.
Additional Information

Rate Limiting: GitHub's API has rate limits. If you are hitting the limit, you may need to wait or authenticate using a GitHub token to increase the rate limit.

Authentication: In case you need to fetch more data or avoid rate-limiting, we recommend using GitHub personal access tokens to authenticate requests to the GitHub API.

GitHub Push Protection: Be mindful of GitHub's push protection to avoid pushing sensitive data or secrets to public repositories. Always keep sensitive data (such as API keys) out of your commits.

## Troubleshooting
Issue with pushing changes: If you see an error like "Push rejected due to secret scanning," ensure you are not pushing sensitive information such as tokens or passwords. You can follow the instructions to remove these from your commit.

Fetching random users: If fetching random users is not working, ensure that your network connection is stable and GitHub's API isn't experiencing issues.

## Contributing
If you'd like to contribute to the project, feel free to fork the repository, make changes, and submit a pull request. We welcome contributions to improve the application.

Fork the repository
Create a new branch
Make your changes
Push your changes to your fork
Submit a pull request
