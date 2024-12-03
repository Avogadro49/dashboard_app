type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export async function apiRequest<T>(endpoint: string, method: HttpMethod = "GET", data?: unknown): Promise<T> {
  const url = [import.meta.env.VITE_API_URL, endpoint].join("/");

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
