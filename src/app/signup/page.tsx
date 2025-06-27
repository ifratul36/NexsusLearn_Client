"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Eye, EyeOff, GraduationCap } from "lucide-react"
import UseAxiosNormal from "@/hook/axiosNormal"
type UserData = {
  name: string
  email: string
  password: string
  role: string
  studentInfo?: {
    semester: string
    department: string
  }
  facultyInfo?: {
    subject: string
  }
}
export default function SignUpPage() {
  const axiosInstanceNormal = UseAxiosNormal()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [role, setrole] = useState("student")

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
      role: formData.get("role") as string,
      semester: formData.get("semester") as string,
      department: formData.get("department") as string,
      subject: formData.get("subject") as string,
    }
    console.log("Sign Up Data:", JSON.stringify(data, null, 2))
    if (!data.name || !data.email || !data.password || !data.role) {
      alert("Please fill in all required fields.")
      return
    }

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    const userData: UserData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    }

    if (data.role === "student") {
      userData.studentInfo = {
        semester: data.semester,
        department: data.department
      }
    }
    if( data.role === "faculty") {
      userData.facultyInfo={
        subject : data.subject
      }
    }
    console.log("User Data to Send:", JSON.stringify(userData, null, 2))
    try {
      const res = await axiosInstanceNormal.post("/users/signup", userData)
      console.log(res.data)
      alert("Account created!")
      // router.push("/signin")
    } catch (err) {
      console.error(err)
      alert("Sign up failed!")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex aspect-square size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="size-6" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
          <CardDescription>Join NexusLearn and start your academic journey</CardDescription>
        </CardHeader>

        <form onSubmit={handleSignUp}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">First Name</Label>
                <Input name="name" id="name" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input name="email" type="email" id="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input name="phone" id="phone" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">User Type</Label>
              <Select name="role" value={role} onValueChange={setrole} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="guardian">Guardian</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {role === "student" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="semester">Semester</Label>
                  <Input name="semester" id="semester" placeholder="e.g. 4th" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input name="department" id="department" placeholder="e.g. CSE" required />
                </div>
              </div>
            )}
            {role === "faculty" && (
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input name="subject" id="subject" placeholder="e.g. Mathematics" required />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    name="password"
                    id="password"
                    type={showPassword ? "text" : "password"}
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
              <div className="space-y-2 mb-4">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    name="confirmPassword"
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              Create Account
            </Button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/signin" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
