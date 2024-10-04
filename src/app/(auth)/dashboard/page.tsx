'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Droplet, Calendar, Users, Activity, Bell, Settings, LogOut } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MainPortal() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const menuItems = [
    { icon: Droplet, label: 'Dashboard', value: 'dashboard' },
    { icon: Calendar, label: 'Appointments', value: 'appointments' },
    { icon: Users, label: 'Donors', value: 'donors' },
    { icon: Activity, label: 'Analytics', value: 'analytics' },
    { icon: Bell, label: 'Notifications', value: 'notifications' },
    { icon: Settings, label: 'Settings', value: 'settings' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          className="w-64 bg-card text-card-foreground p-4 space-y-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-2 mb-8">
            <Droplet className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">BloodLink</h1>
          </div>
          <nav>
            {menuItems.map((item) => (
              <Button
                key={item.value}
                variant={activeTab === item.value ? 'secondary' : 'ghost'}
                className="w-full justify-start mb-2"
                onClick={() => setActiveTab(item.value)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
          <div className="absolute bottom-4 left-4 right-4">
            <Button variant="outline" className="w-full justify-start">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">{menuItems.find(item => item.value === activeTab)?.label}</h2>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsContent value="dashboard">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                    <Droplet className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Donors</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">567</div>
                    <p className="text-xs text-muted-foreground">+10.5% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">89</div>
                    <p className="text-xs text-muted-foreground">Next 7 days</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Blood Stock</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">85%</div>
                    <p className="text-xs text-muted-foreground">Capacity utilization</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="appointments">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Appointment management interface will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="donors">
              <Card>
                <CardHeader>
                  <CardTitle>Donor Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Donor information and management tools will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Detailed analytics and reports will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>System and user notifications will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>System configuration and user preferences will be managed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}