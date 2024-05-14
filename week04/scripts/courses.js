// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],
    enrollStudent: function (sectionNum) {
        this.sections[sectionNum].enrolled++;
        fillTable(this.sections);
    },
    dropStudent: (sectionNum) => {
        this.sections[sectionNum].enrolled--;
        fillTable(this.sections);
    },
};


function SetCourse(course) {
    const courseName = document.getElementById("courseName");
    const courseNumber = document.getElementById("courseCode");

    courseName.textContent = course.name;
    courseNumber.textContent = course.code;
}

function fillTable(sections) {
    const sectionTable = document.getElementById("sections");

    sectionTable.innerHTML =
        `<tr>
        <td>${sections[0].sectionNum}</td>
        <td>${sections[0].roomNum}</td>
        <td>${sections[0].enrolled}</td>
        <td>${sections[0].days}</td>
        <td>${sections[0].instructor}</td>
        </tr>
        <tr>
        <td>${sections[1].sectionNum}</td>
        <td>${sections[1].roomNum}</td>
        <td>${sections[1].enrolled}</td>
        <td>${sections[1].days}</td>
        <td>${sections[1].instructor}</td>
        </tr>`;
}

SetCourse(aCourse);
fillTable(aCourse.sections);

document.getElementById("enrollStudent").addEventListener('click', aCourse.enrollStudent(document.getElementById("sectionNumber").value));