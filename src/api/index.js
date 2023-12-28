import data from '../api/action-panel.json';

export const getInitForm = () => {
   fetch('api/actions-panel', {
    method: 'GET',
    headers: {
      'Content-Type': 'aplication/json',
    }
  })

  return data;
}
