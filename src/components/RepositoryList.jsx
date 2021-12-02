import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/components/c-repository.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/rodrigoanastacio/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="c-repository">
      <h1 className="c-repository__title">Listagem de repositórios</h1>
      <ul className="c-repository__list">
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
