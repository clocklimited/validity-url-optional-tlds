var validate = require('../validator')()
  , async = require('async')
  , should = require('should')

describe('URL Validation', function() {

  it('should correctly validate valid URLs', function (done) {
    var urls =
    [ 'http://www.google.com'
    , 'https://www.google.com'
    ,  'http://google.com'
    ,  'https://google.com'
    ,  'http://asddasads.google.com'
    ,  'http://asddasads.google.com/asddasads'
    ,  'http://asddasads.google.com/asddasads/asdass'
    ,  'http://asddasads.google.com/asddasads/asdass#'
    ,  'http://asddasads.google.com/asddasads/asdass?a=b'
    ,  'http://asddasads.google.com/asddasads/asdass?a=b#asdasd'
    ,  'http://a.co'
    ,  'http://user:password@a.com'
    ,  'http://user:password@a.com?f=b&b=a'
    ,  'http://user:password@www.a.com?f=b&b=a'
    ,  'http://user:password@www.a.a.a.a.a.a.a.a.a.a.a.a.com/mypage.html?f=b&b=a#'
    ,  'http://localhost'
    ,  'http://localhost:80'
    ,  'ftp://localhost:21'
    ,  'http://localhost/test'
    ,  'http://intranet:80'
    ,  'http://intranet:80/test'
    ]

    async.each(urls, function (value, cb) {
      validate('url', 'url', { url: value }, function (err, errMessage) {
        if (err) return cb(err)
        should.not.exist(errMessage, 'Should be valid: ' + value)

        cb(err)
      })
    }, function (err) {
      done(err)
    })

  })

  it('should correctly return false for invaild URLs', function (done) {
    var urls =
    [ 'google.com'
    , 'sfsdfsd'
    , 'http://'
    , 'www.fred.com'
    , 'google.com/asddasads/asdass?a=b#asdasd'
    , 'localhost'
    , 'localhost:80'
    ,  null
    , undefined
    , ''
    ,  new Date()
    ,  1
    ,  '1'
    ]

    async.each(urls, function(value, cb) {
      validate('url', 'url', { url: value }, function (err, errMessage) {
        if (err) return cb(err)
        should.ok(errMessage, 'This is considered a value URL ' + value)
        errMessage.should.equal('url must be a valid URL')

        cb(err)
      })
    }, function (err) {
      done(err)
    })

  })

})