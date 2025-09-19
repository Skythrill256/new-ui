"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Shield, Brain } from "lucide-react"

export function HeroSection() {
  const products = [
    {
      name: "Pebbling",
      description:
        "Revolutionary data processing that transforms your workflow with intelligent automation and seamless integration.",
      icon: Zap,
      gradient: "from-primary/20 to-accent/20",
    },
    {
      name: "Hibiscus",
      description:
        "Advanced security protocols that protect your digital assets with enterprise-grade encryption and monitoring.",
      icon: Shield,
      gradient: "from-accent/20 to-secondary/20",
    },
    {
      name: "Sheldon",
      description:
        "AI-powered analytics engine that delivers actionable insights and predictive intelligence for your business.",
      icon: Brain,
      gradient: "from-secondary/20 to-primary/20",
    },
  ]

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 hero-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card
                key={product.name}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-border/30 hover:border-primary/30 bg-card/80 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="pb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-sans font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed text-base mb-6 font-sans">
                    {product.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-accent font-sans font-medium group/btn transition-all duration-300"
                  >
                    Explore {product.name}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
