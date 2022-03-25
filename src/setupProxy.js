const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = app => {
    app.use(
        createProxyMiddleware('/images/headshots/current/168x168/*',
        {
            target:"http://nhl.bamcontent.com",
            changeOrigin:true
        })
    )
}