let studentscore = 95;

function calculateGrade(score)
{
    switch (true)
    {
        case score >=90:
            return "A grade"
        case score >=80:
            return "B grade"
        case score >=70:  
            return "C grade"
        case score >=60:
         return "D Grade"
        default:
            return "Fail"

     }
    }

    let result = calculateGrade(studentscore);
    console.log(result);

