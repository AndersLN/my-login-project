import { useRouter } from 'next/router'
import { passwordList } from './api/passwordManager'


export default function Login(props) {
    const router = useRouter()
    const correctPassword=""
    const passwordValidation=(event) => {
        
        event.preventDefault() //Stop page from refreshing on submit//
        const passwordInput=document.querySelector("#password").value
        const userNameInput=document.querySelector("#userName").value
        const passwordResponse=document.querySelector("#passwordResponse")
        passwordResponse.innterText=""
        
        console.log(passwordInput)
        console.log(userNameInput)

        const emailFound = passwordList.find(e => e.userName === userNameInput);
        if (emailFound) {
            if (passwordInput===emailFound.password){
                passwordResponse.innerText="Password is correct!"
                setTimeout(() => {router.push(`/min-side/${emailFound.name}`)}, 1000 )
                
            }else{
                passwordResponse.innerText="Password is not correct!"
            }
        }else{
            passwordResponse.innerText="Email is not found!"
        }
    }
    return (
        <>
            <form onSubmit={passwordValidation}>
                
                <input type="email" name="userName" id="userName" placeholder="Email" /><br />
                <input type="password" name="password" id="password" placeholder="password" /><br />
                <input type="submit" value="Login"/><br />
                <h4 name="passwordResponse" id="passwordResponse"></h4>


            </form>
        </>

    )
}

