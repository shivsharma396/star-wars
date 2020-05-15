/**
 * Helpers class
 *
 */
class Helpers {
  /**
   * fetchHelper
   *
   * @param {object} reqParams parameters for request
   * @return {Promise} for parameters
   */
  fetchHelper = reqParams => {
    const { url, method, headers = {}, data } = reqParams;
    const fecthPromise = (resolve, reject) => {
      fetch(url, {
        method,
        headers,
        body: data && JSON.stringify(data)
      })
        .then(response => {
          return [response.json(), response.status];
        })
        .then(([response, status]) => {
          if (status >= 200 && status <= 300) {
            resolve(response);
          } else {
            return [response, status];
          }
        })
        .then(([error, status]) => {
          error
            .then(err => {
              let errorMessage = "";
              switch (status) {
                case 400:
                  errorMessage = err.message || "Bad Request";
                  break;
                case 500:
                  errorMessage = err.message || "Internal server error";
                  break;
                default:
                  errorMessage = "Error";
              }
              throw errorMessage;
            })
            .catch(error => reject(error));
        })
        .catch(error => {
          reject(error);
        });
    };
    return new Promise(fecthPromise);
  };

  /**
   * get method
   *
   * @param {object} payload for request
   * @return {object} response
   */
  get = ({ url }) => {
    const reqParams = {
      url,
      method: "GET"
    };
    return this.fetchHelper(reqParams);
  };

  /**
   * post method
   *
   * @param {object} payload for request
   * @return {object} response
   */
  post = ({ url, data }) => {
    const headers = {
      "Content-Type": "application/json"
    };
    const reqParams = {
      url,
      method: "POST",
      headers,
      data
    };
    return this.fetchHelper(reqParams);
  };

  /**
   * put method
   *
   * @param {object} payload for request
   * @return {object} response
   */
  put = ({ url, data }) => {
    const headers = {
      "Content-Type": "application/json"
    };
    const reqParams = {
      url,
      method: "PUT",
      headers,
      data
    };
    return this.fetchHelper(reqParams);
  };
}

export default new Helpers();
