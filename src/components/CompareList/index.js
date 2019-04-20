import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories
      && repositories.map(r => (
        <Repository key={r.id}>
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
              {r.lastCommit}
              <small>last commit</small>
            </li>
          </ul>
        </Repository>
      ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
};

export default CompareList;
