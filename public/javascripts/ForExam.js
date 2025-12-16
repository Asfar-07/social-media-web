  function newinput(){
    console.log("click")
    const messagesContainer = document.getElementById('createexam');
    const main= document.createElement('div');
    main.classList.add("addinput")
    messagesContainer.appendChild(main);
    const messageElement = document.createElement('input');
    const label = document.createElement('label');
  const inputElements=messagesContainer.querySelectorAll('.examtext')
  const totaldiv=document.getElementById("totaldiv")
   
  const cound=inputElements.length;
  console.log(cound)
   var cound2=cound+1
   if(cound2<10){
  label.textContent="qs"+cound2;
  main.appendChild(label);
  messageElement.classList.add("examtext")
  messageElement.id=('examtext')
  messageElement.placeholder="qs"
  messageElement.name="qs"+cound2
  main.appendChild(messageElement);
  const marklabel = document.createElement('label');
  marklabel.textContent="mark"
  main.appendChild(marklabel);
  const markElement = document.createElement('input');
  markElement.type="number";
  markElement.classList.add('mark')
  markElement.name="mark"+cound2
  markElement.id="marktext"
  markElement.placeholder="0"
  main.appendChild(markElement);
  totaldiv.value=cound2
  // const submitdata=document.createElement('button');
  // submitdata.textContent="✅"
  // submitdata.id="submit-exam"
  // submitdata.type='submit'
  // main.appendChild(submitdata);
  messagesContainer.scrollTop = messagesContainer.scrollHeight
  main.scrollTop = main.scrollHeight;
   }else{
    newexam=document.getElementById("newexam")
    newexam.classList.add("empty");
   }
  }
  