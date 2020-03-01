import { environment } from "../../../environments/environment";

const BASE_URL = environment.baseUrl;

export class Urls {
  static readonly auth = `${BASE_URL}auth`;
  static readonly users = `${BASE_URL}users`;
}
