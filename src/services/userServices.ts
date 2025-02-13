import bookTicketsAPI from './customizeAxios';

const fetchUser = (token: string) => {
  return bookTicketsAPI
    .post(`/user/get-detail-user`, { token })
    .then((responsive) => responsive.data)
    .catch((error) => {
      throw error;
    });
};

export { fetchUser };
