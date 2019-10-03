const axios = require('axios')

const postToSlack = data => {
  //   const { SLACK } = process.env
  //   axios.post(
  //     'https://hooks.slack.com/services/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',
  //     { test: 'test' }
  //   )

  const options = {
    text: 'workds',
  }

  axios
    .post(
      'https://hooks.slack.com/services/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',
      JSON.stringify(options)
    )
    .then(response => {
      console.log('SUCCEEDED: Sent slack webhook: \n', response.data)
    })
    .catch(error => {
      console.log('FAILED: Send slack webhook', error)
    })
}
console.log('test.js')
postToSlack()
