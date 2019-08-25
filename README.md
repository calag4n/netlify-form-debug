# Netlify Form Debugging

_Try to figure out why some inputs are not received by Netlify form API_

When dates are selected (by clicking buttons), values are pushed in array `dateToBook` in **AppProvider**'s state.

Then, I want to render inputs by _mapping_ ```dateToBook``and send to Netlify form API each value.

**Problem :**

None of those inputs appear in the netlify form submissions page.

I tried to map another array wich is not comming from the provider and that works, I can get the value in netlify submissions.

So, I tried to clone the array outter the provider but that doesn't work !...

---

I really think there's something about **lifecycle** but don't know what.

I'm struggling with that for many days ^^'

The app's code is mainly in [`src/pages/index.js`](https://github.com/calag4n/netlify-form-debug/blob/master/src/pages/index.js) and [`src/context/AppProvider.js`](https://github.com/calag4n/netlify-form-debug/blob/master/src/context/AppProvider.js)

Here is the [CodeSandbox](https://github.com/calag4n/netlify-form-debug/blob/master/src/context/AppProvider.js) and there the deployed [Netlify URL](https://sad-mahavira-9f091d.netlify.com/)
