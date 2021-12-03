import React, { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/components/c-repository.scss';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/rodrigoanastacio/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="c-repository">
      <h1 className="c-repository__title">Listagem de repositórios</h1>
      <ul className="c-repository__list">
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
