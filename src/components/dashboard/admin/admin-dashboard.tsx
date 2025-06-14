"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Users, BarChart3, Shield, Bell, Database, Settings, UserPlus, FileText } from "lucide-react"

export function AdminDashboard() {
  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">System overview and management controls.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="animate-pulse">
            <Activity className="w-3 h-3 mr-1" />
            System Active
          </Badge>
        </div>
      </div>

      {/* System Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Real-time active users</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.8%</div>
            <p className="text-xs text-muted-foreground">Uptime this month</p>
            <Progress value={99.8} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">System alerts</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* System Overview */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              System Overview
            </CardTitle>
            <CardDescription>Real-time system performance and statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>CPU Usage</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Memory Usage</span>
                  <span>62%</span>
                </div>
                <Progress value={62} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Database Load</span>
                  <span>38%</span>
                </div>
                <Progress value={38} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Network I/O</span>
                  <span>28%</span>
                </div>
                <Progress value={28} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Admin Actions</CardTitle>
            <CardDescription>System management tools</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <UserPlus className="h-4 w-4 mr-2" />
              Add New User
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Database className="h-4 w-4 mr-2" />
              Database Backup
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Shield className="h-4 w-4 mr-2" />
              Security Audit
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Generate Reports
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Admin Features Tabs */}
      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="academic">Academic Management</TabsTrigger>
          <TabsTrigger value="analytics">System Analytics</TabsTrigger>
          <TabsTrigger value="biometric">Biometric Management</TabsTrigger>
          <TabsTrigger value="database">Database Management</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage students, faculty, guardians, and administrators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,156</div>
                    <p className="text-xs text-muted-foreground">Active students</p>
                    <Button size="sm" className="w-full mt-2">
                      Manage Students
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Faculty</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">145</div>
                    <p className="text-xs text-muted-foreground">Teaching staff</p>
                    <Button size="sm" className="w-full mt-2">
                      Manage Faculty
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Guardians</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,892</div>
                    <p className="text-xs text-muted-foreground">Parent accounts</p>
                    <Button size="sm" className="w-full mt-2">
                      Manage Guardians
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Administrators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">Admin users</p>
                    <Button size="sm" className="w-full mt-2">
                      Manage Admins
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Academic Management</CardTitle>
              <CardDescription>Manage courses, departments, and semesters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">48</div>
                    <p className="text-xs text-muted-foreground">Active courses</p>
                    <div className="space-y-1 mt-2">
                      <div className="text-xs">Computer Science: 12</div>
                      <div className="text-xs">Engineering: 18</div>
                      <div className="text-xs">Mathematics: 8</div>
                      <div className="text-xs">Physics: 10</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Departments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">Academic departments</p>
                    <div className="space-y-1 mt-2">
                      <div className="text-xs">Engineering: 3 depts</div>
                      <div className="text-xs">Sciences: 3 depts</div>
                      <div className="text-xs">Arts: 2 depts</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Semesters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">6</div>
                    <p className="text-xs text-muted-foreground">Active semesters</p>
                    <div className="space-y-1 mt-2">
                      <div className="text-xs">Fall 2024: Current</div>
                      <div className="text-xs">Spring 2024: Completed</div>
                      <div className="text-xs">Summer 2024: Completed</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Analytics</CardTitle>
              <CardDescription>Usage statistics, performance metrics, and reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Usage Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Daily Active Users</span>
                        <span>1,234</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Weekly Active Users</span>
                        <span>2,456</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Monthly Active Users</span>
                        <span>2,847</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Avg Response Time</span>
                        <span>245ms</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Error Rate</span>
                        <span>0.02%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Uptime</span>
                        <span>99.8%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button size="sm" variant="outline" className="w-full">
                        <FileText className="h-4 w-4 mr-2" />
                        User Activity Report
                      </Button>
                      <Button size="sm" variant="outline" className="w-full">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Performance Report
                      </Button>
                      <Button size="sm" variant="outline" className="w-full">
                        <Shield className="h-4 w-4 mr-2" />
                        Security Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="biometric" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Biometric Management</CardTitle>
              <CardDescription>Manage biometric authentication systems and devices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Fingerprint Scanners</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Total Devices</span>
                          <span>24</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Online</span>
                          <span className="text-green-600">22</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Offline</span>
                          <span className="text-red-600">2</span>
                        </div>
                        <Progress value={92} className="mt-2" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Facial Recognition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Total Cameras</span>
                          <span>18</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Active</span>
                          <span className="text-green-600">18</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Inactive</span>
                          <span className="text-gray-600">0</span>
                        </div>
                        <Progress value={100} className="mt-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Biometric Registrations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">2,156</div>
                        <p className="text-xs text-muted-foreground">Students Registered</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">145</div>
                        <p className="text-xs text-muted-foreground">Faculty Registered</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">1,234</div>
                        <p className="text-xs text-muted-foreground">Guardians Registered</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">98.5%</div>
                        <p className="text-xs text-muted-foreground">Registration Rate</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Database Management</CardTitle>
              <CardDescription>Monitor and manage system databases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Database Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Database Size</span>
                        <span>2.4 GB</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Total Records</span>
                        <span>1,247,892</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Last Backup</span>
                        <span>2 hours ago</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Health Status</span>
                        <span className="text-green-600">Healthy</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Database Operations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button size="sm" variant="outline" className="w-full">
                        <Database className="h-4 w-4 mr-2" />
                        Create Backup
                      </Button>
                      <Button size="sm" variant="outline" className="w-full">
                        <Activity className="h-4 w-4 mr-2" />
                        Run Maintenance
                      </Button>
                      <Button size="sm" variant="outline" className="w-full">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Performance Analysis
                      </Button>
                      <Button size="sm" variant="outline" className="w-full">
                        <FileText className="h-4 w-4 mr-2" />
                        Export Data
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
