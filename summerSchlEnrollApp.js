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
