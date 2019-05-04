import { call, put, select } from 'redux-saga/effects';
import moment from 'moment';

import api from '../../services/api';

import { Creators as FavoriteActions } from '../ducks/favorites';

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const isDuplicated = yield select(state => state.favorites.data.find(favorite => favorite.id === data.id));

    if (isDuplicated) {
      yield put(FavoriteActions.addFavoriteFailure('Repositório duplicado'));
    } else {
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
        lastCommit: moment(data.pushed_at).fromNow(),
      };

      yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
    }
  } catch (err) {
    yield put(FavoriteActions.addFavoriteFailure('Erro ao adicionar repositório'));
  }
}
