function Student(name, roll_no, class_, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class_ = class_;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;
    this.printTop3Subjects = function() {
        let marks = Object.entries(this.marks_of_5_subjects);
        marks.sort((a, b) => b[1] - a[1]);
        console.log(`Top 3 subjects based on marks: ${marks[0][0]}, ${marks[1][0]}, ${marks[2][0]}`);
    };
    this.printReportCard = function() {
        let total_marks = Object.values(this.marks_of_5_subjects).reduce((a, b) => a + b);
        let percentage = (total_marks / 500) * 100;
        console.log(`+----------------------+
|     REPORT CARD      |
+----------------------+
| Name       - ${this.name} |
| Roll no.   - ${this.roll_no}      |
| Class      - ${this.class_}       |
| Section    - ${this.section}       |
| Science    - ${this.marks_of_5_subjects.science}      |
| S.Sc       - ${this.marks_of_5_subjects.social_science}      |
| Maths      - ${this.marks_of_5_subjects.maths}      |
| English    - ${this.marks_of_5_subjects.english}      |     
| Hindi      - ${this.marks_of_5_subjects.hindi}      |
| Percentage - ${percentage.toFixed(1)} %  |
+----------------------+`);
    };
}

let student1 = new Student("Huzaifa", 16, "X", "A", {science: 73, maths: 75, social_science: 79, english: 80, hindi: 67});
student1.printTop3Subjects();
student1.printReportCard();
