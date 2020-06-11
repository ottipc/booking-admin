import {fetchUtils } from 'react-admin';
import postgrestRestProvider from '@raphiniert/ra-data-postgrest';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({
            Accept: 'application/json'

        });
    }
    options.headers.set('Content-Type', `application/json`);
    options.headers.delete('Accept');
    //options.headers.set('Authorization', `Bearer XX`);
    return fetchUtils.fetchJson(url, options);
};


const dataProvider = postgrestRestProvider("http://37.61.202.252:3035", httpClient);

const myDataProvider = {
    ...dataProvider,
    getManyOr: function (resource, params) {
        let prop;
        let queryParam;
        let queryValues = [];

        for (prop in params) {
            if (params.hasOwnProperty(prop)) {
                let key = prop;
                let valueArray = params[key];
                for (queryParam in valueArray) {
                    let queryString = key + ".eq." + valueArray[queryParam];
                    queryValues.push(queryString);
                }
            }
        }
        let queryIds = queryValues.join(",");
        let queryString = (!queryIds) ? "id=eq.-1" : "or=(" + queryIds + ")";

        let url = "http://37.61.202.252:3035" + "/" + resource + "?" + queryString;
        return httpClient(url).then(function (_a) {
            var json = _a.json;
            return ({ data: json });
        });
    },
};


export default myDataProvider
