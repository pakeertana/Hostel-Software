'use client'
import { auth } from "@/auth"
import { useState } from "react";
import { signIn } from "@/auth";

export default function Signin(){
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent page reload on form submission
       ( async () =>{
            signIn("credentials", {email: formData.email, password: formData.password});
            const session = await auth()
            console.log(session)
        })()
      // Log the form data to the console
    //   console.log('Form Data:', formData);
  
      // Further actions like API requests can be done here
    };
    
        

          // Use state to store form data
        
          // Handle input change
        
          // Handle form submission
        
          return (
            <div>
              <h1>Sign Up</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit">Signup</button>
              </form>
            </div>
          );
        };
        