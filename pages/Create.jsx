import { useRouter } from 'next/router'
import React from 'react'
import { passwordList } from './api/passwordManager'
import Login from './Login'

export default function Create() {

    const router =useRouter()
    
    const populateDatabase=(input) => {
            const email=input.email
            const password=input.password
            passwordList.push({userName:email,password:password,name:""})
            console.log(passwordList)
            //router.push("/Login")
    }

    const createNewUserInput=(event) => {
        event.preventDefault()
        const emailInput=document.querySelector("#email").value
        const passwordInput=document.querySelector("#password").value
        const password2Input=document.querySelector("#password2").value
        const passwordResponse=document.querySelector("#passwordResponse")
        
        passwordResponse.innterText=""

        console.log(emailInput)
        console.log(passwordInput)
        console.log(password2Input)

        if(passwordInput===password2Input){
            passwordResponse.innerText="Password is the same!"

            populateDatabase({
                email:emailInput,
                password:passwordInput
            })

        }else{
            passwordResponse.innerText="Password is not the same!"
        }
    }
    
  
    return (
    <form onSubmit={createNewUserInput}>
        <input type="email" name="" id="email" placeholder='Email' /><br />
        <input type="password" name="" id="password" placeholder='Password'/><br />
        <input type="password" name="" id="password2" placeholder='Retype password'/><br />
        <input type="submit" value="Create new user" />
        <h4 name="passwordResponse" id="passwordResponse"></h4>
    </form>
  )
}
