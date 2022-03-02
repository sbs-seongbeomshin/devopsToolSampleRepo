import AWS from 'aws-sdk';
import { eventEmitter, Events } from '../common/utils/eventEmitter';

class EmailService {

  async init() {
    AWS.config.update({region: 'ap-northeast-2'})

    eventEmitter.on(Events.SEND_EMAIL, async ({ email }) => {
      let params = {
        Destination: {
          CcAddresses: [
          ],
          ToAddresses: [
            email
          ]
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: "HTML_FORMAT_BODY"
            },
            Text: {
              Charset: "UTF-8",
              Data: "TEXT_FORMAT_BODY"
            }
          },
          Subject: {
            Charset: "UTF-8",
            Data: 'Test Email'
          }
        },
        Source: 'noti@soulenergy.co.kr',
        ReplyToAddresses: [
          'noti@soulenergy.co.kr'
        ]
      };
    let sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

    sendPromise.then(
      function(data) {
        console.log(data.MessageId);
      }).catch(
        function(err) {
          console.log(err)
        }
      )

    })
  }
}

export default EmailService;