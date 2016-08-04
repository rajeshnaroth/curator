# Curator web


## Step 1: First, you will need to install node, npm and webpack
Install node from https://nodejs.org. This will also install npm

    npm install webpack -g
    npm install webpack-dev-server -g

## Step 2: Install all the required node modules
    cd curator-web
    npm install

## Step 3. Package, Run the express server and test
cd to curator-web and run the following in different console tabs

    npm start
    webpack --progress --colors --watch
    node_modules/karma-cli/bin/karma start


open http://localhost:5000/ This is where your app is running

In dev mode express will run using webpack middleware. You dont need to run webpack
and karma in watch mode to just run the app. These are only to enhance the
dev experience.

### Karma tests
Do not use your global installation if it is not the exact version in package.json
node_modules/karma-cli/bin/karma start

## For those who are starting new
You will need to install git. I recommend using brew.
Install brew from http://brew.sh/
Your computer will ask to install Xcode if you don’t have it already. Install it.
Once brew is installed, run:

    brew install git

cd to your projects folder:

    git clone https://github.com/rajeshnaroth/curator.git
    cd curator/curator-web
    npm install
    webpack
    npm start
    open http://localhost:5000/

