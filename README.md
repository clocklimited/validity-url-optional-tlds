# validity-url-optional-tlds

Validity style validator which extends url to allow for non-tld urls.

## Installation

    npm install validity-url-optional-tlds

## Usage

Below is a simple example for usage with schemata:

```js

var validity = require('validity')
  , schemata = require('schemata')
  , save = require('save')
  , createUrlValidator = require('validity-url-optional-tlds')

var schema = schemata(
    { url:
      { type: String
      , validators: { all: [ createUrlValidator() ] }
      }
    })
```

## API

### var validate = createUrlValidator()

Create a validate function.

### validate(String:key, String:keyDisplayName, Object:object, Function:cb)

This is a validity compatible function, which in turn is used by schemata for
schema validation.

The callback signature cb(err, errorMessage).

err is an Error object if something bad happened and null otherwise.
errorMessage is a String if a validation error happened and undefined otherwise.

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)