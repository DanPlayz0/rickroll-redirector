const express = require('express'), app = express();
let config = null;
try {
  config = require('./config.json');
} catch {
  throw Error('Config file not found.');
}

app.get('*', async (req, res) => {
  if (req.url == '/') return res.send('This is meant for rickrolling people. Put any subdomain and path');
  if (["Mozilla/5.0 (Macintosh; Intel Mac OS X 11.6; rv:92.0) Gecko/20100101 Firefox/92.0", "Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)"].some(x => x == req.headers['user-agent']))
    return res.status(200).sendFile(`${process.cwd()}/dontopen.png`);
  res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});

app.listen(3034);