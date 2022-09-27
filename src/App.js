
import './App.css';
import React ,{  useEffect, useState}from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



function App(){

  const [input, setInput]=useState('');
  const [data, setData]=useState('');
  const [result, setResult]=useState('');
  
 useEffect(function(){

  function Sy(val){
    var num=val;


  var api= "https://reqres.in/api/users/"+num;
  fetch(api).then((data2)=>data2.json()).then(function(data1){
     setResult(data1.data);
   
  }).then(function(err){
    console.log(err);
})

  }

  Sy(data);
  

 },[data])

 
  return(  
    <>
    
         <div className='mx-auto mt-3 ' style={{width:"200px"}}>
          <input   type="text"  placeholder='Search...' onChange={function(event){

               setInput(event.target.value); 
            }}></input>
            
            <button  class="btn btn-primary mt-2 ml-1 b"  onClick={function(){

                  setData(input);
                
            }}>Submit</button>

            </div>

            { !data ? <h6   id='re'  className='mx-auto mt-2 ' style={{width:"250px"}}>

              Enter number between 1 to 12 ...</h6>:  result ?
                    <Card id='gd' className='mx-auto mt-5 ' style={{ width: '28rem' }}>
                    <Card.Img class="rounded-circle" variant="left" src={result.avatar}/>
                    <Card.Body>
                      <Card.Title></Card.Title><br/>
                        <Card.Text className='wt'> id   :   {  result.id}
                        
                        </Card.Text>
                        <Card.Text className='wt'> email   :   {result.email}
                        
                        </Card.Text >
                        
                        <Card.Text className='wt'> name   :   {  result.first_name}
                        
                        </Card.Text>
                        <Card.Text className='wt'>  last name   :   {result.last_name}
                        
                        </Card.Text>  
 
                    </Card.Body>
                  </Card>
                   :  <h6 id='clr' class="mx-auto mt-5 " style={{width: '240px'}}>
                   There are no results for {input} ... <div>Please enter number between 1 to 12.</div>
                 </h6> }

           
    </>
  );
    }

export default App;
