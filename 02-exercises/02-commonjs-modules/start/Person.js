class Person {
  constructor(opts) {
    this.knowsKungFu = false;
	Object.keys(opts).forEach(key => {
	  this[key] = opts[key];
	});
  }
}

// TODO: How do we expose the constructor AS the module?
CHANGE.ME = Person;