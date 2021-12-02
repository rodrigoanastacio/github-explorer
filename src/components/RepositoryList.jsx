import { RepositoryItem } from './RepositoryItem';

import '../styles/components/c-repository.scss';

const repository = {
  name: 'Unform',
  description: 'Form in React',
  link: 'https://github.com/unform/unform',
};

export function RepositoryList() {
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
