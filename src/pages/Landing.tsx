import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Users, Trophy, Rocket, Github, Linkedin, Mail, Moon, Sun, Sparkles } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const clubIncharges = [
  {
    name: "Dr. Sarah Chen",
    role: "Faculty Advisor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "Professor of Computer Science",
    links: { github: "#", linkedin: "#", email: "sarah.chen@university.edu" }
  },
  {
    name: "Alex Rodriguez",
    role: "President",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Full Stack Developer & AI Enthusiast",
    links: { github: "#", linkedin: "#", email: "alex.r@codingclub.org" }
  },
  {
    name: "Maya Patel",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    bio: "Competitive Programmer & Mentor",
    links: { github: "#", linkedin: "#", email: "maya.p@codingclub.org" }
  },
  {
    name: "Jordan Lee",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    bio: "Open Source Contributor & Workshop Coordinator",
    links: { github: "#", linkedin: "#", email: "jordan.l@codingclub.org" }
  }
];

export default function Landing() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    // Set initial theme to dark
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating Theme Toggle */}
      <Button
        onClick={toggleTheme}
        size="icon"
        className="fixed top-6 right-6 z-50 rounded-full shadow-glow bg-card/80 backdrop-blur-sm border border-border hover:scale-110 transition-all"
        variant="ghost"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-glow">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold">Welcome to Coding Club 2025</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              One Platform.<br />Every Coder.
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed">
              Join our vibrant community of developers, participate in challenges, 
              learn new skills, and build amazing projects together.
            </p>

            <div className="flex gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                onClick={() => navigate('/auth')}
                className="bg-gradient-primary hover:opacity-90 transition-all shadow-glow hover:shadow-xl hover:scale-105 text-lg px-8 py-6"
              >
                <Rocket className="mr-2 h-6 w-6" />
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/auth?mode=login')}
                className="border-2 hover:bg-accent/10 hover:border-primary transition-all hover:scale-105 text-lg px-8 py-6"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-accent opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">Why Join Us?</h2>
          <p className="text-center text-foreground/70 text-lg mb-16">Everything you need to excel in your coding journey</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-glow transition-all duration-500 border-border/50 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 bg-gradient-card">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all shadow-glow">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Compete & Win</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Participate in coding challenges, hackathons, and competitions. 
                  Climb the leaderboard and earn recognition.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-500 border-border/50 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 bg-gradient-card">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all shadow-glow">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Learn & Grow</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Access daily practice questions, workshops, and mentorship programs 
                  to enhance your coding skills.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-500 border-border/50 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 bg-gradient-card">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all shadow-glow">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Build Community</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Connect with fellow developers, collaborate on projects, 
                  and be part of a supportive coding community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">About Coding Club</h2>
          <p className="text-lg text-foreground/80 leading-relaxed font-medium">
            Founded with a mission to create an inclusive space for all coding enthusiasts, 
            our club has grown into a thriving community of developers, designers, and tech 
            innovators. We organize regular workshops, coding competitions, hackathons, and 
            collaborative projects that help members level up their skills and build real-world 
            experience.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed font-medium">
            Whether you're a beginner taking your first steps in programming or an experienced 
            developer looking to explore new technologies, the Coding Club provides the perfect 
            environment to learn, grow, and succeed together.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Meet Our Leadership</h2>
            <p className="text-foreground/70 text-xl font-medium">
              The amazing people who make it all happen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubIncharges.map((member, index) => (
              <Card 
                key={index}
                className="group hover:shadow-glow transition-all duration-500 border-border/50 backdrop-blur-sm overflow-hidden hover:scale-105 hover:-translate-y-2 bg-gradient-card"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-primary font-semibold">{member.role}</p>
                  </div>
                  <p className="text-sm text-foreground/70">{member.bio}</p>
                  <div className="flex gap-3 pt-2">
                    <a 
                      href={member.links.github} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.links.linkedin} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${member.links.email}`} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">Ready to Start Your Journey?</h2>
          <p className="text-xl md:text-2xl text-foreground/80 font-medium">
            Join hundreds of students already learning and growing with us
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/auth')}
            className="bg-gradient-primary hover:opacity-90 transition-all shadow-glow hover:shadow-xl hover:scale-110 text-lg px-8 py-6"
          >
            <Rocket className="mr-2 h-6 w-6" />
            Join Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Coding Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
