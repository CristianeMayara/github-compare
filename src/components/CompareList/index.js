import React from 'react';

import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories
      && repositories.map(r => (
        <Repository>
          <header>
            <img src={r.owner.avatar_url} alt={r.owner.login} />
            <strong>{r.name}</strong>
            <small>{r.owner.login}</small>
          </header>

          <ul>
            <li>
              {r.stargazers_count}
              <small>stars</small>
            </li>
            <li>
              {r.forks_count}
              <small>forks</small>
            </li>
            <li>
              {r.open_issues_count}
              <small>issues</small>
            </li>
            <li>
              {r.pushed_at}
              <small>last commit</small>
            </li>
          </ul>
        </Repository>
      ))}
  </Container>
);

export default CompareList;
