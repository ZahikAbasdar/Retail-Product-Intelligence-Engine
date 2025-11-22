import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Layout from "@/components/Layout";
import { pricingTrends, amazonProducts } from "@/data/sampleData";

const Pricing = () => {
  const priceComparison = amazonProducts.slice(0, 6).map((product) => ({
    name: product.name.split(" ").slice(0, 2).join(" "),
    current: product.price,
    previous: product.price * 1.1,
  }));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Pricing Intelligence</h1>
          <p className="text-muted-foreground">
            Track and analyze pricing trends across products and competitors
          </p>
        </motion.div>

        {/* Main Pricing Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Price Trends - Top Products (Last 6 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={pricingTrends}>
                  <defs>
                    <linearGradient id="colorSamsung" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorOneplus" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorApple" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#eab308" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#eab308" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorSony" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#84cc16" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#84cc16" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #333",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="samsung"
                    stroke="#ef4444"
                    fillOpacity={1}
                    fill="url(#colorSamsung)"
                  />
                  <Area
                    type="monotone"
                    dataKey="oneplus"
                    stroke="#f59e0b"
                    fillOpacity={1}
                    fill="url(#colorOneplus)"
                  />
                  <Area
                    type="monotone"
                    dataKey="apple"
                    stroke="#eab308"
                    fillOpacity={1}
                    fill="url(#colorApple)"
                  />
                  <Area
                    type="monotone"
                    dataKey="sony"
                    stroke="#84cc16"
                    fillOpacity={1}
                    fill="url(#colorSony)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Price Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Current vs Previous Month Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={priceComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#888" angle={-45} textAnchor="end" height={100} />
                  <YAxis stroke="#888" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #333",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="current"
                    stroke="#ef4444"
                    strokeWidth={3}
                    dot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="previous"
                    stroke="#888"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pricing Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">Avg. Price Drop</div>
                <div className="text-3xl font-bold text-green-500 mb-2">-8.2%</div>
                <p className="text-sm text-muted-foreground">
                  Over the last 6 months
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">Most Volatile</div>
                <div className="text-3xl font-bold text-primary mb-2">Apple</div>
                <p className="text-sm text-muted-foreground">
                  ₹4,910 price variation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">Best Value</div>
                <div className="text-3xl font-bold text-primary mb-2">Sony</div>
                <p className="text-sm text-muted-foreground">
                  Highest rating/price ratio
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Pricing;
