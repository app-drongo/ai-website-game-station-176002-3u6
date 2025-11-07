'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Gamepad2, Trophy, Users, Zap } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

type BackgroundPattern = 'dots' | 'grid' | 'gradient';

const DEFAULT_HERO = {
  badge: 'Ultimate Gaming Experience',
  title: 'Welcome to GameStation',
  titleHighlight: 'Level Up',
  subtitle:
    'Experience the future of gaming with cutting-edge technology, immersive gameplay, and a community of passionate gamers.',
  primaryCTA: 'Start Gaming',
  secondaryCTA: 'Explore Games',
  primaryCTAHref: '/games',
  secondaryCTAHref: '/catalog',
  feature1Icon: 'gamepad2',
  feature1Text: 'Premium Gaming',
  feature2Icon: 'trophy',
  feature2Text: 'Competitive Play',
  feature3Icon: 'users',
  feature3Text: 'Gaming Community',
  trustedByText: 'Trusted by gamers worldwide',
  showTrustedLogos: true,
  backgroundPattern: 'gradient' as BackgroundPattern,
  showAnimatedBadge: true,
  backgroundImage:
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'gamepad2':
        return Gamepad2;
      case 'trophy':
        return Trophy;
      case 'users':
        return Users;
      case 'zap':
        return Zap;
      default:
        return Sparkles;
    }
  };

  const Feature1Icon = getIcon(config.feature1Icon);
  const Feature2Icon = getIcon(config.feature2Icon);
  const Feature3Icon = getIcon(config.feature3Icon);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden" data-editable="hero">
      {/* Full Screen Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${config.backgroundImage})`,
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Background Pattern Overlay */}
      {config.backgroundPattern === 'dots' && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-20" />
      )}
      {config.backgroundPattern === 'grid' && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:64px_64px]" />
      )}
      {config.backgroundPattern === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      )}

      {/* Floating gradient orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center py-20 text-center">
          {/* Animated Badge */}
          {config.showAnimatedBadge && (
            <div className="mb-8 inline-flex animate-fade-in">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span data-editable="badge" className="text-white/90">
                  {config.badge}
                </span>
              </div>
            </div>
          )}

          {/* Main Title */}
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in animation-delay-100">
            <span data-editable="title" className="text-white">
              {config.title}
            </span>
            <span className="relative ml-3">
              <span
                data-editable="titleHighlight"
                className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent"
              >
                {config.titleHighlight}
              </span>
              <svg
                className="absolute -right-2 -top-2 h-6 w-6 text-primary/80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            data-editable="subtitle"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl animate-fade-in animation-delay-200"
          >
            {config.subtitle}
          </p>

          {/* Feature Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in animation-delay-300">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm px-4 py-2 text-sm">
              <Feature1Icon className="h-4 w-4 text-primary" />
              <span data-editable="feature1Text" className="text-white/90">
                {config.feature1Text}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm px-4 py-2 text-sm">
              <Feature2Icon className="h-4 w-4 text-primary" />
              <span data-editable="feature2Text" className="text-white/90">
                {config.feature2Text}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm px-4 py-2 text-sm">
              <Feature3Icon className="h-4 w-4 text-primary" />
              <span data-editable="feature3Text" className="text-white/90">
                {config.feature3Text}
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in animation-delay-400">
            <Button
              size="lg"
              className="group px-8 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              onClick={() => navigate(config.primaryCTAHref)}
              data-editable-href="primaryCTAHref"
              data-href={config.primaryCTAHref}
            >
              <span data-editable="primaryCTA">{config.primaryCTA}</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-black/30 text-white backdrop-blur-sm text-base font-medium hover:bg-white/10 transition-all"
              onClick={() => navigate(config.secondaryCTAHref)}
              data-editable-href="secondaryCTAHref"
              data-href={config.secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
            </Button>
          </div>

          {/* Trusted By Section */}
          {config.showTrustedLogos && (
            <div className="mt-20 w-full max-w-4xl animate-fade-in animation-delay-500">
              <p data-editable="trustedByText" className="mb-6 text-sm text-white/70">
                {config.trustedByText}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                {/* Gaming platform logos placeholders */}
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-8 w-24 rounded bg-white/20 backdrop-blur-sm" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add subtle CSS animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}
