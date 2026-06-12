function getAverage(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++)
    sum += arr[i];
  return sum / arr.length;
}
function getGrade(score){
  if(score == 100){
    return "A+"
  }
  else if(score >= 90){
    return "A"
  }
  else if(score >= 80){
    return "B"
  }
  else if(score >= 70){
    return "C"
  }
  else if(score >= 60){
    return "D"
  }
  return "F"
}

function hasPassingGrade(score){
  let grade = getGrade(score);
  if(grade != 'F'){
    return true;
  }
  return false;
}

function studentMsg(arr, score){
  let avg = getAverage(arr);
  let grade = getGrade(score);
  let is_passed = hasPassingGrade(score);
  if(is_passed){
    return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
  }
  return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
  
}
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100)
)

