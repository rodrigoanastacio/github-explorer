export function RepositoryList() {
  return (
    <section className="repository">
      <h1 className="repository__title">Listagem de repositórios</h1>
      <ul className="repository__list">
        <li className="repository__item">
          <strong>Unform</strong>
          <p className="repository__description">Form in React</p>
          <a href="" className="repository__link">
            Acessar repositório
          </a>
        </li>
      </ul>
    </section>
  );
}
