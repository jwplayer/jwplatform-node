'use strict';

class Resource {
    constructor(client, path, overrides) {
        this._client = client;
        this.path = path;

        this._defaultActions = {
            create: {
                method: 'post',
                paramType: 'body',
            },
            show: {
                method: 'get',
                paramType: 'qs',
            },
            delete: {
                method: 'post',
                paramType: 'body',
            },
            list: {
                method: 'get',
                paramType: 'qs',
            },
            update: {
                method: 'post',
                paramType: 'body',
            },
        };

        this.actions = Object.assign({}, this._defaultActions, overrides);

        this._actionFactory(this.actions);
    }

    _actionFactory(actions) {
        const self = this;
        Object.keys(actions).forEach(action => {
            if (!actions[action]) {
                self[action] = function () {
                    console.warn('This is an unsupported route');
                }
            } else {
                const { method, paramType } = actions[action];
                self[action] = function(params) {
                    self._client.makeRequest(
                        `${self.path}/${action}`,
                        method,
                        paramType,
                        params
                    );
                };
            }
        });
    }
}

module.exports = Resource;
