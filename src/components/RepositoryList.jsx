import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/components/c-repository.scss';

const repository = {
  name: 'Unform',
  description: 'Form in React',
  link: 'https://github.com/unform/unform',
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/rodrigoanastacio/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  console.log(repositories);

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
