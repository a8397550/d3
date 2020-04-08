const express = require('express')
const app = express();
app.use(express.static(__dirname + '/src'));

const port = 3000;

app.listen(port, () => console.log(`服务已启动，端口${port}`))