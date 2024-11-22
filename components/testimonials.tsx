import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    content:
      "Nexus has transformed how we manage projects. The AI insights are game-changing!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Bob Smith",
    role: "Team Lead",
    content:
      "The real-time collaboration features have boosted our team's productivity significantly.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Carol Williams",
    role: "CEO",
    content:
      "Nexus provides the analytics we need to make informed decisions and drive our projects forward.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  &quot;{testimonial.content}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
