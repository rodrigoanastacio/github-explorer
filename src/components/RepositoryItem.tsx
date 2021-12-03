import React from 'react';

import '../styles/components/c-repository-item.scss';

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li className="c-repository-item">
      <strong className="c-repository-item__title">
        {props.repository?.name ?? 'Default'}
      </strong>
      <p className="c-repository-item__description">
        {props.repository?.description}
      </p>
      <a
        target="_blank"
        href={props.repository?.html_url}
        className="c-repository-item__link"
      >
        Acessar repositório
      </a>
    </li>
  );
}
