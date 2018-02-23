class Sorter {
  constructor(sorter) {
  	this.addedElements = [];
  	this.compare = (a,b) => a - b;   
  }


  add(element) {
    this.addedElements.push(element);
  }

  at(index) {
    return this.addedElements[index];
  }

  get length() {
    return this.addedElements.length;
  }

  toArray() {
    return this.addedElements;
  }

  sort(indices) {

  	var sortingElements = [];
  	if (indices.length > 1){
	  	for (var i = 0; i < indices.length; i++){
	  		sortingElements.push(this.addedElements[indices[i]]);
	  	}
	  	sortingElements.sort(this.compare);
	  	indices.sort((a,b) => a - b);
	  	for(var j = 0; j < indices.length; j++) {
	  		this.addedElements[indices[j]] = sortingElements[j];
	  	}
	  }
  }

  setComparator(compareFunction) {
    return this.compare = compareFunction;
  }
}

module.exports = Sorter;