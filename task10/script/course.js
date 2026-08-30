var courses = ["html", "css", "js"];

var newcourse = prompt("Enter a new course:");

if (newcourse === "") {
    alert("You must enter a course");
} else if (courses.includes(newcourse)) {
    alert("course already exists");
} else {
    courses.push(newcourse);
    console.log(courses);
    alert('course addedd sucssefully')
}