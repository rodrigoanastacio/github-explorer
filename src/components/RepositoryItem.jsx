export function RepositoryItem({ repository }) {
  return (
    <li className="repository__item">
      <strong>{repository?.name ?? 'Default'}</strong>
      <p className="repository__description">{repository?.description}</p>
      <a href={repository?.link} className="repository__link">
        Acessar repositório
      </a>
    </li>
  );
}
