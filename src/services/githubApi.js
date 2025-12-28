const GITHUB_USERNAME = 'ughrima';

export const fetchGitHubProfile = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error('Failed to fetch GitHub profile');
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
};

export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
    if (!response.ok) throw new Error('Failed to fetch GitHub repos');
    const repos = await response.json();
    return repos.map(repo => ({
      name: repo.name,
      description: repo.description || 'No description',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      url: repo.html_url,
      updated: repo.updated_at
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

export const fetchGitHubContributions = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`);
    if (!response.ok) throw new Error('Failed to fetch GitHub contributions');
    const events = await response.json();
    return events.length;
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return 0;
  }
};

