class Api {
  constructor({url, token}) {
      this.url = url;
      this.token = token;
  }

  search(query) {
      return fetch(`${this.url}/search/photos?query=${query}`, {
          headers: {
              Authorization: `Client-ID ${this.token}`
           }
          }).then(response => response.json())
  }
}

const config = {
  url: 'https://api.unsplash.com',
  token: 'HfBmUgsxiLbG2xivrTUvPs-wy0xgiAsl4ZJVtlu3Rzo'
}

const api = new Api(config);

export default api;