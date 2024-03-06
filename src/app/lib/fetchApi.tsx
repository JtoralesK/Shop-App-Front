import { auth } from "@/app/auth";

export const fetchApi = async ({ dataFetch }: any) => {
  const { url, method, body } = dataFetch;
  const seccion: any = await auth();
  const token = seccion.user.token;
  if (!token) return { error: "No token" };
  let data: any = {};
  const urlFetch = `http://localhost:4000/${url}`;
  const requestOptions: any = {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-cache",
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
    requestOptions.headers["Content-Type"] = "application/json";
  }
  try {
    const response = await fetch(urlFetch, requestOptions);
    if (!response.ok) {
      throw new Error(
        `Error here: ${response.status} - ${response.statusText}`
      );
    }
    data = await response.json();
    return { data, status: response.status, response };
  } catch (error: any) {
    return { error: error.message };
  }
};
