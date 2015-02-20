'use strict';

describe('Service: Testservice', function () {

  // load the service's module
  beforeEach(module('webtrackApp'));

  // instantiate service
  var Testservice;
  beforeEach(inject(function (_Testservice_) {
    Testservice = _Testservice_;
  }));

  it('should do something', function () {
    expect(!!Testservice).toBe(true);
  });

});
