function scrollwindow(){
   var right=document.querySelector(".window");
    console.log(right);
    right.scrollBy(300,0);
 }
 function scrollwindow1(){
    var left=document.querySelector(".window");
    left.scrollBy(-300,0);
 }
 function updateSubjects() {
   const semesterSelect = document.getElementById('semester');
   const subjectSelect = document.getElementById('subject');
 
   // Clear existing options
   subjectSelect.innerHTML = '';
 
   // Get the selected semester value
   const selectedSemester = semesterSelect.value;
 
   // Define subject options based on the selected semester
   let subjectOptions = [];
 
   if (selectedSemester === '1') {
     subjectOptions = ['C', 'Digital'];
   } else if (selectedSemester === '2') {
     subjectOptions = ['Micro', 'C++'];
   } else if (selectedSemester === '3') {
     subjectOptions = ['Java', 'MySQL'];
   }
 
   // Populate the subject select with the new options
   subjectOptions.forEach((subject) => {
     const option = document.createElement('option');
     console.log(subject)
     option.value = subject;
     option.textContent = subject;
     subjectSelect.appendChild(option);
   });
 }
 
 // Call the updateSubjects function initially to set the initial options
 updateSubjects();