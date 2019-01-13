# Indie Game Con Website
[![Build Status](https://travis-ci.com/mckelveygreg/indiegamecon-gatsby.svg?branch=master)](https://travis-ci.com/mckelveygreg/indiegamecon-gatsby)

## Build Instructions
### Environment set up
1. `npm install`
  optional
  `npm install gatsby-cli` for gatsby commandline ease
1. Airtable setup
  ```
  $> cp sample.env .env.development
  $> cp sample.env .env.production
  ```
  add your api key to `GATSBY_AIRTABLE_API_KEY=YOUR_API_KEY` to each .env*
    - Find your api key in your Airtable account
### Development
For development, `npm start` or `gatsby develop` if you have gatsby-cli installed globally

### Production
To view a production build, `npm run build` and you'll need to serve yourself
... or `gatsby build` then `gatsby serve` if you have gatsby-cli installed globally
