"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.graphApiRequest = void 0;
var axios_1 = require("axios");
// Construct the promise which will be resolved by the specific endpoint controllers
var graphApiRequest = function (options) {
    var path = options.path, _a = options.method, method = _a === void 0 ? "GET" : _a, data = options.data, config = options.config;
    console.log("".concat(method, ": ").concat(path));
    if (!config.apiKey) {
        throw new Error('API Key is missing');
    }
    if (!path.length) {
        throw new Error('No path specified');
    }
    // Strip the path of a leading '/' if supplied
    path = path.charAt(0) === '/' ? path.substring(1) : path;
    return (0, axios_1.default)({
        url: "https://graph.facebook.com/v13.0/".concat(path),
        method: method,
        headers: {
            'Authorization': "Bearer ".concat(config.apiKey),
            'content-type': 'application/json'
        },
        data: data ? JSON.stringify(data) : null
    });
};
exports.graphApiRequest = graphApiRequest;
var handleError = function (err) {
    throw new Error(err);
};
exports.handleError = handleError;
