# Indie Game Con Website
[![Build Status](https://travis-ci.com/mckelveygreg/indiegamecon-gatsby.svg?branch=master)](https://travis-ci.com/mckelveygreg/indiegamecon-gatsby)

## [Live Site](https://indiegamecon.netlify.com)

## Build Instructions
### Environment set up
1. `yarn` then
  `yarn global gatsby-cli` for gatsby commandline ease
1. Airtable setup
  ```
  $> cp sample.env .env.development
  $> cp sample.env .env.production
  ```
  add your api key to `GATSBY_AIRTABLE_API_KEY=YOUR_API_KEY` to each .env*
    - Find your api key in your Airtable account
### Development
For development, `yarn start`

### Production
To view a production build, `yarn build` and `yarn serve`
