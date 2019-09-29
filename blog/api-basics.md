---
title:  "Node API Basic Tutorial"
date:   2019-09-15 20:00:07
description: "The very basics of how to do a REST API with Node"
---

This is a series of steps of how to develop your first REST API with NodeJS and Express.

## 0. Getting started

First things first, you need all of your tools ready. You need to have installed *Node* and *NPM*.

Fore verifying this, you need to run the following:
```bash
# Check for npm version, expected output 6.11.3
npm -v


# Check for node version, expected output v10.15.3
node --version
```

## 1. Install dependencies
For being able of running the api server, we need express. So for **installing** express, we need to initialize a npm repo with:

```bash
npm init -y
```

which will create a package.json for keeping track of all the dependencies, and then:

```bash
npm i express --save
```

for downlading and adding express to the `node_modules` folder, which will collect all the dependencies of the project.

## 2. Write your file
Create a file in the path of your preference. We will reference this folder as **root**.

In the root folder, with the editor of your preference, add a new file called `index.js`.

Inside the `index.js` file, we will write the following (don't worry, we will review line by line later):

```js
const app = require('express')();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(5000, () => console.log('Server running... '));
```

## 3. Execute your server
In order to run the server you only need to execute:
```bash
node index.js # Exected output: Server running...
```

Which will execute the file and run the server. Let's keep this running, and test it.

## 4. Test your api
Remember that this APIs architecture are server client based. In this case our server that is running is the sever side, soy now we need a client. There are several clients we may use, but `curl` is the easiest and quickest tools for creating a http request. So for testing our running server we need to execute:
```bash
# Expected output: Hello World!
curl http://localhost:5000/
```

## 5. Conclusion
This is the very basic of how to create a API, to receive and response HTTP responses.
