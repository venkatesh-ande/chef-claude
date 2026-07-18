import React from "react"

export default function App(){
  const [remainder ,setRemainder] = React.useState([]);
  
  function handleRemainder(formData){
    const work = formData.get("todo")
    if(!work) return ;
    setRemainder(prevRemainders => [...prevRemainders ,work ])
  }
  function removeElement(index) {
    const updatedArray = remainder.filter((item ,i)=> i !== index);
    setRemainder(updatedArray);
    
  }
  
return(
  <div className="grid"><div className="input">
    
    <form action={handleRemainder}>
      <input 
      autoCapitalize="words" 
      type="text"
      name="todo"
      id="todo"
      placeholder="eg. Make Dinner"
      />
      <button>Add Remainder</button>
    </form>
    <section>
      { remainder.length !==0 ?<h2><strong>Reaminders</strong></h2> : null}
    <ul>
        {remainder.length !== 0 ? remainder.map((list ,index) => 
<div>
          <li key ={index}>{list}</li>
        <button onClick={() =>removeElement(index)}>×</button>
</div>
        ) : <h2><strong>Add Reaminder</strong></h2>}
    </ul>
    </section>
  </div></div>
  
  )







/*  function handleData(formData){
    const email=formData.get("email");
    const pass=formData.get("password");
    alert(email + pass);
  }
  
  function handleSem(formData){
    const option = formData.get("sem");
    alert(option);
  }
  
  function handleSub(formData){
    const passed = formData.getAll("sub");
    alert(passed);
  }
  
  return(
    <>
     <section className="login">
       <form action={handleData}>
       <h1>Login Form</h1>
         <label htmlFor="email">Username :</label>
         <input 
         id="email" 
         type="email" 
         name="email"
         defaultValue="vraodev@gmail.com"
         />
         <br />
         <label htmlFor="password">password :</label>
         <input 
         id="password" 
         type="password" 
         name ="password"
         defaultValue="123456799"
         />
         
         <br/>
         <button>Log In</button>
       </form>
     </section>
     
     
     
     <section  className="checkbox">
       <fieldset>
         <legend>Current Semester</legend>
         <form action={handleSem}>
         <label htmlFor="sem1">1 st 
         <input 
         type="radio"
         name="sem"
         id="sem1"
         value="sem1"
         defaultChecked={true}
         /></label>
         <label htmlFor="sem2">2 st
         <input 
         type="radio"
         name="sem"
         id="sem2"
         value="sem2"
         />
         </label>
         <label htmlFor="sem3">3 st
         <input 
         type="radio"
         name="sem"
         id="sem3"
         value="sem3"
         
         />  </label>    
         <button>Submit</button>
       </form>
       </fieldset>

     </section>
     
     
     <section className="checkbox">
     <fieldset >
        <legend>Subjectd Passed</legend>
       <form action={handleSub}>
         <label > 
         <input 
         type="checkbox"
         name="sub"
         id="m1"
         value="M1"
         defaultChecked="true"
         />M1</label>
         <label htmlFor="m2">
         <input 
         type="checkbox"
         name="sub"
         id="m2"
         value="M2"
         />M2</label>
         <label htmlFor="m3">
         <input 
         type="checkbox"
         name="sub"
         id="m3"
         value="M3"
         
         /> M3 </label>    
         <button>Submit</button>
       </form>
     </fieldset>
     </section>
     
     </>
)*/
}