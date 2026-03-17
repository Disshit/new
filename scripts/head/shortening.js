/* Shortening services with free public api, usable with js
 * Simply return shortened links
 */

const shortening = {
    isgd: async function (link) {
        const url = 'https://is.gd/create.php?format=json&url=' + encodeURIComponent(link.trim()),
              response = await fetch(url),
              data = await response.json();

        // console.log(data.shorturl);
        return data.shorturl;
    },
    vgd: async function (link) {
        const url = 'https://v.gd/create.php?format=json&url=' + encodeURIComponent(link.trim()),
              response = await fetch(url),
              data = await response.json();

        // console.log(data.shorturl);
        return data.shorturl;
    },
    spoome: async function (link) {
        const url = 'https://spoo.me/',
              options = {
                  method: 'POST',
                  headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  // body: new URLSearchParams({url: 'https://example.com/'})
                  body: new URLSearchParams({url: link.trim()})
              },
              response = await fetch(url, options),
              data = await response.json();
        
        // console.log(data.short_url);
        return data.short_url;
    }
};