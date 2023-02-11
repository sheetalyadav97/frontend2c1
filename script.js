let arr= [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentbyMap() {
   arr.map(value=>{
    if(value.marks > 50)
    console.log(value.name);
   })
  }
  PrintStudentbyMap();
  
  
  function PrintStudentbyForEach() {
  arr.forEach(value=>{
    if(value.marks > 50);
    console.log(value.name);
  })
  }
  PrintStudentbyForEach();
  
  function addData() {
    let object = {id:4,name:"susan",age:"20",marks:45};
    arr.push(object);
    console.log(arr);
  }
  addData();
  let arr2= [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  let arr3 = [
    {id: 4, name: "ssh", age:"35", marks:"95" },
    {id: 5, name: "ravi",    age:"25", marks:"90" },
    {id: 6, name: "shet",  age:"19", marks:"70" },
  ];
  function removeFailedStudent() {
   
    let arr4 = arr2.filter(value=>{
      return value.marks >50
    })
    console.log(arr4);
  }
  removeFailedStudent();
  
  
  
  
  
  
  
  function concatenateArray() {
    
    let conctt = arr2.concat(arr3);
    console.log(conctt);
  }
  concatenateArray();