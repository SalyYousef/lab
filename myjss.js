const Student=[
{id:101, name: 'saly', phone:'123-456-678',major:'SE'},
{id:101, name: 'ahemed', phone:'453-896-678',major:'NES'},
{id:101, name: 'sara', phone:'183-496-878',major:'SE'},
{id:101, name: 'saif', phone:'673-566-698',major:'NES'},
{id:101, name: 'lma', phone:'123-456-678',major:'SE'},
];
function fillterStudent(major){
    const fillterStudent=student.fillter(student=>
        student.major===major);
        displayAll(fillterStudent);
    
}
function displayAll(fillterStudent)
{
const tableBody=document.getElementById('studentTable').getElementsByTagName('tbody')[0];
tableBody.innerHTML='';

fillterStudent.forEach(student=>{
    const row=tableBody.insertRow();
    row.innerHTML=`
    <td>${student.id}</td>
    <td>${student.name}</td>
    <td>${student.phone}</td>
    <td>${student.major}</td>
    
    
    `;
})
displayAll(students);
}