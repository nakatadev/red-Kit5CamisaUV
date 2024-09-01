const jsonData = {
    
    name: "John Doe",
    age: 30,
    city: "New York"
  };
  
  
  function downloadJSON(data, filename = 'JSON') {
    const jsonStr = JSON.stringify(data, null, 2); 
    const blob = new Blob([jsonStr], { type: 'application/json' }); 
    const url = URL.createObjectURL(blob); 
  
    const a = document.createElement('a'); 
    a.href = url;
    a.download = filename; 
    document.body.appendChild(a); 
    a.click(); 
    document.body.removeChild(a); 
  
    URL.revokeObjectURL(url); 
  }
  

  downloadJSON(JSON, 'meuArquivo.json');

  -


  const data = JSON.stringify(JSON);  
const blob = new Blob([data], { type: 'application/json' });
const url = URL.createObjectURL(blob);


const a = document.createElement('a');
a.href = url;
a.download = 'data.json';
document.body.appendChild(a);
a.click();


document.body.removeChild(a);
URL.revokeObjectURL(url);


