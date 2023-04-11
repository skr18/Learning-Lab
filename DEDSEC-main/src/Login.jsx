import React from "react";
import {Box, Button, Dialog, styled, TextField, Typography} from "@mui/material";
import { useState } from "react";

const Components = styled(Box)`
    width:90vh;
    height:70vh;
    display:flex;
`
const Image = styled(Box)`
    background: #2874F0 url("https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz") center 85% no-repeat;
    
    height:100%;
    width:40%;
    padding: 45px 35px;
    & > p, & > h5{
        color: #FFFFFF;
        font-weight:600;
    }
`
const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding: 25px 35px;
    flex: 1;
    & > div , & > button , & > p{
        margin-top: 30px;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: white;
    height: 40px;
    border-radius: 2px;   
`
const RequestOtp = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 40px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`
const accountInitailization = {
    login:{
        view:'login',
        heading:"Login",
        subheading:"Get access to your Premium support Now, Get your codeing jorney to Next Level"
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subheading:"Sign up with your mobile number to get started"
    }

}

const signupInitialvalue ={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:""
}


const Login = ({open,setOpen}) =>{
    
    
    const [account,toogleAccount] = useState(accountInitailization.login)

    const [signup,setsignup] = useState(signupInitialvalue);

    const closehandle = () =>{
        setOpen(false)
        toogleAccount(accountInitailization.login)
    }

    const tooglesignup = () =>{
        toogleAccount(accountInitailization.signup)
    }

    const toogleresignup = () =>{
        toogleAccount(accountInitailization.login)
    }

    const onInputchange = (e) =>{
        setsignup({ ...signup,[e.target.name]: e.target.value});
    }
    const signupUser = async() =>{
        // let response = await authenticatesignup(signup);
        // if(!response) return;
        closehandle();
        // setAccount(signup.firstname);
        // export const acc = signup.username;
    }


    return(
        <Dialog open= {open} onClose={closehandle} PaperProps={{sx:{maxWidth:"unset"}}}>
           <Components>
            <Image>
                <Typography variant="h5">{account.heading}</Typography>
                <Typography style={{marginTop:20}}>{account.subheading}</Typography>
            </Image>

            {
                account.view ==='login' ?
                    <Wrapper>
                        <TextField variant="standard" label="Enter Email/Mobile number"/>
                        <TextField variant="standard" label="Enter Password"/>
                        <Typography style={{fontSize:14}}>By continuing, you agree to Learning Lab Terms of Use and Privacy Policy.</Typography>
                        <LoginButton onClick={()=> signupUser()}>Login</LoginButton>
                        <Typography style={{textAlign:"center"}}>Or</Typography>
                        <RequestOtp>Request OTP</RequestOtp>
                        <Typography style={{color:"#2874f0", cursor:"pointer", textAlign:"center",marginTop:15}}
                                    onClick={()=> tooglesignup()}>New to Learning Lab? Create an account</Typography>
                    </Wrapper>
                :

                    <Wrapper>
                        <TextField variant="standard" onChange={(e)=>onInputchange(e)} name="firstname" label="Enter Your First Name"/>
                        <TextField variant="standard" onChange={(e)=>onInputchange(e)} name="lastname" label="Enter Your Last Name"/>
                        <TextField variant="standard" onChange={(e)=>onInputchange(e)} name="username" label="Enter Your UserName"/>
                        <TextField variant="standard" onChange={(e)=>onInputchange(e)} name="email" label="Enter Email/Mobile number"/>
                        <TextField variant="standard" onChange={(e)=>onInputchange(e)} name="password" label="Enter Password"/>
                        <LoginButton onClick={()=> signupUser()} >Continue</LoginButton>
                        <Typography style={{color:"#2874f0", cursor:"pointer", textAlign:"center",marginTop:15}}
                                    onClick={()=> toogleresignup()}>Go Back</Typography>
                    </Wrapper>
            }
           </Components>
        </Dialog>
    )
}
export default Login;