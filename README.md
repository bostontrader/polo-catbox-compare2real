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


# Tipjar
BTC: 1NyKNEAiF5VfSivXi9C9sXbsThpYjz1RUE
LTC: LQiT8imDmeQgErJsohA5DJhXYF2rMkcku8
CLAM: xQs7jvwin9SPy3oBjQyrYTNCZp62pp1qzU
