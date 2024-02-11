//Database
const underwriters = [
    { id: 1, name: 'John Doe', dob: '1990-01-01', joiningDate: '2023-01-15', defaultPassword: 'password1' },
    { id: 2, name: 'Jane Smith', dob: '1985-05-20', joiningDate: '2022-12-01', defaultPassword: 'password2' },
    { id: 3, name: 'Bob Johnson', dob: '1988-07-12', joiningDate: '2023-02-28', defaultPassword: 'password3' },
    { id: 4, name: 'Emily Davis', dob: '1992-03-05', joiningDate: '2022-11-10', defaultPassword: 'password4' },
    { id: 5, name: 'Alex Turner', dob: '1987-09-18', joiningDate: '2023-03-22', defaultPassword: 'password5' },
    { id: 6, name: 'Grace Miller', dob: '1995-12-08', joiningDate: '2022-10-03', defaultPassword: 'password6' },
    { id: 7, name: 'Tom Harris', dob: '1984-06-25', joiningDate: '2023-04-14', defaultPassword: 'password7' },
    { id: 8, name: 'Sophie Clark', dob: '1993-08-30', joiningDate: '2022-09-19', defaultPassword: 'password8' },
    { id: 9, name: 'Mike Turner', dob: '1986-11-15', joiningDate: '2023-05-27', defaultPassword: 'password9' },
    { id: 10, name: 'Olivia Brown', dob: '1991-04-03', joiningDate: '2022-08-07', defaultPassword: 'password10' }
];

//Generate data +display it
render();
function render(){
    let underwritersList='';
    underwriters.forEach((items,i)=>{
        const{id,name,dob,joiningDate}=items;
        const html=`<div class="firstrow">${id}</div>
        <div>${name}</div>
        <div>${dob}</div>
        <div>${joiningDate}</div>`;
        underwritersList+=html;
    })
    document.querySelector(".js-database").innerHTML=underwritersList;
}

function addInDatabase(){
    let inputId=document.querySelector("#underWriterId").value ;
    let inputFName=document.querySelector("#firstName").value ;
    let inputLName=document.querySelector("#lastName").value ;
    let inputDOB=document.querySelector("#dob").value ;
    let inputJoiningDate=document.querySelector("#joiningDate").value ;

    underwriters.push({
        id:inputId, name:inputFName+ " "+inputLName, dob:inputDOB , joiningDate:inputJoiningDate
        
    });
    inputId=''; inputFName='';inputLName='';inputJoiningDate='';
    render();
}

document.querySelector("#reg-btn").addEventListener('click',()=>{addInDatabase()});