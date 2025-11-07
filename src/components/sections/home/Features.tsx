'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Gamepad2,
  Trophy,
  Users,
  Zap,
  Headphones,
  Monitor,
  Wifi,
  Star,
  Shield,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import Image from 'next/image';

const DEFAULT_FEATURES = {
  badge: 'Gaming Features',
  mainTitle: 'Ultimate Gaming Experience',
  mainTitleHighlight: 'Built for Gamers',
  mainDescription:
    'Discover cutting-edge gaming technology with premium hardware, immersive experiences, and a thriving community of passionate gamers.',
  feature1Title: 'Premium Gaming Hardware',
  feature1Description:
    'Experience gaming like never before with top-tier graphics cards, ultra-fast processors, and lightning-quick response times.',
  feature1Badge: 'Hardware',
  feature1Image:
    'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  feature2Title: 'Competitive Gaming Arena',
  feature2Description:
    'Join tournaments, climb leaderboards, and compete with players worldwide in our state-of-the-art gaming environment.',
  feature2Badge: 'Esports',
  feature2Image:
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  feature3Title: 'Gaming Community Hub',
  feature3Description:
    'Connect with fellow gamers, form teams, share strategies, and build lasting friendships in our vibrant gaming community.',
  feature3Badge: 'Community',
  feature3Image:
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  feature4Title: 'Lightning Fast Performance',
  feature4Description:
    'Zero lag, maximum performance. Our optimized systems ensure smooth gameplay even in the most demanding scenarios.',
  feature4Badge: 'Performance',
  feature4Image:
    'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  feature5Title: 'Immersive Audio Experience',
  feature5Description:
    'Crystal clear 7.1 surround sound and noise-canceling technology for complete gaming immersion and tactical advantage.',
  feature5Badge: 'Audio',
  feature5Image:
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  feature6Title: '4K Gaming Displays',
  feature6Description:
    'Ultra-high resolution monitors with HDR support and high refresh rates for the most stunning visual gaming experience.',
  feature6Badge: 'Display',
  feature6Image:
    'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  feature7Title: 'High-Speed Gaming Network',
  feature7Description:
    'Dedicated gaming network with ultra-low latency and guaranteed bandwidth for competitive online gaming.',
  feature7Badge: 'Network',
  feature7Image:
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  feature8Title: 'Premium Gaming Support',
  feature8Description:
    'Expert gaming support team available 24/7 to help with technical issues, game optimization, and performance tuning.',
  feature8Badge: 'Support',
  feature8Image:
    'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  feature9Title: 'Secure Gaming Environment',
  feature9Description:
    'Advanced anti-cheat systems, secure payment processing, and protected gaming sessions for a safe gaming experience.',
  feature9Badge: 'Security',
  feature9Image:
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  ctaQuestion: 'Ready to elevate your gaming experience?',
  primaryCTA: 'Start Gaming Now',
  primaryCTAHref: '/games',
  secondaryCTA: 'View Game Library',
  secondaryCTAHref: '/catalog',
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const features = [
    {
      icon: Gamepad2,
      title: config.feature1Title,
      description: config.feature1Description,
      badge: config.feature1Badge,
      image: config.feature1Image,
    },
    {
      icon: Trophy,
      title: config.feature2Title,
      description: config.feature2Description,
      badge: config.feature2Badge,
      image: config.feature2Image,
    },
    {
      icon: Users,
      title: config.feature3Title,
      description: config.feature3Description,
      badge: config.feature3Badge,
      image: config.feature3Image,
    },
    {
      icon: Zap,
      title: config.feature4Title,
      description: config.feature4Description,
      badge: config.feature4Badge,
      image: config.feature4Image,
    },
    {
      icon: Headphones,
      title: config.feature5Title,
      description: config.feature5Description,
      badge: config.feature5Badge,
      image: config.feature5Image,
    },
    {
      icon: Monitor,
      title: config.feature6Title,
      description: config.feature6Description,
      badge: config.feature6Badge,
      image: config.feature6Image,
    },
    {
      icon: Wifi,
      title: config.feature7Title,
      description: config.feature7Description,
      badge: config.feature7Badge,
      image: config.feature7Image,
    },
    {
      icon: Star,
      title: config.feature8Title,
      description: config.feature8Description,
      badge: config.feature8Badge,
      image: config.feature8Image,
    },
    {
      icon: Shield,
      title: config.feature9Title,
      description: config.feature9Description,
      badge: config.feature9Badge,
      image: config.feature9Image,
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
      data-editable="features"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Feature Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Icon and Badge Overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="size-10 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="size-5 text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-black/50 backdrop-blur-sm text-white border-white/20"
                    >
                      <span data-editable={`feature${index + 1}Badge`}>{feature.badge}</span>
                    </Badge>
                  </div>
                </div>

                {/* Background Gradient - pointer-events-none allows clicks to pass through */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <CardHeader className="relative">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    <span data-editable={`feature${index + 1}Title`}>{feature.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    <span data-editable={`feature${index + 1}Description`}>
                      {feature.description}
                    </span>
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border - pointer-events-none allows clicks to pass through */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            <span data-editable="ctaQuestion">{config.ctaQuestion}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="px-6 py-3"
              onClick={() => navigate(config.primaryCTAHref)}
              data-editable-href="primaryCTAHref"
              data-href={config.primaryCTAHref}
            >
              <span data-editable="primaryCTA">{config.primaryCTA}</span>
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3"
              onClick={() => navigate(config.secondaryCTAHref)}
              data-editable-href="secondaryCTAHref"
              data-href={config.secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
