function Senddata(){
    const textInput = document.getElementById('input-field');
 const imageInput = document.getElementById('image-input');
            console.log("send")
          const imageFile = imageInput.files[0];
        
          if(imageFile){
            sendData2( imageFile);
            imageInput.value=""
        }else{
          console.log("no data")
        }
        const textData = textInput.value;
        if(textData){
          sendData(textData);
          textInput.value = '';
        }
        
        };
        
        const sendData2 = async (image) => {
            
          try {
            const formData = new FormData();
           
            formData.append('image', image);
            const response = await fetch('/results', {
              method: 'POST',
              body: formData
            });
        
            if (response.ok) {
              console.log('Data saved successfully');
            } 
             } catch (error) {
            console.log('Error:', error);
          }
        
        };
        const sendData = async (text) => {
        
        
          try {
             const formData = new FormData();
            formData.append('text', text);
            
        
            const response = await fetch('/results', {
              method: 'POST',
              body: formData
            });
        
            if (response.ok) {
              console.log('Data saved successfully');
            } else {
              console.log('Error:', response.status);
            }
          } catch (error) {
            console.log('Error:', error);
          }
        };