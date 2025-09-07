/* Shortening services with free public api, usable with js
 * Simply return shortened links
 */

const shortening = {
    spoome: async function (link) {
        const url = 'https://spoo.me/';
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            // body: new URLSearchParams({url: 'https://example.com/'})
            body: new URLSearchParams({url: link})
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }

        /*
            Object { domain: "spoo.me", original_url: "https://example.com/", short_url: "https://spoo.me/PacvQT" }
            domain: "spoo.me"
            original_url: "https://example.com/"
            short_url: "https://spoo.me/PacvQT"
        */
    }
};