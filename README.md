# Indie Game Con Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/a3c1521d-8847-4646-a55d-5ec4e170a151/deploy-status)](https://app.netlify.com/sites/indiegamecon/deploys)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=mckelveygreg/indiegamecon-gatsby)](https://dependabot.com)

## [Live Site](https://indiegamecon.netlify.com)

## Build Instructions

### Environment set up

1. `yarn`
1. Airtable setup

```
$> cp sample.env .env.development
$> cp sample.env .env.production
```

add your api key to `GATSBY_AIRTABLE_API_KEY=YOUR_API_KEY` to each .env\* - Find your api key in your Airtable account

### Development

For development, `yarn start`

### Production

To view a production build, `yarn build` and `yarn serve`

### Slack

notifications sent to David Lo when any submits a game
