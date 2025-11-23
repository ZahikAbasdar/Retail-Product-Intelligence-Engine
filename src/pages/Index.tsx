import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart3, TrendingUp, Package, Database, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useRef } from "react";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time data visualization with interactive 3D charts and comprehensive insights",
      gradient: "from-primary/10 via-primary/5 to-transparent"
    },
    {
      icon: TrendingUp,
      title: "Pricing Intelligence",
      description: "Track pricing trends across competitors with predictive analysis",
      gradient: "from-secondary/10 via-secondary/5 to-transparent"
    },
    {
      icon: Package,
      title: "Product Insights",
      description: "Deep analysis of product performance with customer sentiment tracking",
      gradient: "from-accent/10 via-accent/5 to-transparent"
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "Lightning-fast processing with automated intelligent reports",
      gradient: "from-destructive/10 via-destructive/5 to-transparent"
    },
  ];

  const stats = [
    { value: "21,000+", label: "Products", icon: Package },
    { value: "50+", label: "Companies", icon: BarChart3 },
    { value: "99.9%", label: "Accuracy", icon: Zap },
    { value: "24/7", label: "Monitoring", icon: TrendingUp },
  ];

  return (
    <Layout>
      <div ref={containerRef} className="smooth-scroll">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
          {/* Gradient Mesh Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(0_85%_62%/0.08)_0%,transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(45_95%_55%/0.08)_0%,transparent_50%)] pointer-events-none" />
          
          {/* Floating Orbs */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-3xl"
            animate={{ 
              scale: [1.1, 1, 1.1],
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="container mx-auto px-6 py-20 relative z-10">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
              className="max-w-5xl mx-auto text-center space-y-12"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex"
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-primary/20">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">
                    Professional Intelligence Platform
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-extra-tight">
                  <span className="block bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                    Retail
                  </span>
                  <span className="block bg-gradient-to-br from-primary via-destructive to-primary bg-clip-text text-transparent">
                    Intelligence
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed text-balance">
                  Transform marketplace data into actionable insights with premium analytics and 3D visualization
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/dashboard">
                  <Button 
                    size="lg" 
                    className="h-14 px-8 text-base font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    Open Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="h-14 px-8 text-base font-semibold rounded-2xl glass-card hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02]"
                  >
                    View Products
                    <Package className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-12"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                    >
                      <stat.icon className="h-6 w-6 text-primary mb-3 mx-auto" />
                      <div className="text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                Powerful Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need for data-driven retail decisions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="glass-card p-8 h-full relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      
                      <div className="mt-6 h-0.5 bg-gradient-to-r from-primary/50 via-primary/10 to-transparent rounded-full" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl" />
                
                <div className="relative space-y-8">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
                    <span className="block bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">
                      Ready to Transform
                    </span>
                    <span className="block bg-gradient-to-br from-primary via-destructive to-primary bg-clip-text text-transparent">
                      Your Strategy?
                    </span>
                  </h2>
                  
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Start exploring powerful insights with our premium analytics platform
                  </p>
                  
                  <div className="pt-4">
                    <Link to="/dashboard">
                      <Button 
                        size="lg" 
                        className="h-16 px-10 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      >
                        Get Started Now
                        <ArrowRight className="ml-2 h-6 w-6" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
