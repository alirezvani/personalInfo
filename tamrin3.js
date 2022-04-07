var personalInfo = [];

// check for existing Employee
function checkEmployee(firstName, lastName) {
  for (let index = 0; index < personalInfo.length; index++) {
    let item = personalInfo[index];
    if (item.firstName === firstName && item.lastName === lastName) {
      return true;
    }
  }
  return false;
}

// add Employee to personalInfo and meet conditions 
function addEmployee(firstName, lastName, hourPerMonth, salaryPerHour) {

  if (hourPerMonth > 160) return 'hourPerMonth is too much';

  if (checkEmployee(firstName, lastName)) {
    return `${firstName} ${lastName} exists in personalInfo`;

  } else {
    personalInfo.push({
      'firstName': firstName,
      'lastName': lastName,
      'hourPerMonth': hourPerMonth,
      'salaryPerHour': salaryPerHour
    });
  }
  return personalInfo;
}

// check for existing Employee and remove it
function removeEmployee(firstName, lastName) {
  for (index = 0; index < personalInfo.length; index++) {
    let item = personalInfo[index];
    if (item.firstName === firstName && item.lastName === lastName) {

      console.log(`user exists in our database`);
      item.splice(index, 1);
      return item;
    } else {
      return {};


    }
  }
}

function removeWithRange(min, max) {
  const count = {};
  for (index = 0; index < personalInfo.length; index++) {
    let item = personalInfo[index];
    if (item in count) {
      count[item] += 1;
    } else {
      count[item] = 1;
    }

  }

}


function findMaxSalary() {
  let maxSalary = 0;
  for (index = 0; index < personalInfo.length; index++) {
    let item = personalInfo[index];
    const Salary = item.hourPerMonth * item.salaryPerHour;
    if (Salary > maxSalary) {
      maxSalary = Salary;
    }


  }
  return maxSalary;
}

function findMinSalary() {
  let minSalary = findMaxSalary();
  for (index = 0; index < personalInfo.length; index++) {
    let item = personalInfo[index];
    const Salary = item.hourPerMonth * item.salaryPerHour;
    if (Salary < minSalary) {
      minSalary = Salary;
    }


  }
  return minSalary;
}

function calculateAvg(){
 let totalSalary = 0;
 for (index = 0; index < personalInfo.length; index++){
  let item = personalInfo[index];
  const Salary = item.hourPerMonth * item.salaryPerHour;
  totalSalary += Salary;

 }
 let salaryAvg = totalSalary / personalInfo.length;
return  salaryAvg;

}

function salaryInfo(){
  let aboveList = [];
  let belowList = [];
for (index = 0; index < personalInfo.length; index++){
    let item = personalInfo[index];
    const Salary = item.hourPerMonth * item.salaryPerHour;
    if (Salary > calculateAvg()){
      aboveList.push(item);
      return aboveList;
}
 if (Salary < calculateAvg()){
  belowList.push(item);
}
}

return aboveList;
}