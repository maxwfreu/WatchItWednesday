# WatchItWednesday

## Running locally
```
npm install
npm run dev
```

## Deploying
This site is hosted through Netlify with continous deployments under `master`
To deploy simply push to master.

### Deploying using Netlify CTL
If you don't want to push to master for somereason, and need to deploy, you can kick off a deployment using the netlify comand line tools.
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
