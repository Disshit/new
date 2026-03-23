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
    const service = document.querySelector('dropmenu[data-type="shortening"] input').value;
    const inlink = document.querySelector('#inlink');
    const newtab = document.querySelector('form .btn-newtab');

    shortening[service](inlink.value).then((res) => {
        if (typeof res === 'string') {
            // console.log(res);
            inlink.value = res;
            newtab.setAttribute('href', res);
            window.history.pushState(null, '', '/?x=' + encodeURIComponent(res.replace(/^https:\/\//,'')));
        } else {
            throw res;
        }
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

document.querySelector('form .btn-shorten').addEventListener('click', shortenLink);

// Refresh page for popstate
window.addEventListener('popstate', () => {
    window.location.reload();
});