import API, { handlePromise } from "./config";

const getUser = async (userId) => {
  const [error, response] = await handlePromise(
    API.get(`/users/${userId}`, null, null)
  );

  return error || response;
};

export default { getUser };
