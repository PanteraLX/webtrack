'use strict';

describe('Service: userDataadapter', function () {

  // load the service's module
  beforeEach(module('webtrackApp'));

  // instantiate service
  var userDataadapter;
  beforeEach(inject(function (_userDataadapter_) {
    userDataadapter = _userDataadapter_;
  }));

  it('should do something', function () {
    expect(!!userDataadapter).toBe(true);
  });

});
