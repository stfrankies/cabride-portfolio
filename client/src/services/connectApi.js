import axios from 'axios';

export class connectApi {
  constructor(auth = false) {
    const headers = (auth) ? { "x-auth-token": this.getToken() } : {}
    this.access = axios.create({
      baseURL: 'http://localhost:3003/api', headers: headers
    })
  }

  getToken() {
    return window.sessionStorage.getItem('token') ?? ""
  }

  setHeaders(headers = {}) {
    for (const [key, value] of Object.entries(headers)) {
      this.access.defaults.headers.common[key] = value
    }
    return this
  }

  async get(path, data) {
    return await this.access.get(path, data).then(result => result.data)
  }
  async post(path, data) {
    return await this.access.post(path, data).then(result => result.data)
  }
}