[![Build Status](https://travis-ci.org/bostontrader/polo-catbox-compare2real.svg?branch=master)](https://travis-ci.org/bostontrader/polo-catbox-compare2real)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/bostontrader/polo-catbox-compare2real.svg)](https://david-dm.org/bostontrader/polo-catbox-compare2real)
[![devDependency Status](https://david-dm.org/bostontrader/polo-catbox-compare2real/dev-status.svg)](https://david-dm.org/bostontrader/polo-catbox-compare2real#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/bostontrader/polo-catbox-compare2real/badge.svg)](https://snyk.io/test/github/bostontrader/polo-catbox-compare2real)

# Introduction

The purpose of this project is to provide a realistic test for the polo-catbox and polonlyze projects by putting them to work simultaneously using data from a live Polo account.

The basic drill is that polo-catbox-compare2real will read activity history from a live Polo account, and use that history to populate a polo-catbox server.  Next, execute a variety of read-only API calls against both servers and compare the results.  Finally, execute polonlyze against both servers and again compare the results.


# Getting Started

Node 8.4 is a prerequisite.

```
$ git clone http://github.com/bostontrader/polo-catbox-compare2real
$ cd polo-catbox-compare2real
$ npm install
$ npm test
```

Notice there is no "npm start".  We only run the test.

# Configuration

**polo-catbox** uses [config](https://github.com/lorenwest/node-config) to manage run-time configuration.  This is very malleable but its care and feeding is outside the scope of this document.  If you need fancy features this department please consult the relevant documentation.

The following elements of configuration are available:

* url-polo-catbox - This is the location of a running polo-catbox server.

* url-poloniex - This is the location of the real Polo server.

* polo-keyfile - This is the location of a file that contains your real Polo API key and secret.  Although the example is within this project, I suggest you put it somewhere else lest this sensitive info inadvertently find its way into some public SCM.

* start - The starting time for history retrieval.

* end - The ending time.

* forReal - Put this key in any configuration that ought to really run.  Travis CI doesn't have much to do and I'm not letting him have any real API keys.  But I still want this project integrated into Travis.

By default the "default" config will be used.  You can create another config such as "production" if you like and use it instead of default by setting the environment variable NODE_ENV=production.  If you do this, then all settings are set by the default config but you may override them using the production config.


# On Nonces

Each call to the private trading API includes a "nonce."  The nonce is an integer that must be higher than the previous highest nonce.  A common way to get a good nonce is to simply use the Date.now() function.  Recall that that function will return an integer number of ms since the dawn of Unix time, so there's room for confusion.

This project uses Date.now() for its nonce.  If this conflicts with your present system, please adapt.  Also realize that you can have muliple API key/secret pairs.  One for this project and one for your other work.

# Dependencies

* config - A method of feeding runtime configuration to the executable.

* crypto - We need this to sign our API requests.  This seems to be deprecated in favor a module that's built into Node.

* request - This project needs to make HTTP requests.

* request-promise-native - The HTTP requests must return native ES6 promises.

# Tipjar
BTC: 1NyKNEAiF5VfSivXi9C9sXbsThpYjz1RUE

LTC: LQiT8imDmeQgErJsohA5DJhXYF2rMkcku8

CLAM: xQs7jvwin9SPy3oBjQyrYTNCZp62pp1qzU
