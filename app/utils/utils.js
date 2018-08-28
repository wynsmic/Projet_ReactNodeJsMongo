// Look for an item in a list and update with new one where matching labels
export function immutableUpdate(itemsArray, newItem, ...labelsToFind){

	let index = itemsArray.findIndex(item => 
		labelsToFind.map(label => item[label] === newItem[label]).every(e => e ===true));
	let updatedItemsArray = itemsArray.slice();
	if (index >=0) {updatedItemsArray.splice(index, 1, newItem);}
	return updatedItemsArray;
}

// Look for olditem AND newitem in a list; if the latter is not found then it's an update, otherwise a swap.
export function immutableSwap(itemsArray, oldItem, newItem, ...labelsToFind){

	let indexOld = itemsArray.findIndex(item => 
		labelsToFind.map(label => item[label] === oldItem[label]).every(e => e ===true));
	let indexNew = itemsArray.findIndex(item => 
		labelsToFind.map(label => item[label] === newItem[label]).every(e => e ===true));
		
	let updatedItemsArray = itemsArray.slice();
	if (indexOld >=0) {updatedItemsArray.splice(indexOld, 1, newItem);}
	if (indexNew >=0) {labelsToFind.map(label=> updatedItemsArray[indexNew][label]= oldItem[label]);}
	return updatedItemsArray;
}

// Look into a list of items
export function getIdArray(field, value, array){
	let immutablearray = array.slice();
	let item = immutablearray.find(row => row[field] === value);
	return item;
}

// Delete
export function immutableDelete(itemsArray, labelToFind, deletedItem){
	let index = itemsArray.findIndex(item => item[labelToFind] === deletedItem[labelToFind] );
	let updatedItemsArray = itemsArray.slice();
	updatedItemsArray.splice(index, 1);
	return updatedItemsArray;
}

// Add
export function immutableAdd(itemsArray, addedItem){
	    return [ ...itemsArray.slice(), addedItem   ]
}