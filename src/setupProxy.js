const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors')

app.use(cors({
    origin: "https://johnowagon.github.io/teamviewer/",
    credentials: true
}))