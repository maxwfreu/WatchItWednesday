# WatchItWednesday

## Running locally
```
npm install
npm run dev
```

## Deploying
This site is hosted through Netlify with continous deployments under `master`

### Deploying using Netlify CTL
First, make sure you have the command line tools installed
```
npm install netlify-cli -g
```
Then build and export the project
```
npm run export
```
Navigate to the `out` directory that is generated, and run:
```
netlify deploy
```
