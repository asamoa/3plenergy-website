/**
 * 3PL Energy LTD — Website Enquiry Handler
 *
 * Deploy this as a Google Apps Script Web App under your Google Workspace
 * account. It receives the contact form submission from the website and
 * emails it straight to your Workspace inbox via GmailApp — no third-party
 * service involved.
 *
 * Setup: see apps-script/SETUP.md in the repo for step-by-step deployment
 * instructions.
 */

// Where enquiries should land. Set this to your Workspace mailbox.
const RECIPIENT_EMAIL = 'info@3plenergyltd.com';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const required = ['name', 'email', 'phone', 'message'];
    for (const field of required) {
      if (!data[field] || !String(data[field]).trim()) {
        return jsonResponse({ result: 'error', message: 'Missing field: ' + field });
      }
    }

    const subject = 'New Enquiry from ' + data.name +
      (data.service ? ' — ' + data.service : '');

    const body = [
      'New enquiry submitted from the 3PL Energy LTD website:',
      '',
      'Name: ' + data.name,
      'Email: ' + data.email,
      'Phone: ' + data.phone,
      'Company: ' + (data.company || '-'),
      'Service of interest: ' + (data.service || '-'),
      '',
      'Message:',
      data.message
    ].join('\n');

    GmailApp.sendEmail(RECIPIENT_EMAIL, subject, body, {
      replyTo: data.email,
      name: '3PL Energy LTD Website'
    });

    return jsonResponse({ result: 'success' });
  } catch (err) {
    return jsonResponse({ result: 'error', message: err.message });
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
