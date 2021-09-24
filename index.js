// Write your solution in this file!
const employee = {
    streetAddress: "",
    name: ""
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // let obj = {}
    // obj[key] = value
    // return Object.assign({}, employee, obj);

    const newObj = { ...employee };
    newObj[key] = value
    return newObj
}
 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee 
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee };
    delete newObj[key];

    return newObj
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee
}