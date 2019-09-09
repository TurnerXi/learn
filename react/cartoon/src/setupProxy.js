const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  proxyIqiyipic(app);
};

function proxyIqiyipic(app) {
  let pathes = Array(10).fill().map((item, idx) => {
    return { path: `/iqiyipic/pic${idx}/**`, target: `http://pic${idx}.iqiyipic.com` };
  });
  console.log(pathes);

  let options = {
    changeOrigin: true,
    pathRewrite: function (path, req) {
      return path.replace(/^\/iqiyipic\/pic(\d)\//, '/');
    },
    onProxyReq(proxyReq, req, res) {
      proxyReq.setHeader('Referer', 'http://www.iqiyi.com/manhua/');
    }
  }

  pathes.forEach(item => {
    app.use(proxy(item.path, Object.assign({ target: item.target }, options)));
  })
}
