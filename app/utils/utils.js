const utils = {
    get(url) {
        return new Promise(function(resolve, reject) {
            // Do the usual XHR stuff
            var req = new XMLHttpRequest();
            req.open('get', url);

            req.onload = function() {
                // 'load' triggers for 404s etc
                // so check the status
                if (req.status == 200) {
                    // Resolve the promise with the response text
                    resolve(req.response);
                }
                else {
                    // Otherwise reject with the status text
                    reject(Error(req.statusText));
                }
            };

            // Handle network errors
            req.onerror = function() {
                reject(Error('Network Error'));
            };
            // Make the request
            req.send();
        });
    },
    getJSON(url){
        return this.get(url).then(JSON.parse);
    }
};
export default utils;
