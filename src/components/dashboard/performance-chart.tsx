"use client"
import { Badge } from "@/components/ui/badge"

export function PerformanceChart() {
  // Mock data for the chart
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  const data = [3.2, 3.4, 3.6, 3.7, 3.8, 3.85]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Current GPA</p>
          <p className="text-2xl font-bold">3.85</p>
        </div>
        <Badge variant="secondary">+0.12 this semester</Badge>
      </div>

      {/* Simple chart representation */}
      <div className="space-y-2">
        {months?.map((month, index) => (
          <div key={month} className="flex items-center space-x-4">
            <div className="w-8 text-xs text-muted-foreground">{month}</div>
            <div className="flex-1 bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(data[index] / 4) * 100}%` }}
              />
            </div>
            <div className="w-12 text-xs font-medium">{data[index]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
