'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, MapPin, Menu, X, Users, ChevronRight, Brain, Cpu, Sparkles, Mail, Phone, Star, Zap, Building2, Lightbulb, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react'

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
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Texas AI', href: '#texas-ai' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'FAQ', href: '#faq' },
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

  const scheduleDay1 = [
    {
      time: '9:00 AM',
      title: 'Breakfast & Coffee',
      description: 'Start your day with networking and Texas-style breakfast',
    },
    {
      time: '10:00 AM',
      title: 'Kickoff Keynote',
      description: 'Setting the stage for AI innovation in Texas',
    },
    {
      time: '11:00 AM',
      title: 'Track Sessions Begin',
      description: 'Split into Software and Physical AI tracks',
    },
    {
      time: '12:00 PM',
      title: 'Lunch',
      description: 'Networking lunch with attendees and speakers',
    },
    {
      time: '1:00 PM',
      title: 'Big Panel: Texas Research Labs',
      description: 'Applied research at UT Austin, Rice, A&M, and more',
    },
    {
      time: '2:00 PM',
      title: 'Track Session 3',
      description: 'Deep dive sessions in both Software and Physical tracks',
    },
    {
      time: '3:00 PM',
      title: 'Track Session 4 & Vendor Showcase',
      description: 'Continued learning and vendor demonstrations',
    },
    {
      time: '4:00 PM',
      title: 'Track Session 5 & Vendor Showcase',
      description: 'Final afternoon sessions and vendor interactions',
    },
    {
      time: '5:00 PM',
      title: 'Happy Hour Event',
      description: 'Unwind and network with fellow AI enthusiasts',
    },
    {
      time: '7:00 PM',
      title: 'Curated Dinner',
      description: 'Exclusive dinner with speakers and industry leaders',
    },
  ]

  const scheduleDay2 = [
    {
      time: '9:00 AM',
      title: 'Day 2 Welcome & Coffee',
      description: 'Energize for another day of AI insights and networking',
    },
    {
      time: '10:00 AM',
      title: 'Main Keynote',
      description: 'Visionary address on the future of AI in Texas',
    },
    {
      time: '11:00 AM',
      title: 'Track 3 Sessions',
      description: 'Advanced topics and specialized sessions',
    },
    {
      time: '12:00 PM',
      title: 'Networking Lunch',
      description: 'Connect with fellow AI practitioners and speakers',
    },
    {
      time: '1:00 PM',
      title: 'Track 3 Sessions Continue',
      description: 'Deep dive into specialized AI applications',
    },
    {
      time: '2:00 PM',
      title: 'Interactive Sessions',
      description: 'Hands-on workshops and collaborative problem-solving',
    },
    {
      time: '3:00 PM',
      title: 'Closing Keynote & Awards',
      description: 'Celebrating Texas AI achievements and looking ahead',
    },
    {
      time: '4:00 PM',
      title: 'Final Networking Reception',
      description: 'Conclude with Texas hospitality and lasting connections',
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

  const faqs = [
    {
      question: 'Who should attend the Texas AI Summit?',
      answer: 'Business leaders, AI practitioners, developers, researchers, and anyone interested in AI applications for energy, manufacturing, agriculture, and other physical-world industries. Perfect for those looking to understand and implement AI in Texas-specific contexts.',
    },
    {
      question: 'What makes this summit different from other AI conferences?',
      answer: 'We focus specifically on AI applications in industries that matter to Texas - energy, physical infrastructure, agriculture, and logistics. Our two-track system (AI Today & AI Tomorrow) provides both practical implementations and visionary insights.',
    },
    {
      question: 'Is the venue confirmed?',
      answer: 'We are finalizing venue details with Fair Market as our top choice. The location will be confirmed soon and will be easily accessible in Austin with ample parking and public transport options.',
    },
    {
      question: 'What is included in the VIP dinner?',
      answer: 'The VIP dinner on March 10th includes an exclusive networking opportunity with speakers, industry leaders, and fellow VIP attendees. It features a curated Texas cuisine experience and intimate roundtable discussions.',
    },
    {
      question: 'Are there group discounts available?',
      answer: 'Yes! We offer discounts for groups of 5 or more attendees. Contact us at info@texasaisummit.com for group pricing.',
    },
    {
      question: 'Will sessions be recorded?',
      answer: 'Select keynote sessions will be recorded and made available to attendees post-event. Interactive workshops and certain panels will be live-only experiences.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-primary to-primary/80 rounded-xl shadow-sm">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-foreground">Texas AI Summit</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navigation.slice(0, -1).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Button className="ml-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white shadow-sm hover:shadow-md transition-all duration-300">
                Register Now
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-muted-foreground" /> : <Menu className="h-6 w-6 text-muted-foreground" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg">
              <div className="container mx-auto px-4 py-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-card">
        {/* Premium geometric background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(theme(colors.border)_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        </div>
        
        {/* Sophisticated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full blur-3xl opacity-70 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-destructive/10 to-destructive/20 rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full blur-3xl opacity-50 animate-blob animation-delay-4000" />
        </div>
        
        <div className="container relative mx-auto px-4 py-32 text-center">
          <div className="animate-fade-in">
            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">March 10-11, 2025</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-foreground">Texas</span>
              <span className="bg-gradient-to-r from-primary to-primary/90 bg-clip-text text-transparent"> AI </span>
              <span className="text-foreground">Summit</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-foreground/80 mb-6 max-w-3xl mx-auto font-light">
              Where Innovation Meets Industry
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              The premier conference connecting AI pioneers with Texas's powerhouse industries—energy, manufacturing, agriculture, and beyond.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 bg-muted rounded-lg">
                  <Calendar className="h-4 w-4" />
                </div>
                <span className="font-medium">2 Days</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-border" />
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 bg-muted rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="font-medium">Austin, TX</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-border" />
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 bg-muted rounded-lg">
                  <Users className="h-4 w-4" />
                </div>
                <span className="font-medium">500+ Attendees</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                Secure Your Spot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 hover:bg-muted transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">About the Summit</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">AI Innovation, Texas Style</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Texas AI Summit brings together the unique intersection of cutting-edge AI technology 
              with the industries that power Texas and the world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-primary/90" />
              <CardHeader className="text-center pt-8">
                <div className="p-4 bg-primary/10 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">Energy & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Explore AI applications in oil & gas, renewable energy, and critical infrastructure management
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-destructive to-destructive/80" />
              <CardHeader className="text-center pt-8">
                <div className="p-4 bg-destructive/10 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-destructive" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">Physical World AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  From manufacturing to agriculture, see how AI transforms tangible industries
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-accent to-accent/80" />
              <CardHeader className="text-center pt-8">
                <div className="p-4 bg-accent/10 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-8 w-8 text-accent/80" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">Texas Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Connect with the thriving Texas AI ecosystem and discover local opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tracks" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Conference Tracks</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">Two Tracks, One Vision</h2>
            <p className="text-xl text-muted-foreground">
              Choose your path or mix and match between software and physical world applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-card">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/90" />
              <CardHeader className="text-center pt-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">Software Track</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">AI Development & Implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">AI/ML model development and deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Software engineering best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Technical deep-dives and hands-on workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Infrastructure and scaling strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-card">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-destructive/80" />
              <CardHeader className="text-center pt-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-destructive/10 to-destructive/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-10 w-10 text-destructive" />
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">Physical Track</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">AI in Physical Industries</CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Physical world AI applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Industry transformation case studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Implementation strategy and planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">ROI analysis and market opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="speakers" className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Speakers</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">Featured Speakers</h2>
            <p className="text-xl text-muted-foreground">
              Industry leaders and innovators shaping AI in Texas
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-3">
              Speaker lineup to be announced soon
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={`speaker-${index}-${speaker.name}`} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted ring-4 ring-muted group-hover:ring-primary/20 transition-all duration-300">
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{speaker.name}</CardTitle>
                  <CardDescription className="text-center">
                    <span className="text-sm text-muted-foreground">{speaker.role}</span><br />
                    <span className="text-sm font-medium text-primary">{speaker.company}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-muted-foreground">{speaker.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Event Schedule</h2>
            <p className="text-xl text-muted-foreground">
              Two days of insights, networking, and hands-on learning
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Day 1 - March 10, 2025
              </h3>
              <div className="space-y-4">
                {scheduleDay1.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex items-center gap-2 min-w-[100px]">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium">{item.time}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Day 2 - March 11, 2025
              </h3>
              <div className="space-y-4">
                {scheduleDay2.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex items-center gap-2 min-w-[100px]">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium">{item.time}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Detailed Track Breakdown</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    Software Track
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between p-4 border-b border-border/50">
                      <span className="font-medium">11:00 AM</span>
                      <span className="text-sm text-muted-foreground">Session 1: AI/ML Fundamentals</span>
                    </div>
                    <div className="flex items-center justify-between p-4 border-b border-border/50">
                      <span className="font-medium">2:00 PM</span>
                      <span className="text-sm text-muted-foreground">Session 2: Model Development</span>
                    </div>
                    <div className="flex items-center justify-between p-4 border-b border-border/50">
                      <span className="font-medium">3:00 PM</span>
                      <span className="text-sm text-muted-foreground">Session 3: Deployment Strategies</span>
                    </div>
                    <div className="flex items-center justify-between p-4 border-b border-border/50">
                      <span className="font-medium">4:00 PM</span>
                      <span className="text-sm text-muted-foreground">Session 4: Infrastructure & Scaling</span>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <span className="font-medium">Day 2</span>
                      <span className="text-sm text-muted-foreground">Advanced Implementation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-destructive/10 to-destructive/5">
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-destructive" />
                    Physical Track
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between p-4 border-b border-border/50">
                      <span className="font-medium">11:00 AM</span>
                      <span className="text-sm text-muted-foreground">Session 1: Industry Applications</span>
                    </div>
                    <div className="flex items-center justify-between p-4 border-b border-border/50">
                      <span className="font-medium">2:00 PM</span>
                      <span className="text-sm text-muted-foreground">Session 2: Implementation Strategy</span>
                    </div>
                    <div className="flex items-center justify-between p-4 border-b border-border/50">
                      <span className="font-medium">3:00 PM</span>
                      <span className="text-sm text-muted-foreground">Session 3: Case Studies</span>
                    </div>
                    <div className="flex items-center justify-between p-4 border-b border-border/50">
                      <span className="font-medium">4:00 PM</span>
                      <span className="text-sm text-muted-foreground">Session 4: ROI & Implementation</span>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <span className="font-medium">Day 2</span>
                      <span className="text-sm text-muted-foreground">Future Applications</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-8 bg-gradient-to-r from-accent/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-center">
                  <MessageSquare className="h-5 w-5 text-accent" />
                  Interactive Sessions & Special Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="font-semibold mb-2">Research Panel</h4>
                    <p className="text-sm text-muted-foreground">Texas Research Labs: UT Austin, Rice, A&M applied research</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Vendor Showcase</h4>
                    <p className="text-sm text-muted-foreground">Live demonstrations from leading AI solution providers</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Interactive Workshops</h4>
                    <p className="text-sm text-muted-foreground">Hands-on sessions with AI tools and platforms</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="texas-ai" className="py-20 bg-gradient-to-br from-muted/30 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Texas for AI?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Texas offers unique advantages for AI development and deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  Energy Capital
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Home to the world's energy industry, providing massive datasets and real-world applications for AI in energy optimization and sustainability
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Diverse Industries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From agriculture to aerospace, manufacturing to logistics, Texas industries provide rich opportunities for AI implementation
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-destructive" />
                  Tech Talent Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Growing tech ecosystems in Austin, Dallas, and Houston attract top AI talent and foster innovation
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  Computing Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access to powerful computing resources and data centers essential for AI development and deployment
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent" />
                  Business-Friendly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Pro-business environment with supportive policies for technology companies and startups
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-secondary" />
                  Innovation Culture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Texas spirit of innovation and entrepreneurship drives bold AI initiatives and partnerships
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-destructive p-8 text-white">
              <h2 className="text-3xl font-bold mb-4 text-center">Vendor Fair & Interactive Sessions</h2>
              <p className="text-lg text-center opacity-90">
                Experience the latest AI technologies hands-on
              </p>
            </div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Vendor Fair
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>30+ AI solution providers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Live product demonstrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Texas startup showcase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Networking opportunities</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Interactive Sessions
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Hands-on AI workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Roundtable discussions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Q&A with industry experts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>Collaborative problem-solving</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="sponsors" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Sponsors</h2>
            <p className="text-xl text-muted-foreground">
              Supported by leading companies driving AI innovation in Texas
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-center mb-6">Platinum Sponsors</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {sponsors.filter(s => s.tier === 'platinum').map((sponsor) => (
                  <Card key={sponsor.name} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="h-20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">{sponsor.name}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-center mb-6">Gold & Silver Sponsors</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {sponsors.filter(s => s.tier !== 'platinum').map((sponsor) => (
                  <Card key={sponsor.name} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="h-16 flex items-center justify-center">
                      <span className="text-xl font-semibold">{sponsor.name}</span>
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

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about the Texas AI Summit
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Register for Texas AI Summit</CardTitle>
              <CardDescription className="text-lg">
                Join 300-500 AI innovators shaping the future of Texas industries
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-8">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Early Bird</CardTitle>
                    <div className="text-3xl font-bold text-primary">$399</div>
                    <CardDescription>Until January 15, 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>✓ Full 2-day conference access</li>
                      <li>✓ All track sessions</li>
                      <li>✓ Vendor fair access</li>
                      <li>✓ Networking events</li>
                      <li>✓ Conference materials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-primary relative overflow-visible">
                  <CardHeader className="relative pt-8">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                    <CardTitle>Professional</CardTitle>
                    <div className="text-3xl font-bold text-primary">$599</div>
                    <CardDescription>Standard pricing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>✓ Everything in Early Bird</li>
                      <li>✓ Priority seating</li>
                      <li>✓ Workshop access</li>
                      <li>✓ Session recordings</li>
                      <li>✓ Attendee directory</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>VIP Experience</CardTitle>
                    <div className="text-3xl font-bold text-primary">$999</div>
                    <CardDescription>Limited availability</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>✓ Everything in Professional</li>
                      <li>✓ VIP dinner (March 10)</li>
                      <li>✓ Speaker meet & greet</li>
                      <li>✓ VIP lounge access</li>
                      <li>✓ Exclusive networking</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-6">
                <Button size="lg" className="text-lg px-12 bg-gradient-to-r from-primary to-destructive hover:from-primary/90 hover:to-destructive/90">
                  Secure Your Spot
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Group discounts available for 5+ attendees • Contact info@texasaisummit.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Brain className="h-6 w-6 text-primary" />
                  <Star className="h-2 w-2 text-accent absolute -top-1 -right-1" />
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
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#tracks" className="hover:text-primary transition-colors">Conference Tracks</a></li>
                <li><a href="#speakers" className="hover:text-primary transition-colors">Speakers</a></li>
                <li><a href="#schedule" className="hover:text-primary transition-colors">Schedule</a></li>
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