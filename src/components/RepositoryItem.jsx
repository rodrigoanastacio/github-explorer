import '../styles/components/c-repository-item.scss';

export function RepositoryItem({ repository }) {
  return (
    <li className="c-repository-item">
      <strong className="c-repository-item__title">
        {repository?.name ?? 'Default'}
      </strong>
      <p className="c-repository-item__description">
        {repository?.description}
      </p>
      <a
        target="_blank"
        href={repository?.html_url}
        className="c-repository-item__link"
      >
        Acessar repositório
      </a>
    </li>
  );
}
