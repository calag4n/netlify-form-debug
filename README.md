# Netlify Form Debugging

*Try to figure out why some inputs are not received by Netlify form API*

When dates are selected (by clicking buttons), values are pushed in array ```dateToBook``` in **AppProvider**'s state.

Then, I want to render inputs by *mapping* ```dateToBook````and send to Netlify form API each value.

**Problem :**

None of those inputs appear in the netlify form submissions page.

I tried to map another array wich is not comming from the provider and that works, I can get the value in netlify submissions.

So, I tried to clone the array outter the provider but that doesn't work !... 

I'm struggling with that for many days ^^'
