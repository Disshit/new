/* Shortening services with free public api, usable with js
 * Simply return shortened links
 */

const shortening = {
    isgd: async function shortenUrl(longUrl) {
        const url = 'https://is.gd/create.php';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({format: 'json', url: longUrl.trim()})
        };
        
        const response = await fetch(url, options);
        const data = await response.json();

        // console.log(data.shorturl);
        return data.shorturl;
    },
    vgd: async function shortenUrl(longUrl) {
        const url = 'https://v.gd/create.php';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({format: 'json', url: longUrl.trim()})
        };
        const response = await fetch(url, options);
        const data = await response.json();

        // console.log(data.shorturl);
        return data.shorturl;
    },
    /*isgdget: async function (longurl) {
        const url = 'https://is.gd/create.php?format=json&url=' + encodeURIComponent(longurl.trim()),
              response = await fetch(url),
              data = await response.json();

        // console.log(data.shorturl);
        return data.shorturl;
    },
    vgdget: async function (longurl) {
        const url = 'https://v.gd/create.php?format=json&url=' + encodeURIComponent(longurl.trim()),
              response = await fetch(url),
              data = await response.json();

        // console.log(data.shorturl);
        return data.shorturl;
    },*/
    spoome: async function (longurl) {
        const url = 'https://spoo.me/';
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({url: longurl.trim()})
        };
        const response = await fetch(url, options);
        const data = await response.json();
        
        // console.log(data.short_url);
        return data.short_url;
    },
    trimmlink: async function (longurl) {
        const url = "https://trimm.link/";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({link: longurl.trim()})
        };
        const response = await fetch(url + 'shorten', options);
        const json = await response.json();
        const shorturl = url + (json.word || "");

        // console.log(shorturl);
        return shorturl;
    }
};

/* 

USAGE

shortening.trimmlink('https://example.com')
    .then(key => {
        console.log(key);
    })
    .catch(() => {
        console.log('something went wrong')
    });

*/