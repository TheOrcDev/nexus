import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Basic",
    price: "$9",
    description: "For individuals and small teams",
    features: ["5 projects", "Basic AI insights", "24/7 support"],
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing teams and businesses",
    features: [
      "Unlimited projects",
      "Advanced AI insights",
      "Priority support",
      "Team collaboration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Custom solutions",
      "Dedicated account manager",
      "On-premise deployment option",
      "Advanced security features",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{plan.price}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {plan.price === "Custom"
                    ? "Contact us for pricing"
                    : "per user / month"}
                </p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className=" h-4 w-4 flex-shrink-0 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
