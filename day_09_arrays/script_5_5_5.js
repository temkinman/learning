function copySorted(arr) {
    return arr.slice().sort();
}

const arr = ["HTML", "JavaScript", "CSS"];
const cloneArr = arr.slice().sort();

const sorted = copySorted(arr);

console.log(sorted);
console.log(arr);