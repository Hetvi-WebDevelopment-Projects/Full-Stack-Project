import React, { useState } from "react";

function Plan(){

    const API_URL=import.meta.env.VITE_API_URL;

    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        EventName: '',
        Date: '',
        Location: ''
    });

    const handleChange = (e) => {
       
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch(`${API_URL}/submit`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })

          //const data = await res.json();
          const text = await res.text();
console.log("RAW RESPONSE:", text);

let data;
try {
  data = JSON.parse(text);
} catch (err) {
  console.error("Invalid JSON response:", text);
  return;
}

console.log("Success:", data);
            console.log("Success:" , data);

            setFormData({
                Name: '',
                Email: '', 
                EventName: '',
                Date: '',
                Location: ''
            })
            alert(data.message)
        }
        catch(err)
        {
            console.log("FULL ERROR:",err)
            alert(err.message)
        }
        e.target.reset();
    }
     return(
        <section className="plan">
        <div className="plan-header">
            <h1> Plan your Event</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Name" placeholder="Name" value={formData.Name} onChange={handleChange} required /><br/>
                <input type="email" name="Email" placeholder="Email" value={formData.Email} onChange={handleChange} required /><br/>
                <input type="text" name="EventName" placeholder="Event Name" value={formData.EventName} onChange={handleChange} required /><br/>
                <input type="date" name="Date" value={formData.Date} onChange={handleChange} required /><br/>
                <input type="text" name="Location" placeholder="Location" value={formData.Location} onChange={handleChange} required /><br/>
                <button type="submit" id='submit-btn'>Submit</button>
            </form>
            </div>
        </section>
    )
}
export default Plan;