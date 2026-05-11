import React, { useState } from "react";

function Plan(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        eventName: '',
        date: '',
        location: ''
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
            const res = await fetch("http://localhost:3000/submit", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })

            const data = await res.json();
            console.log("Success:" , data);

            setFormData({
                name: '',
                email: '', 
                eventName: '',
                date: '',
                location: ''
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
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br/>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br/>
                <input type="text" name="eventName" placeholder="Event Name" value={formData.eventName} onChange={handleChange} required /><br/>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required /><br/>
                <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required /><br/>
                <button type="submit" id='submit-btn'>Submit</button>
            </form>
            </div>
        </section>
    )
}
export default Plan;