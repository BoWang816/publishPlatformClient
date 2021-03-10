/**
 * server-config.js
 * @author wangbo
 * @since 2020/3/24
 * @github https://github.com/BoWang816
 */

const config = {
    // API前缀
    apiPrefix: '/blog-web/1.0',

    // 后端API地址
    apiUri: 'https://www.wangboweb.site',

    // 后端API端口
    apiPort: 80,

    // mock端口
    serverPort: 4000,

    // 是否使用mock数据
    useMock: process.env.NODE_ENV === 'local'
};

config.apiUri = config.useMock ? '127.0.0.1' : config.apiUri;
config.apiPort = config.useMock ? '8800' : config.apiPort;

module.exports = config;
