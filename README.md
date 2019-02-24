# challenge-certi
Internship test that converts numbers into JSON with full number in portuguese.

>e.g. ```localhost:3000/112``` will print ```{"id": "cento e doze"}``` on screen.

This appication was built with node.js (v10.15.1), express.js (v4.16.4) and yarn (v1.13.0).
## Installation guide

Clone this repository at your current location: 

```bash

git clone https://github.com/rongzinho/challenge-certi.git

# enter at the directory
cd challenge-certi

```

> IMPORTANT: The following steps must be done inside the directory.

### linux

In the terminal:

#### node

If your linux is based on Debian (e.g. Ubuntu, Mint), follow the instructions with no change. In case you use other distribution, go to https://nodejs.org/en/download/

```bash

sudo apt install curl

curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -

sudo apt install nodejs

# check node version
node --version

```

#### yarn

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn

# check yarn verion
yarn --version
```

>Reference: https://yarnpkg.com/lang/en/docs/install/#debian-stable

### macOS

In the terminal:

#### homebrew

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)
```

#### node
```bash
brew install node

# check node version
node --version
```
#### yarn

```bash
brew install yarn

# check yarn version
yarn --version

```

### windows

#### node
Download installer and follow the wizard.

https://nodejs.org/en/download/

#### yarn

Download installer and follow the wizard.

https://yarnpkg.com/lang/en/docs/install/#windows-stable

## Dependencies

```bash

# install package dependencies
yarn install

```

## Running the application

```bash

# runs application at port 3000
yarn run server

# or using node:
node app.js 

```

Open ```http://localhost:3000``` in your browser.

To see the conversion of the request into a full number do a request in the browser's URL, append ```/NUMBER_THAT_YOU_WANT``` to the URL, e.g. ```http://localhost:3000/2222``` will print ```{"id": "dois mil duzentos e vinte e dois"}``` on screen.

> The conversion cover integers between [-99999, 99999].

## Guides and Helpers

### yarn installation page
https://yarnpkg.com/lang/en/docs/install/#debian-stable

### node installation page
https://nodejs.org/en/download/

### Occupied port
If node throws an error telling the port ```3000``` is already been used, end the processes:

```bash
# list processes running at port 3000
lsof -i :3000

kill -9 PID_OF_THE_PROCESS
```
