# Tube2Flix
This is a fun app that lets you create playlists from youtube and present it like old Netflix. Its still very much under construction. It uses localstorage for persistence.

## Step 1: First, you will need to install git, node, npm and webpack

###You will need to install git. I recommend using brew.
Install brew from http://brew.sh/
Your computer will ask to install Xcode if you don’t have it already. Install it.
Once brew is installed, run:

    brew install git

### Install node 
Install from https://nodejs.org. This will also install npm

    npm install webpack -g
    npm install webpack-dev-server -g

### Get the source code

    git clone https://github.com/rajeshnaroth/curator.git

## Step 2: Install all the required node modules
    cd curator-web
    npm install

## Step 3. Package, Run the express server and test
cd to curator-web and run:
    npm start

open http://localhost:5000/ This is where your app is running

In dev mode express will run using webpack middleware. It also includes hot module reloading.
Not very useful in the beginning I should admit.

### Karma tests
Do not use your global installation if it is not the exact version in package.json
Run:
    node_modules/karma-cli/bin/karma start

### Notes
Go easy on the app. I am using my personal youtube API id in the calls. I know its a bad idea to put it in the code. I'll move it to an env variable soon. At least this will get you started.

The app works fine on Chrome, FF and Safari. Make sure your security settings doesn't block localStorage access. FF has some weird CSS transition issue. Still debugging that. 