function getMostActiveDevs({ days, userId, repoId }) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  const since = date.toISOString();

  return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?since=${since}&per_page=100`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(commits => {
      const authors = {};

      commits.forEach(commit => {
        const { name, email } = commit.commit.author;
        if (!authors[email]) {
          authors[email] = { count: 0, name, email };
        }
        authors[email].count += 1;
      });

      const mostActiveDevs = Object.values(authors).sort((a, b) => b.count - a.count);
      const maxCount = mostActiveDevs[0].count;
      return mostActiveDevs.filter(dev => dev.count === maxCount);
    })
    .catch(error => console.error('Error:', error));
}

// Приклад виклику функції
getMostActiveDevs({ days: 7, userId: 'USERID', repoId: 'REPOID' })
  .then(activeDevs => {
    console.log(activeDevs);
  });