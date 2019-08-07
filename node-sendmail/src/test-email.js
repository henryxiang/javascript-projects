const sendmail = require('sendmail')({ silent: false });
 
sendmail({
    from: 'AFS JIRA<afs-jira@ucdavis.edu>',
    to: 'hxxiang@ucdavis.edu',
    subject: 'Test Sendmail',
    //html: 'Mail of test from Fiscal Cert Admin.',
    text: 'Mail of test from Fiscal Cert Admin.',
  }, function(err, reply) {
    // console.log(err && err.stack);
    console.log(reply);
});
