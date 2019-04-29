import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addFavoriteSuccess } from '../actions/favorites';

export function* addFavorite(action) {
  const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

  const repositoryData = {
    id: data.id,
    name: data.name,
    owner: {
      login: data.owner.login,
      avatar_url: data.owner.avatar_url,
    },
    stargazers_count: data.stargazers_count,
    forks_count: data.forks_count,
    open_issues_count: data.open_issues_count,
    pushed_at: data.pushed_at,
  };

  yield put(addFavoriteSuccess(repositoryData));
}
