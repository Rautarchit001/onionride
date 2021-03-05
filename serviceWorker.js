const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "https://1.bp.blogspot.com/-y9frRBWR9Fw/YBQdcVFPtMI/AAAAAAAAB40/Sv782exRXd8hPbhgqS0zmZEBjM65FW6DgCLcBGAsYHQ/s0/game.webp",
  "https://1.bp.blogspot.com/-JCM20L6MstU/YBQfjBGv5jI/AAAAAAAAB5I/5c_4nSbXVNM9qAiyPbf2YNNCmhJJGnAKACLcBGAsYHQ/s0/qureka.webp",
  "https://1.bp.blogspot.com/-B4yDxszH3uY/XuJBvlUW6wI/AAAAAAAAAmQ/gafl2YgnOR08He6pUaB2ZUbW2W68mkqMACLcBGAsYHQ/s1600/amazon.webp",
  "https://1.bp.blogspot.com/-PGyDtCBzPfU/XuJCBDstAWI/AAAAAAAAApY/VoGF6k1h-2MaU4iQ4T_659ZzukeyMpVlACLcBGAsYHQ/s1600/flipkart.webp",
  "https://1.bp.blogspot.com/-ZrAFe914jkk/XuJB-k9rYSI/AAAAAAAAApM/a07nLJXNcLQMqSt2U5TAvb5UpCjxmweiACLcBGAsYHQ/s1600/facebook.webp",
  "https://1.bp.blogspot.com/-kRQK78Zes78/YBU_gDy3YLI/AAAAAAAAB5U/6bkZV-8gEusrYiTumiECy4_xZqP-bkilQCLcBGAsYHQ/w200-h200/wikipedia.png",
  "https://1.bp.blogspot.com/-GYF0SzSoTOQ/YBVASKrSwJI/AAAAAAAAB5c/fQ0FkTtPUe4yZzBSioo3rBtYv511E5-8QCLcBGAsYHQ/w200-h200/5841c704a6515b1e0ad75aab.png",
  "https://1.bp.blogspot.com/-eroE4OBfzV8/YCaO7cJ8T_I/AAAAAAAAB68/BHI5ySUVca4E_tNLOhEp8pHDYdXsITxMgCLcBGAsYHQ/s320/ext.webp",
  "https://1.bp.blogspot.com/-XnVTxkfk1FA/YBF9n2NxxZI/AAAAAAAAB34/VQ1D7rmb6Rgrz2ABa2m8IikQVTYQW3lWQCLcBGAsYHQ/w200-h200/close.png",
  "https://1.bp.blogspot.com/-DQgOQhhaj38/YBF7zWcs9gI/AAAAAAAAB3o/tydQETnlx7glL5fMXCPJ6qp_IML7I0KgwCLcBGAsYHQ/s16000/pp.svg.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
