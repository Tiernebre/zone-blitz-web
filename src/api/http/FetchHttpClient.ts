import { HttpClient } from "./HttpClient";
import { HttpClientError } from "./HttpClientError";
import { HttpServerError } from "./HttpServerError";

/**
 * Specific HTTP Client implementation that uses the Fetch API
 * as the mechanism for making HTTP requests.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */
export class FetchHttpClient implements HttpClient {
  public constructor(private readonly rootUrl: string) {}

  public async get<T>(uri: string): Promise<T> {
    const response = await fetch(`${this.rootUrl}${uri}`);
    return this.parseResponse(response);
  }

  public async post<T>(uri: string, request?: any): Promise<T> {
    const response = await fetch(`${this.rootUrl}${uri}`, {
      method: "POST",
      body: JSON.stringify(request),
    });
    return this.parseResponse(response);
  }

  private parseResponse(response: Response): Promise<any> {
    if (response.ok) {
      return response.json();
    } else {
      if (response.status >= 500) {
        throw new HttpServerError(
          `HTTP Server Error ${response.status} occurred.`
        );
      } else {
        throw new HttpClientError(
          `HTTP Client Error ${response.status} occurred.`
        );
      }
    }
  }
}
