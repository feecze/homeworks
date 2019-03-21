let monday = [
    {
        dayName: 'monday',
        lessonName: 'Math',
        lessonDuration: 45,
        lessonCount: 1
    },
    {
        dayName: 'monday',
        lessonName: 'English',
        lessonDuration: 45,
        lessonCount: 2
    },
    {
        dayName: 'monday',
        lessonName: 'IT',
        lessonDuration: 45,
        lessonCount: 3
    },
    {
        dayName: 'monday',
        lessonName: 'Rus',
        lessonDuration: 45,
        lessonCount: 4
    },
    {
        dayName: 'monday',
        lessonName: 'PE',
        lessonDuration: 45,
        lessonCount: 5
    },
]
let wednsday = [
    {
        dayName: 'wednsday',
        lessonName: 'Geometry',
        lessonDuration: 45,
        lessonCount: 1
    },
    {
        dayName: 'wednsday',
        lessonName: 'Literature',
        lessonDuration: 45,
        lessonCount: 2
    },
    {
        dayName: 'wednsday',
        lessonName: 'Dancing',
        lessonDuration: 45,
        lessonCount: 3
    },
    {
        dayName: 'wednsday',
        lessonName: 'History',
        lessonDuration: 45,
        lessonCount: 4
    },
    {
        dayName: 'wednsday',
        lessonName: 'Drawing',
        lessonDuration: 15,
        lessonCount: 5
    },
    {
        dayName: 'wednsday',
        lessonName: 'Biology',
        lessonDuration: 55,
        lessonCount: 6
    },
]
let titles = ['Дeнь', 'Урок', 'Длительность урока', 'По счету'];
let week = [monday, wednsday];

createTableHeader();
createTable(week);

function createTableHeader() {
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    for (i = 0; i < titles.length; i++) {
        let th = document.createElement('th');
        th.textContent = titles[i];
        tr.appendChild(th);
        table.appendChild(tr);
    }
    document.body.appendChild(table);
};
function createTable(week) {
    let table = document.querySelector('table');
    for (i = 0; i < week.length; i++) {
        for (j = 0; j < week[i].length; j++) {
            let lesson = week[i][j];
            let value = Object.values(lesson);
            let tr = document.createElement('tr')
            if (j === 0) {
                tr.classList.add('first_lesson');
            }else if (j === week[i].length - 1) {
                tr.classList.add('last_lesson');
            }
            for (m = 0; m < value.length; m++) {
                let td = document.createElement('td');
                td.textContent = value[m];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        
    }
}