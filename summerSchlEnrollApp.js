// Enroll in summer school
// Take up to 10 minutes to write a function called enrollInSummerSchool that
// takes a single argument, students. students is an array of objects, with
// each object representing a student — for example, {name: 'Tim', status:
// 'Current student', course: 'Biology'}.
//
// enrollInSummerSchool should return an array of objects. For each object from
// the original array, it should return the original name and course, but
// should update the status to In Summer school.
 
var studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science'
  }
];

// function enrollInSummerSchool(students) {
//   // your code here

//   let stdStatus = [];
//   for (let i = 0; i < students.length; i++) {
//     stdStatus.push({
//       name: students[i].name,
//       status: 'In Summer school',
//       course: students[i].course,
//     })
//   }
//    return stdStatus;
// }


function enrollInSummerSchool(students) {
  // your code here
  return students.map(std => {
    return {
      name: std.name,
      status: 'In Summer school',
      course: std.course,
    }
  });
}



/* From here down, you are not expected to understand.... for now :)
  Nothing to see here!

*/

// tests


function testIt() {
  var testData = [
    {
      name: 'Burt',
      status: 'Playing hooky',
      course: 'Biology'
    },
    {
      name: 'Melanie',
      status: 'Sick',
      course: 'Mathematics'
    },
    {
      name: 'Leonard',
      status: 'AWOL',
      course: 'Computer science'
    }
  ];

  var results = enrollInSummerSchool(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `enrollSummerSchool` must return an array');
    return
  }

  for (var i=0; i<testData.length; i++) {
    var result = results.find(function(_result) {
      return (
        _result.name === testData[i].name &&
        _result.course === testData[i].course &&
        _result.status === 'In Summer school');
    });
    if (!result) {
      console.error(
        'FAILURE: `enrollSummerSchool` should return ' +
        'original key/value pairs for each student, and ' +
        'update `status` to "In Summer school"');
      return
    }
  }
  console.info('SUCCESS: `enrollSummerSchool` is working');
}

testIt();
