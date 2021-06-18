
## Getting Started

### Prerequisites

* NodeJS (v12.0.0)
* NPM (v6.9.0)


The first thing you need to do to get this app working is to install the Node modules 
with the following command: 
(installs dependencies, then calls the install from the package.json scripts field.)

### Into the root proyect
### Step 1 - `npm install`


The second thing compile the JavaScript and assets into the build directory and wait for the folder "build" to be created
with the following command:
 
### Into the root proyect
### Step 2 - `npm run build`


The third thing determining Deployment File Location on your Server,  example (/var/www/your_domain/html) and copy
 
### Step 3 - Node Modules
### `scp -r ./build/* username@server_ip:/var/www/your_domain/html`

