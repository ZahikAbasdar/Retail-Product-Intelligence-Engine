import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart3, TrendingUp, Package, Zap, ArrowRight, Sparkles, Database, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useRef } from "react";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time data visualization with 3D interactive charts",
      color: "from-primary to-destructive"
    },
    {
      icon: TrendingUp,
      title: "Pricing Intelligence",
      description: "Track pricing trends across competitors and categories",
      color: "from-secondary to-accent"
    },
    {
      icon: Package,
      title: "Product Insights",
      description: "Deep analysis of product performance and customer ratings",
      color: "from-accent to-primary"
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "Lightning-fast data processing and automated reports",
      color: "from-destructive to-secondary"
    },
  ];

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero Section - Asymmetric Split Design */}
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Floating Elements */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="container mx-auto px-4 py-12 relative min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left Side - Content */}
              <motion.div
                style={{ y, opacity }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="space-y-8"
                >
                  <h1 className="text-6xl md:text-8xl font-black leading-tight">
                    <motion.span 
                      className="block bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      RETAIL
                    </motion.span>
                    <motion.span 
                      className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      INTELLIGENCE
                    </motion.span>
                  </h1>
                  
                  <motion.p 
                    className="text-2xl text-muted-foreground max-w-xl font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    Unlock powerful insights from Amazon marketplace data with 3D analytics
                  </motion.p>
                </motion.div>

                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <Link to="/dashboard">
                    <Button size="lg" className="gap-2 text-lg px-10 py-6 rounded-full shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all">
                      Launch Dashboard
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button size="lg" variant="outline" className="gap-2 text-lg px-10 py-6 rounded-full border-2 hover:bg-primary/5">
                      Explore Products
                      <Package className="h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Side - 3D Card Stack */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative h-[600px] hidden lg:block perspective-1000"
              >
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-2 border-primary/20 rounded-3xl shadow-2xl"
                    initial={{
                      rotateY: index * 5,
                      x: index * 20,
                    }}
                    animate={{
                      rotateY: [index * 5, index * 5 + 10, index * 5],
                      x: [index * 20, index * 20 + 10, index * 20],
                    }}
                    transition={{
                      duration: 5,
                      delay: index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="p-8 h-full flex flex-col justify-between">
                      <div className="space-y-4">
                        <LineChart className="h-16 w-16 text-primary" />
                        <h3 className="text-3xl font-bold">Real-time Analytics</h3>
                        <p className="text-muted-foreground text-lg">Track 21,000+ products across Indian MNCs</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-primary/10 rounded-xl">
                          <div className="text-3xl font-bold text-primary">99.9%</div>
                          <div className="text-sm text-muted-foreground">Accuracy</div>
                        </div>
                        <div className="p-4 bg-secondary/10 rounded-xl">
                          <div className="text-3xl font-bold text-secondary">24/7</div>
                          <div className="text-sm text-muted-foreground">Updates</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section - Diagonal Layout */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 -skew-y-3 transform origin-top-left" />
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                CAPABILITIES
              </h2>
              <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <Card className="relative h-full border-2 border-border/50 bg-card/80 backdrop-blur-xl overflow-hidden group hover:border-primary/50 transition-all duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <CardContent className="p-8 relative">
                      <motion.div 
                        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className="h-10 w-10 text-primary" />
                      </motion.div>
                      <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                      <motion.div 
                        className="mt-6 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section - Rotated Cards */}
        <section className="py-32 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "21K+", label: "Products Analyzed", icon: Package },
                { value: "50+", label: "Companies Tracked", icon: BarChart3 },
                { value: "99.9%", label: "Data Accuracy", icon: Zap },
                { value: "24/7", label: "Real-time Updates", icon: TrendingUp },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, rotateX: -90, y: 50 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8, type: "spring" }}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-2 border-primary/20 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                    <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-3">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Bold Asymmetric */}
        <section className="py-32 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/30 via-destructive/20 to-secondary/30"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <div className="absolute inset-0 backdrop-blur-3xl" />
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-2xl border-2 border-primary/30 rounded-[3rem] p-12 md:p-16 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
                
                <div className="relative">
                  <motion.h2 
                    className="text-5xl md:text-7xl font-black mb-8 leading-tight"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="block bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">
                      TRANSFORM YOUR
                    </span>
                    <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                      RETAIL STRATEGY
                    </span>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-2xl text-muted-foreground mb-12 max-w-2xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Start exploring powerful insights today with comprehensive analytics
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link to="/dashboard">
                      <Button size="lg" className="gap-3 text-xl px-12 py-8 rounded-full shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all duration-300">
                        Launch Platform
                        <ArrowRight className="h-6 w-6" />
                      </Button>
                    </Link>
                  </motion.div>
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
