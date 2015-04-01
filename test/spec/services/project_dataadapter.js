'use strict';

describe('Service: projectDataadapter', function () {

  // load the service's module
  beforeEach(module('webtrackApp'));

  // instantiate service
  var projectDataadapter;
  beforeEach(inject(function (_projectDataadapter_) {
    projectDataadapter = _projectDataadapter_;
  }));

  it('should do something', function () {
    expect(!!projectDataadapter).toBe(true);
  });

});
