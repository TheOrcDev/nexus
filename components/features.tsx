import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Zap, BarChart, Users } from "lucide-react";

const features = [
  {
    title: "AI-Powered Insights",
    description:
      "Get intelligent suggestions and predictions for your projects.",
    icon: Lightbulb,
  },
  {
    title: "Real-time Collaboration",
    description: "Work seamlessly with your team, no matter where they are.",
    icon: Users,
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain deep insights into your project's performance and team productivity.",
    icon: BarChart,
  },
  {
    title: "Automated Workflows",
    description: "Streamline your processes with intelligent automation.",
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
