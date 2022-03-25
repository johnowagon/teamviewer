const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors')

app.use(cors({
    "Access-Control-Allow-Origin": "https://johnowagon.github.io/teamviewer/",
    "credentials": true
}))