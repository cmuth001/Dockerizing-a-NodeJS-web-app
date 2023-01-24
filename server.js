'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

const englishCode = "en-US";
const spanishCode = "es-ES";
function getAboutUsLink(language){
    switch (language.toLowerCase()){
      case englishCode.toLowerCase():
        return '/about-us';
      case spanishCode.toLowerCase():
        return '/acerca-de';
    }
    return '';
}
module.exports = getAboutUsLink;
