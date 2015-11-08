# rc4fbx

Remote Control 4 Freebox

![Stable version](https://img.shields.io/badge/stable-1.0.0-blue.svg)
[![BSD-3 license](https://img.shields.io/badge/license-BSD--3--Clause-428F7E.svg)](https://tldrlegal.com/license/bsd-3-clause-license-%28revised%29)

## Description

[rc4fbx](https://github.com/cyosp/rc4fbx) is a HTML static web page which allows to have a remote control for the box of the [Free](http://www.free.fr) Internet provider.

This box is called the [Freebox](http://www.free.fr/adsl/freebox-revolution.html) and can be driven using HTTP requests.

Thus with [rc4fbx](https://github.com/cyosp/rc4fbx) it's possible to remote control your [Freebox](http://www.free.fr/adsl/freebox-revolution.html) with a web browser.

In this way you can do it using your:

 * Computer or Laptop with:
	* Unix / Linux
	* Windows
	* Mac OS X
	* ...

 * Smartphone or Tablet with:
	* Android
	* iOS
	* Windows Phone
	* BlackBerry OS
	* ...

## Usage

[rc4fbx](https://github.com/cyosp/rc4fbx) works only if you are in the same network of the [Freebox](http://www.free.fr/adsl/freebox-revolution.html).

In other words you must be at home to have it working.

## Deployment

There are two possibilities to host [rc4fbx](https://github.com/cyosp/rc4fbx):
 * On a web server such as [LIGHTTPD](http://www.lighttpd.net) or [Apache](https://httpd.apache.org/)
 * Directly on each device which must be used as a remote control

## Configuration

[rc4fbx](https://github.com/cyosp/rc4fbx) needs to configure two things:
 * Freebox hostname or IP
 * Command identifier

They must be filled in the JavaScript configuration file:

	rc4fbx/js/config.js

### Freebox hostname or IP

Is used to specify which box must receive the request.

By default it's: **hd1.freebox.fr** which must be configured in **config.freeboxHost**.

### Command identifier

It's the identifier of the remote control provided by [Free](http://www.free.fr).

With a [Freebox V6](http://www.free.fr/adsl/freebox-revolution.html) it can be retrieved with this steps:
 * Power on [Freebox V6](http://www.free.fr/adsl/freebox-revolution.html)
 * In *Réglages* select *Télécommande*
 * At the screen bottom, code is displayed after label: *Code Télécommande réseau:*

### Sample configuration file

```js
var config =
{
	freeboxHost:       "hd1.freebox.fr" ,
	remoteControlCode: "12345678"
};

```

## License

**rc4fbx** is released under the BSD 3-Clause License. See the bundled `LICENSE.md` for details.