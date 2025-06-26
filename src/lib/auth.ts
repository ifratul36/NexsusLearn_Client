import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import axios from 'axios'
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
        email: { label: "email", type: "email", placeholder: "your-email", },
        password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
                 const { email, password } = credentials as { email: string; password: string }
               console.log(email,password)
                 const res=await axios.post(`https://nexxus-learn.vercel.app/users/signin/${credentials.email}`,
                    {
                    email:email,
                    password:password})
                const user=res.data.userInfo;
                console.log(user,'user got')
                if(user){
                    console.log(user,'session in upper')
                    return{
                        id:user._id,
                        name:user.name,
                        email: user.email,
                        role:user.role
                    }
                }
                else{
                    console.log('user not found')
                    return null
                }
            }
        })
    ],
    secret: process.env.AUTH_SECRET,
    callbacks:{
        async session({session}){
            console.log(session,'session in lower')
            return session;
        }
    }
});