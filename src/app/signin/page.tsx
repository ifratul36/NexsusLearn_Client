"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Eye, EyeOff, GraduationCap } from "lucide-react"
import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"
import UseAxiosNormal from "@/hook/axiosNormal"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   userType: "",
  //   rememberMe: false,
  // })

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log("Sign In Form Data:", formData)
  //   // Here you would typically send the data to your authentication API
  //   alert(`Sign In Data: ${JSON.stringify(formData, null, 2)}`)
  // }

  // const handleInputChange = (field: string, value: string | boolean) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }))
  // }
  const router =useRouter();
  const {data,status}=useSession()
  const axiosInstanceNormal=UseAxiosNormal();
  useEffect(()=>{
     const storeUserInfo = async () => {
      if (data?.user) {
        try {
          //console.log("User data from data?.user:", data.user);
          const userInfo = {
            username: data.user.name,
            email: data.user.email,
            picture: data.user.image,
          };
          const response = await axiosInstanceNormal.post(
            "/signup",
            userInfo
          );
          console.log("User info stored:", response.data);
          router.push("/");
        } catch (error) {
          console.error("Error storing user info:", error);
        }
      }
    };

    if (status === "authenticated") {
      storeUserInfo();
    }
  }, [data, status, router, axiosInstanceNormal])

  const handleSignInByEmail= async (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    
    const form =(e.target as HTMLButtonElement).closest('form');
    if(form){
      const formData = new FormData(form);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      // const userType = formData.get('userType') as string;
      // const rememberMe = formData.get('rememberMe') === 'on';

      const userInformation={
        email:email,
        password:password,
        lastLoginTime:new Date().toISOString()
      }
      console.log(userInformation)
      try{
        const response=await axiosInstanceNormal.post(`/users/signin/${email}`,userInformation);
        console.log(response.data);
        const userInfo=response.data.userInfo;
        await signIn('credentials',{
          email:userInfo.email,
          password:userInfo.password,
          redirect:false,
        });

      }
      catch(error){
        console.log("error signing in:",error)
      }
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex aspect-square size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="size-6" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to your NexusLearn account</CardDescription>
        </CardHeader>
        <form>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="userType">User Type</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="guardian">Guardian</SelectItem>
                  <SelectItem value="admin">Administrator</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
              />
              <Label htmlFor="rememberMe" className="text-sm">
                Remember me
              </Label>
            </div> */}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button onClick={handleSignInByEmail} type="submit" className="w-full">
              Sign In
            </Button>
            <div className="text-center text-sm">
              <Link href="/forgot-password" className="text-primary hover:underline">
                Forgot your password?
              </Link>
            </div>
            <div className="text-center text-sm">
              Dont have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
