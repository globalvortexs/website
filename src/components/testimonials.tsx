import React from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    content: "Global Vortex transformed our business strategy, resulting in a 40% increase in revenue within the first year. Their expertise and dedication are unmatched.",
    author: "Sarah Johnson",
    position: "CEO, TechInnovate",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=10"
  },
  {
    content: "Working with Global Vortex was a game-changer for our international expansion. Their insights and guidance made the process seamless and successful.",
    author: "Michael Chen",
    position: "COO, GrowthWave",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=11"
  },
  {
    content: "The team at Global Vortex provided exceptional support during our digital transformation journey. Their strategic approach and technical expertise were invaluable.",
    author: "Emma Rodriguez",
    position: "CTO, FutureTech",
    avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=12"
  },
];

export const Testimonials = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
        <p className="text-default-600 max-w-2xl mx-auto">
          {t('testimonials.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border border-divider" shadow="sm">
            <CardBody className="p-8">
              <Icon icon="lucide:quote" className="text-primary/30 text-4xl mb-4" />
              <p className="text-default-600 mb-8 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <Avatar src={testimonial.avatar} size="lg" />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-default-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};