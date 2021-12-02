import { RepositoryItem } from './RepositoryItem';

const repository = {
  name: 'Unform',
  description: 'Form in React',
  link: 'https://github.com/unform/unform',
};

export function RepositoryList() {
  return (
    <section className="repository">
      <h1 className="repository__title">Listagem de repositórios</h1>
      <ul className="repository__list">
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
