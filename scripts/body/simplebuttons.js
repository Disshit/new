// Copy button with
function copyLink() {
    const timestamp = Date.now().toString();
    const inlink = document.querySelector('#inlink');
    const btncopy = document.querySelector('form .btn-copy');

    navigator.clipboard.writeText(inlink.value)
        .then(() => {
            // Success
            btncopy.classList.add(`success-${timestamp}`);
            inlink.select();
            inlink.setSelectionRange(0, inlink.value.length);
            setTimeout(() => {
                btncopy.classList.remove(`success-${timestamp}`);
            }, 850);
        })
        .catch(err => {
            // Failure
            console.error('Failed to copy: ', err);
            btncopy.classList.add(`failure-${timestamp}`);
            setTimeout(() => {
                btncopy.classList.remove(`failure-${timestamp}`);
            }, 850);
        });
}

document.querySelector('form .btn-copy').addEventListener('click', copyLink);

// Link shortening button
function shortenLink() {
    // If blockmenu is active on any parent, exit right away
    if (document.querySelector('form .btn-shorten').closest('.blockmenu')) {return;}

    const service = document.querySelector('dropmenu[data-type="shortening"] input').value;
    const inlink = document.querySelector('#inlink');
    const newtab = document.querySelector('form .btn-newtab');
    const subdrop = document.querySelector('form subdrop');
    const message = document.querySelector('dropmenu[data-type="shortening"] .value');
    const messageog = message.textContent;
    const html = document.documentElement;

    if (subdrop.getAttribute('data-state') !== 'ready') {return;}

    subdrop.setAttribute('data-state','loading');
    subdrop.classList.add('blockmenu');

    shortening[service](inlink.value).then((res) => {
        if (typeof res === 'string') {
            // console.log(res);
            inlink.value = res;
            newtab.setAttribute('href', res);
            window.history.pushState(null, '', '/?x=' + encodeURIComponent(res.replace(/^https:\/\//,'')));
            subdrop.setAttribute('data-state','success');
            message.textContent = 'Success!';
            setTimeout(() => {
                subdrop.setAttribute('data-state','success fadeout');
            }, 1250);
            setTimeout(() => {
                html.setAttribute('data-page','shortened');
                window.dataPage = 'shortened';
            }, 1850);
        } else {
            throw res;
        }
    }).catch(err => {
        console.error('Failed to copy: ', err);
        subdrop.setAttribute('data-state','warning');
        message.textContent = 'Failed!';
        setTimeout(() => {
            subdrop.setAttribute('data-state','ready');
            subdrop.classList.remove('blockmenu');
            message.textContent = messageog;
        }, 1250);
    });
}

document.querySelector('form .btn-shorten').addEventListener('click', shortenLink);