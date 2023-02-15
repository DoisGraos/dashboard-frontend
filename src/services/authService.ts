import API, { handlePromise } from "./config";

const signIn = async (payload) => {
  const [error, response] = await handlePromise(
    API.post("/auth/signIn", payload, null)
  );

  return error || response;
};

export default { signIn };
