/* Your Code Here */
function createEmployeeRecord(employeeArray) {
    let employeeObject = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeObject
}

function createEmployeeRecords(employeeArrays) {
    return employeeArrays.map(data => createEmployeeRecord(data))
}

function createTimeInEvent(dateStamp) {
    let timeData = dateStamp.split(" ")
    let date = timeData[0]
    let hour = parseInt(timeData[1])
    let time = {
        type: "TimeIn",
        hour: hour,
        date: date
    }
    this.timeInEvents.push(time)
    return this;
}

function createTimeOutEvent( dateStamp) {
    let timeData = dateStamp.split(" ")
    let date = timeData[0]
    let hour = parseInt(timeData[1])
    let time = {
        type: "TimeOut",
        hour: hour,
        date: date
    }
    this.timeOutEvents.push(time)
    return this;
}

function hoursWorkedOnDate(date) {
    let findTimeInDate = this.timeInEvents.find((object) => object.date === date);
    let startTime = findTimeInDate.hour;
    let findTimeOutDate = this.timeOutEvents.find((object) => object.date === date);
    let endTime = findTimeOutDate.hour;
    return (endTime - startTime) * .01;
  }

  function wagesEarnedOnDate(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 

    return payable

}
function findEmployeeByFirstName(srcArray, firstName) {
    let findName = srcArray.find(
      (employees) => employees.firstName.toLowerCase() === firstName.toLowerCase()
    );
    return findName;
  }


const calculatePayroll = function(employeeArray){
    let payrollTest = employeeArray.map((employee) => allWagesFor.call(employee));
    const sum = (sum1, sum2) => sum1 + sum2;
    return payrollTest.reduce(sum);
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

