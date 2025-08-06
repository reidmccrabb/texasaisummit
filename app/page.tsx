'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, MapPin, Menu, X, Users, ChevronRight, Cpu, Sparkles, Mail, Phone, Star, Zap, Building2, Lightbulb, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Register', href: '#register' },
  ]

  const speakers = [
    {
      name: 'Speaker TBA',
      role: 'Energy AI Expert',
      company: 'Leading Energy Corp',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Energy',
      bio: 'Pioneering AI applications in energy sector',
    },
    {
      name: 'Speaker TBA',
      role: 'Manufacturing AI Lead',
      company: 'Texas Manufacturing',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Manufacturing',
      bio: 'Transforming physical world with AI',
    },
    {
      name: 'Speaker TBA',
      role: 'AgTech Innovation Director',
      company: 'Agriculture AI Solutions',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AgTech',
      bio: 'Revolutionizing farming with machine learning',
    },
    {
      name: 'Speaker TBA',
      role: 'Logistics AI Strategist',
      company: 'Supply Chain Innovations',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Logistics',
      bio: 'Optimizing Texas supply chains with AI',
    },
  ]


  const sponsors = [
    { name: 'TechCorp Energy', tier: 'platinum' },
    { name: 'Texas AI Ventures', tier: 'platinum' },
    { name: 'Austin Tech Hub', tier: 'gold' },
    { name: 'Lone Star Robotics', tier: 'gold' },
    { name: 'Data Systems Texas', tier: 'silver' },
    { name: 'Cloud AI Solutions', tier: 'silver' },
  ]


  return (
    <div className="min-h-screen bg-background">
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-lg sm:text-xl font-semibold text-foreground">Texas AI Summit</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigation.slice(0, -1).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
              <Button className="ml-4 text-sm px-4 py-2">
                Register Now
              </Button>
            </div>

            <button
              className="md:hidden p-2 -m-2 rounded-md hover:bg-muted/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-xl">
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-2">
                    <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced background with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        
        {/* Sophisticated grid pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.03)_0%,transparent_50%)]" />
        </div>
        
        {/* Subtle floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/4 to-primary/6 rounded-full blur-3xl opacity-30 animate-float" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/4 to-primary/6 rounded-full blur-3xl opacity-30 animate-float-delayed" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/3 to-primary/5 rounded-full blur-2xl opacity-20 animate-float-slow" />
        </div>
        
        {/* Subtle animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/30 rounded-full animate-pulse animation-delay-1000" />
          <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-primary/15 rounded-full animate-pulse animation-delay-2000" />
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Enhanced date badge */}
            <div className="inline-flex items-center flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              </div>
              <span className="text-xs sm:text-sm font-medium tracking-wider text-muted-foreground">March 10-11, 2025</span>
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium">Austin, TX</span>
              </div>
            </div>
            
            {/* Enhanced title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight">
              <span className="text-foreground block sm:inline">
                Texas
              </span>
              <span className="mx-2 sm:mx-4 text-foreground block sm:inline">
                AI
              </span>
              <span className="text-foreground block sm:inline">
                Summit
              </span>
            </h1>
            
            {/* Enhanced subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              The premier AI conference for Texas industries. Two days of insights, networking, and hands-on learning.
            </p>
            
            {/* Key highlights */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mb-8 sm:mb-12 text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="whitespace-nowrap">300+ Attendees</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm">
                <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="whitespace-nowrap">2 Specialized Tracks</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm">
                <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="whitespace-nowrap">Expert Speakers</span>
              </div>
            </div>

            {/* Enhanced CTA section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 bg-primary hover:bg-primary/90">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 border-2 backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-all duration-300" asChild>
                <a href="#schedule" className="flex items-center justify-center">
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  View Schedule
                </a>
              </Button>
            </div>
            
            {/* Early bird notice */}
            <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm text-primary mx-4 sm:mx-0">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="font-medium text-center">Early Bird pricing ends January 15th</span>
            </div>
          </div>
        </div>
      </section>



      <section id="speakers" className="py-12 sm:py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">Speakers</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-foreground">Featured Speakers</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Industry leaders and innovators shaping AI in Texas
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-2 sm:mt-3">
              Speaker lineup to be announced soon
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {speakers.map((speaker, index) => (
              <Card key={`speaker-${index}-${speaker.name}`} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card">
                <CardHeader className="text-center p-4 sm:p-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-muted ring-2 sm:ring-4 ring-muted group-hover:ring-primary/20 transition-all duration-300">
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-semibold text-foreground">{speaker.name}</CardTitle>
                  <CardDescription className="text-center">
                    <span className="text-xs sm:text-sm text-muted-foreground block">{speaker.role}</span>
                    <span className="text-xs sm:text-sm font-medium text-primary">{speaker.company}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-xs sm:text-sm text-center text-muted-foreground">{speaker.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Schedule</h2>
            <p className="text-base sm:text-lg text-muted-foreground">Two parallel tracks running simultaneously</p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                Day 1 - March 10, 2025
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Cpu className="h-6 w-6 text-primary" />
                    <h4 className="text-xl font-semibold">Software AI Track</h4>
                  </div>
                  <div className="space-y-4">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">9:00 AM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Breakfast & Coffee</h5>
                        <p className="text-sm text-muted-foreground">Start your day with networking</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">10:00 AM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Kickoff Keynote</h5>
                        <p className="text-sm text-muted-foreground">Setting the stage for AI innovation</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">11:00 AM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">AI Development & Deployment</h5>
                        <p className="text-sm text-muted-foreground">Technical implementation and best practices</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">12:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Lunch</h5>
                        <p className="text-sm text-muted-foreground">Networking lunch with speakers</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">1:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Big Panel: Texas Research Labs</h5>
                        <p className="text-sm text-muted-foreground">Applied research at UT Austin, Rice, A&M</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">2:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Advanced AI Systems</h5>
                        <p className="text-sm text-muted-foreground">Scaling ML infrastructure and systems</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">3:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">MLOps & Production</h5>
                        <p className="text-sm text-muted-foreground">Deploying and monitoring AI systems</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Building2 className="h-6 w-6 text-destructive" />
                    <h4 className="text-xl font-semibold">Physical AI Track</h4>
                  </div>
                  <div className="space-y-4">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">9:00 AM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Breakfast & Coffee</h5>
                        <p className="text-sm text-muted-foreground">Start your day with networking</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">10:00 AM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Kickoff Keynote</h5>
                        <p className="text-sm text-muted-foreground">Setting the stage for AI innovation</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">11:00 AM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">AI in Energy Systems</h5>
                        <p className="text-sm text-muted-foreground">Smart grids, optimization, and renewables</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">12:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Lunch</h5>
                        <p className="text-sm text-muted-foreground">Networking lunch with speakers</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">1:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Big Panel: Texas Research Labs</h5>
                        <p className="text-sm text-muted-foreground">Applied research at UT Austin, Rice, A&M</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">2:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Manufacturing & Robotics</h5>
                        <p className="text-sm text-muted-foreground">Industrial automation and smart manufacturing</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">3:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">AgTech & Precision Farming</h5>
                        <p className="text-sm text-muted-foreground">AI applications in Texas agriculture</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Card className="max-w-2xl mx-auto">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium">5:00 PM - 7:00 PM</span>
                      </div>
                      <div className="text-center">
                        <h5 className="font-semibold">Happy Hour & Curated Dinner</h5>
                        <p className="text-sm text-muted-foreground">Joint networking event for both tracks</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                Day 2 - March 11, 2025
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                    <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    <h4 className="text-lg sm:text-xl font-semibold">Software AI Track</h4>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">9:00 AM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Day 2 Welcome & Coffee</h5>
                        <p className="text-sm text-muted-foreground">Energize for another day of insights</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">10:00 AM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Main Keynote</h5>
                        <p className="text-sm text-muted-foreground">Visionary address on AI's future</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">11:00 AM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">ML Infrastructure at Scale</h5>
                        <p className="text-sm text-muted-foreground">Building robust ML systems</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">12:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Networking Lunch</h5>
                        <p className="text-sm text-muted-foreground">Connect with AI practitioners</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">1:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">AI Ethics & Governance</h5>
                        <p className="text-sm text-muted-foreground">Responsible AI development</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">2:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Interactive Workshops</h5>
                        <p className="text-sm text-muted-foreground">Hands-on AI development</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                    <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-destructive" />
                    <h4 className="text-lg sm:text-xl font-semibold">Physical AI Track</h4>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">9:00 AM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Day 2 Welcome & Coffee</h5>
                        <p className="text-sm text-muted-foreground">Energize for another day of insights</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">10:00 AM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Main Keynote</h5>
                        <p className="text-sm text-muted-foreground">Visionary address on AI's future</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">11:00 AM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">IoT & Edge Computing</h5>
                        <p className="text-sm text-muted-foreground">AI at the edge for physical applications</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">12:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Networking Lunch</h5>
                        <p className="text-sm text-muted-foreground">Connect with AI practitioners</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">1:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Supply Chain & Logistics</h5>
                        <p className="text-sm text-muted-foreground">Optimizing Texas supply chains with AI</p>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm sm:font-medium">2:00 PM</span>
                        </div>
                        <h5 className="text-sm sm:text-base font-semibold mb-1">Interactive Sessions</h5>
                        <p className="text-sm text-muted-foreground">Hands-on physical AI demonstrations</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Card className="max-w-2xl mx-auto">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium">3:00 PM - 4:00 PM</span>
                      </div>
                      <div className="text-center">
                        <h5 className="font-semibold">Closing Keynote & Final Reception</h5>
                        <p className="text-sm text-muted-foreground">Celebrating achievements and lasting connections</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

        </div>
      </section>



      <section id="sponsors" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Sponsors</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Supported by leading companies driving AI innovation in Texas
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6">Platinum Sponsors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {sponsors.filter(s => s.tier === 'platinum').map((sponsor) => (
                  <Card key={sponsor.name} className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
                    <div className="h-16 sm:h-20 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl font-bold text-primary text-center">{sponsor.name}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6">Gold & Silver Sponsors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {sponsors.filter(s => s.tier !== 'platinum').map((sponsor) => (
                  <Card key={sponsor.name} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <div className="h-12 sm:h-16 flex items-center justify-center">
                      <span className="text-lg sm:text-xl font-semibold text-center">{sponsor.name}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Interested in sponsoring?</p>
              <Button variant="outline" size="lg">
                Become a Sponsor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>


      <section id="register" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader className="text-center p-6 sm:p-8">
              <CardTitle className="text-2xl sm:text-3xl">Register for Texas AI Summit</CardTitle>
              <CardDescription className="text-base sm:text-lg">
                Join 300-500 AI innovators shaping the future of Texas industries
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6 sm:p-8 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">Early Bird</CardTitle>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">$399</div>
                    <CardDescription className="text-sm">Until January 15, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2">
                      <li>✓ Full 2-day conference access</li>
                      <li>✓ All track sessions</li>
                      <li>✓ Vendor fair access</li>
                      <li>✓ Networking events</li>
                      <li>✓ Conference materials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-primary relative overflow-visible">
                  <CardHeader className="relative pt-6 sm:pt-8 p-4 sm:p-6">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 sm:px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                    <CardTitle className="text-lg sm:text-xl">Professional</CardTitle>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">$599</div>
                    <CardDescription className="text-sm">Standard pricing</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2">
                      <li>✓ Everything in Early Bird</li>
                      <li>✓ Priority seating</li>
                      <li>✓ Workshop access</li>
                      <li>✓ Session recordings</li>
                      <li>✓ Attendee directory</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">VIP Experience</CardTitle>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">$999</div>
                    <CardDescription className="text-sm">Limited availability</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2">
                      <li>✓ Everything in Professional</li>
                      <li>✓ VIP dinner (March 10)</li>
                      <li>✓ Speaker meet & greet</li>
                      <li>✓ VIP lounge access</li>
                      <li>✓ Exclusive networking</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-4 sm:pt-6">
                <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4">
                  Secure Your Spot
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 px-4 sm:px-0">
                  Group discounts available for 5+ attendees • Contact info@texasaisummit.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-muted py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <span className="font-bold">Texas AI Summit</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Where AI meets the physical world in the heart of Texas
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#speakers" className="hover:text-primary transition-colors">Speakers</a></li>
                <li><a href="#schedule" className="hover:text-primary transition-colors">Schedule</a></li>
                <li><a href="#sponsors" className="hover:text-primary transition-colors">Sponsors</a></li>
                <li><a href="#register" className="hover:text-primary transition-colors">Register</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@texasaisummit.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (512) 555-0100
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Austin, Texas
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                #TexasAISummit
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Texas AI Summit. All rights reserved.</p>
            <p className="mt-2">March 10-11, 2025 • Austin, Texas</p>
          </div>
        </div>
      </footer>
    </div>
  )
}