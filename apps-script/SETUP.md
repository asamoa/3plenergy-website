# Connecting the Enquiry Form to Google Workspace

The contact form on the website sends its submissions to a small Google Apps
Script, which emails them straight into your Google Workspace inbox. No
third-party form service, no extra account to sign up for — it runs entirely
under your own Google account for free.

Do this while signed in as the Workspace account you want enquiries to land
in (or any Google account, if you'd rather set the recipient to a different
address).

## 1. Create the script

1. Go to [script.google.com](https://script.google.com) and click **New project**.
2. Delete the placeholder `Code.gs` content and paste in the contents of
   [`apps-script/Code.gs`](Code.gs) from this repo.
3. At the top of the file, change this line to your real Workspace mailbox:
   ```js
   const RECIPIENT_EMAIL = 'info@3plenergyltd.com';
   ```
4. Rename the project (top left, "Untitled project") to something like
   **3PL Energy Enquiry Handler**.
5. Save (Ctrl/Cmd+S).

## 2. Deploy it as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in:
   - **Execute as:** Me (your account)
   - **Who has access:** Anyone
   - (This does *not* make your Gmail public — it only lets the website POST
     to this one script, which just sends an email you already wrote.)
4. Click **Deploy**.
5. The first time, Google will ask you to authorize the script — click
   through the "Google hasn't verified this app" warning (it's your own
   script) and allow it access to send email on your behalf.
6. Copy the **Web app URL** it gives you (ends in `/exec`).

## 3. Wire it into the website

1. Open `script.js` in the website repo.
2. Find this line near the top of the "Contact Form Handling" section:
   ```js
   const GOOGLE_SCRIPT_URL = 'PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE';
   ```
3. Replace the placeholder with the URL you copied.
4. Save, commit, and redeploy the site.

## 4. Test it

Submit the form on the live site with a real email address. The email
should arrive in the Workspace inbox within a few seconds, sent from your
Google account with **Reply-To** set to whoever submitted the form, so you
can just hit reply.

## Updating later

If you ever need to change which inbox receives enquiries, edit
`RECIPIENT_EMAIL` in the Apps Script project and use **Deploy → Manage
deployments → Edit → Deploy** again (the same Web App URL keeps working, no
need to update `script.js` again).

## Why you won't see form errors in the browser

Google's Web App responses don't include the CORS headers browsers require
to read a cross-origin response, so the site can't confirm success/failure
from JavaScript — it shows an optimistic "thank you" message once the
request is sent. If something's wrong (e.g. the URL wasn't updated, or the
script's authorization needs re-granting after edits), check the Apps
Script project's **Executions** tab (left sidebar) to see what happened to
each submission.
