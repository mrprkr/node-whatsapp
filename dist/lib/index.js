"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Methods
var debug_1 = require("./debug");
var phone_1 = require("./phone");
var messages_1 = require("./phone/messages");
var messageTemplates_1 = require("./account/messageTemplates");
var getPhoneNumbers_1 = require("./account/getPhoneNumbers");
// Main Class
var WABAccount = /** @class */ (function () {
    function WABAccount(_a) {
        var apiKey = _a.apiKey, phoneNumberId = _a.phoneNumberId, wabaBusinessId = _a.wabaBusinessId;
        var _this = this;
        this.config = {
            wabaBusinessId: '',
            apiKey: '',
            phoneNumberId: '',
            webhookSecret: null
        };
        if (!apiKey) {
            throw new Error('API Key missing');
        }
        this.config = {
            wabaBusinessId: wabaBusinessId,
            apiKey: apiKey,
            phoneNumberId: phoneNumberId,
        };
        // lookup available phone numbers
        if (!phoneNumberId) {
            (0, getPhoneNumbers_1.getPhoneNumbers)(this.config).then(function (data) {
                if (!data.length) {
                    throw new Error('No phone numbers on this account');
                }
                _this.config.phoneNumberId = data[0].id;
            });
        }
    }
    // Client methods
    WABAccount.prototype.getApiKey = function () {
        return this.config.apiKey;
    };
    WABAccount.prototype.getWABAid = function () {
        return (0, debug_1.getWABAId)(this.config);
    };
    WABAccount.prototype.getSharedWABAIds = function () {
        return (0, debug_1.getSharedWABAIds)(this.config);
    };
    WABAccount.prototype.getPhoneNumbers = function () {
        return (0, getPhoneNumbers_1.getPhoneNumbers)(this.config);
    };
    WABAccount.prototype.register = function (pin) {
        return (0, phone_1.register)(this.config, pin);
    };
    WABAccount.prototype.deregister = function () {
        return (0, phone_1.deregister)(this.config);
    };
    WABAccount.prototype.businessProfile = function () {
        return (0, phone_1.businessProfile)(this.config);
    };
    WABAccount.prototype.getTemplates = function () {
        return (0, messageTemplates_1.getTemplates)(this.config);
    };
    WABAccount.prototype.createTemplate = function (options) {
        return (0, messageTemplates_1.createTemplate)(this.config, options);
    };
    WABAccount.prototype.sendTemplateMessage = function (options) {
        return (0, messages_1.sendTemplateMessage)(this.config, options);
    };
    WABAccount.prototype.sendTextMessage = function (options) {
        return (0, messages_1.sendTextMessage)(this.config, options);
    };
    WABAccount.prototype.sendReplyButton = function (options) {
        return (0, messages_1.sendReplyButton)(this.config, options);
    };
    WABAccount.prototype.replyToTextMessage = function (options) {
        return (0, messages_1.replyToTextMessage)(this.config, options);
    };
    WABAccount.prototype.markMessageAsRead = function (messageId) {
        return (0, messages_1.markMessageAsRead)(this.config, messageId);
    };
    return WABAccount;
}());
exports.default = WABAccount;
