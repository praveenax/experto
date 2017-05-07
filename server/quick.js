var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
//npm install google-contacts
var GoogleContacts = require('google-contacts').GoogleContacts;

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/gmail-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'gmail-nodejs-quickstart.json';

// Load client secrets from a local file.
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
    if (err) {
        console.log('Error loading client secret file: ' + err);
        return;
    }
    // Authorize a client with the loaded credentials, then call the
    // Gmail API.
    //    console.log(JSON.parse(content));
    //     console.log(JSON.parse(content).installed);



    //  authorize(JSON.parse(content), listLabels);
    //


        authorize(JSON.parse(content), listMessages);
    authorize(JSON.parse(content), listMessageDetail);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
    var clientSecret = credentials.installed.client_secret;
    var clientId = credentials.installed.client_id;
    var redirectUrl = credentials.installed.redirect_uris[0];
    //  var redirectUrl = "www.google.com";
    var auth = new googleAuth();
    var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, function (err, token) {
        if (err) {
            getNewToken(oauth2Client, callback);
        } else {
            oauth2Client.credentials = JSON.parse(token);
            callback(oauth2Client);
        }
    });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
    var authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });
    console.log('Authorize this app by visiting this url: ', authUrl);
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter the code from that page here: ', function (code) {
        rl.close();
        oauth2Client.getToken(code, function (err, token) {
            if (err) {
                console.log('Error while trying to retrieve access token', err);
                return;
            }
            oauth2Client.credentials = token;
            storeToken(token);
            callback(oauth2Client);
        });
    });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
    try {
        fs.mkdirSync(TOKEN_DIR);
    } catch (err) {
        if (err.code != 'EEXIST') {
            throw err;
        }
    }
    fs.writeFile(TOKEN_PATH, JSON.stringify(token));
    console.log('Token stored to ' + TOKEN_PATH);
}

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listLabels(auth) {
    var gmail = google.gmail('v1');
    gmail.users.labels.list({
        auth: auth,
        userId: 'me',
    }, function (err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        var labels = response.labels;
        if (labels.length == 0) {
            console.log('No labels found.');
        } else {
            console.log('Labels:');
            for (var i = 0; i < labels.length; i++) {
                var label = labels[i];
                console.log('- %s', label.name);
            }
        }
    });


}



function listMessages(auth) {
    var gmail = google.gmail('v1');
    gmail.users.messages.list({
        auth: auth,
        userId: 'me',
    }, function (err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        //      console.log(response);
        //    var labels = response.labels;
        var labels = response.messages;
        console.log(JSON.stringify(response.messages));
        fs.writeFile('myjsonfile.json', JSON.stringify(response.messages), 'utf8', function () {
            console.log("file done");
        });
        if (labels.length == 0) {
            console.log('No labels found.');
        } else {
            console.log('Messages:');
            for (var i = 0; i < labels.length; i++) {
                var label = labels[i];
                console.log('- %s', label.id);
            }
        }
    });


}



//function getContacts(auth){
//    var c = new GoogleContacts({
//  token: 'oauth2 token...'
//});
// 
//c.getContacts(cb, params);
//}


function getMessage(userId, messageId, callback) {
    var request = gapi.client.gmail.users.messages.get({
        'userId': userId,
        'id': messageId
    });
    request.execute(callback);
}


function listMessageDetail(auth) {

    var content = fs.readFileSync("myjsonfile.json");

        console.log(content.toString());
    var all_mails = content.toString();


    var tmp = JSON.parse(all_mails);

    all_mails = tmp;

    var responseArr = [];

    for (var i = 0; i < all_mails.length; i++) {

        //        console.log(all_mails[i]);

        var gmail = google.gmail('v1');
        gmail.users.messages.get({
            auth: auth,
            'userId': 'me',
            //    'id': '15bda7fc179358b1'
            'id': all_mails[i]["id"]
        }, function (err, response) {
            if (err) {
                console.log('The API returned an error: ' + err);
                return;
            }
            
                          console.log(response.snippet);
            var tmp_obj = {};
            
            tmp_obj.id=response.id;
            tmp_obj.labels=response.labelIds;
            tmp_obj.snippet=response.snippet;
            
            
            responseArr.push(tmp_obj);
            console.log(responseArr.length);
            
            if(i>=98){
                fs.writeFile('detail_mail_priya.json', JSON.stringify(responseArr), 'utf8', function () {
                    console.log("file done");
                });
            }

        });
        
        
        
    }


    



}
