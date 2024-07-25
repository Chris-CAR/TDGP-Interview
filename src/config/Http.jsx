import axios from 'axios';
import mocks from '/src/mocks';
import Cache from './caches/Cache';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const caches = {
  structure: new Cache(10)
};

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

const reqSuccess = async (config) => {
  const token = localStorage.getItem('token');
  const authHeaders = {
    Authorization: `Bearer ${token}`
  };

  let cacheAccountability = false;

  if (config.useCache && config.cacheType && config.cacheKey && caches[config.cacheType]) {
    const isCached = caches[config.cacheType].hasItem(config.cacheKey);
    if (!isCached) {
      caches[config.cacheType].setItem(config.cacheKey, 'loading');
      cacheAccountability = true;
    }
  }

  return {
    ...config,
    cacheAccountability,
    headers: {
      ...config.headers,
      ...authHeaders
    }
  };
};

const responseSuccess = (res) => {
  if (
    res.config.useCache &&
    res.config.cacheType &&
    res.config.cacheKey &&
    caches[res.config.cacheType]
  ) {
    caches[res.config.cacheType].setItem(res.config.cacheKey, res.data);
  }

  return res;
};

class RequestError extends Error {
  constructor({ data, status }) {
    super();
    this.message = data?.message || JSON.stringify(data);
    this.status = status;
    this.data = data;
  }
}

const responseError = async (error) => {
  if (error.message.match(/Network Error/)) {
    const msg = 'Falha na conexão com o servidor.';
    return Promise.reject(new Error(msg));
  }
  if (error.response && error.response.data) {
    return Promise.reject(new RequestError(error.response));
  }
  return Promise.reject(error);
};

client.interceptors.request.use(reqSuccess, undefined);
client.interceptors.response.use(responseSuccess, responseError);

/**
 * @see {@link https://github.com/axios/axios#axiosrequestconfig}
 */

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const request = async (opts) => {
  if (opts.mock) {
    const currentMock = mocks[opts.mock];
    if (opts.delay) await delay(opts.delay);
    if (opts.error) throw new Error(opts.error);
    if (
      currentMock &&
      (!currentMock.specificUrl ||
        (currentMock.specificUrl && opts.url.includes(currentMock.specificUrl)))
    ) {
      return { status: 200, data: currentMock.data };
    }
    return { status: 200, data: currentMock.noDataResponse || [] };
  }

  if (
    !opts.cacheAccountability &&
    opts.useCache &&
    opts.cacheType &&
    opts.cacheKey &&
    caches[opts.cacheType]
  ) {
    let cache = caches[opts.cacheType].getItem(opts.cacheKey);

    if (cache) {
      if (cache === 'loading') {
        let attempts = 0;
        do {
          cache = caches[opts.cacheType].getItem(opts.cacheKey);
          attempts += 1;
          // eslint-disable-next-line no-await-in-loop
          await sleep(3 * 1000);
        } while (attempts < 5 && cache === 'loading');
      }

      return {
        status: 200,
        fromCache: true,
        data: cache
      };
    }
  }

  return client.request(opts);
};

export { client, request };
