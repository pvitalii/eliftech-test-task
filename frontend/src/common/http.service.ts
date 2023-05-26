import axios, { AxiosRequestConfig } from 'axios';

export abstract class HttpService<T> {
  private baseUrl: string;

  constructor(private fetchingService = axios) {
    this.baseUrl = process.env.REACT_APP_SERVER_URL!;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${url}`;
  }

  get<K = T>(config: AxiosRequestConfig) {
    return this.fetchingService.get<K>(this.getFullApiUrl(config.url!), config);
  }

  post<K = T>(config: AxiosRequestConfig) {
    return this.fetchingService.post<K>(this.getFullApiUrl(config.url!), config.data, config);
  }

  put<K = T>(config: AxiosRequestConfig) {
    return this.fetchingService.put<K>(this.getFullApiUrl(config.url!), config.data, config);
  }

  delete(config: AxiosRequestConfig) {
    return this.fetchingService.delete<{}>(this.getFullApiUrl(config.url!));
  }
}
