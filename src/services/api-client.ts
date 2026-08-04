/**
 * Thin API client placeholder.
 *
 * The frontend currently runs on dummy data only. When the Django REST
 * Framework backend is available, point `API_BASE_URL` at it and use these
 * helpers as the single network entry point.
 */

export const API_BASE_URL = "/api";

export type ApiError = { status: number; message: string };

export async function apiRequest<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...(init.headers ?? {}) },
    ...init,
  });

  if (!response.ok) {
    throw { status: response.status, message: response.statusText } satisfies ApiError;
  }

  return (await response.json()) as T;
}

export const api = {
  get: <T>(path: string) => apiRequest<T>(path),
  post: <T>(path: string, body: unknown) =>
    apiRequest<T>(path, { method: "POST", body: JSON.stringify(body) }),
  patch: <T>(path: string, body: unknown) =>
    apiRequest<T>(path, { method: "PATCH", body: JSON.stringify(body) }),
  delete: <T>(path: string) => apiRequest<T>(path, { method: "DELETE" }),
};
