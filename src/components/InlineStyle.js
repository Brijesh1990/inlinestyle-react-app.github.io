import React from 'react';
const book="assets/images/book.gif";
function Inline()
{
    return (
        <>
        <div style={{width:"100%",height:"auto",margin:"auto",display:"flex",flexDirection:"row"}}>
        <div style={{width:"45%",height:"auto",margin:"auto",padding:"15px" }}>
            <h1>Book your appointments</h1>
            <img src={book} alt='img01' width="300px" />
        </div>

        <div  style={{width:"45%",height:"auto",padding:"15px"}}>
            <h1>Appointment Form</h1>
            <p>Book your appointments here </p>
            <form>
                <input type='text' name="name" placeholder='Enter your Name *' style={{width:"320px",height:"auto",padding:"8px"}}  required/>
                <br /><br />
                <input type='text' name="name" placeholder='Enter your Name *' style={{width:"320px",height:"auto",padding:"8px"}} />
                <br /><br />

                <input type='text' name="name" placeholder='Enter your Name *' style={{width:"320px",height:"auto",padding:"8px"}} />
                <br /><br />
                <input type='text' name="name" placeholder='Enter your Name *' style={{width:"320px",height:"auto",padding:"8px"}} />
                <br /><br />

                <input type='text' name="name" placeholder='Enter your Name *' style={{width:"320px",height:"auto",padding:"8px"}} />
                <br /><br />

                <input type='submit' name="book" value="book Appontment" style={{width:"120px",height:"auto",padding:"8px",border:"none"}} /> 
                 
                 &nbsp;
                 &nbsp; 

                <input type='reset' name="book" value="Reset" style={{width:"120px",height:"auto",padding:"8px",backgroundColor:"red",border:"none", color:"white"}} />
                <br /><br />
            </form>
        </div>

        </div>
        
        </>
    )
}


export default Inline;