/* Shortening services with free public api, usable with js
 * Simply return shortened links
 */

const shortening = {
    isgd: async function (longurl) {
        const url = 'https://is.gd/create.php?format=json&url=' + encodeURIComponent(longurl.trim()),
              response = await fetch(url),
              data = await response.json();

        // console.log(data.shorturl);
        return data.shorturl;
    },
    vgd: async function (longurl) {
        const url = 'https://v.gd/create.php?format=json&url=' + encodeURIComponent(longurl.trim()),
              response = await fetch(url),
              data = await response.json();

        // console.log(data.shorturl);
        return data.shorturl;
    },
    spoome: async function (longurl) {
        const url = 'https://spoo.me/',
              options = {
                  method: 'POST',
                  headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  // body: new URLSearchParams({url: 'https://example.com/'})
                  body: new URLSearchParams({url: longurl.trim()})
              },
              response = await fetch(url, options),
              data = await response.json();
        
        // console.log(data.short_url);
        return data.short_url;
    },
    trimmlink: async function (longurl) {
        const url = "https://trimm.link/",
              response = await fetch(url + 'shorten', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({link: longurl})
              }),
              json = await response.json(),
              shorturl = url + (json.word || "");

        // console.log(shorturl);
        return shorturl;
    }
};