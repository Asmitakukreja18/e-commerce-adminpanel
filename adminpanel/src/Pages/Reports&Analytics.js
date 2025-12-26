import {
  Box,
  Typography,
  Paper,
  Select,
  MenuItem,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar
} from "@mui/material";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function ReportsAnalytics() {
  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Box>
          <Typography fontSize={24} fontWeight={700}>
            Reports & Analytics
          </Typography>
          <Typography color="text.secondary">
            View detailed sales and inventory reports
          </Typography>
        </Box>

        <Box display="flex" gap={2}>
          <Select size="small" defaultValue="7">
            <MenuItem value="7">Last 7 Days</MenuItem>
            <MenuItem value="30">Last 30 Days</MenuItem>
            <MenuItem value="90">Last 3 Months</MenuItem>
            <MenuItem value="365">Last Year</MenuItem>
          </Select>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#16A34A",
              px: 3,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 600
            }}
          >
            Export Report
          </Button>
        </Box>
      </Box>

      <Box display="grid" gridTemplateColumns={{ lg: "1fr 1fr" }} gap={3} mb={3}>
        <Paper sx={card}>
          <Typography fontWeight={700} mb={2}>
            Top Selling Products
          </Typography>
          <Bar
            data={{
              labels: ["Tomatoes", "Apples", "Bananas", "Potatoes"],
              datasets: [
                {
                  data: [120, 90, 75, 60],
                  backgroundColor: "#22C55E"
                }
              ]
            }}
            options={{ plugins: { legend: { display: false } } }}
          />
        </Paper>

        <Paper sx={card}>
          <Typography fontWeight={700} mb={2}>
            Category-wise Sales
          </Typography>
          <Doughnut
            data={{
              labels: ["Vegetables", "Fruits", "Dairy", "Grocery"],
              datasets: [
                {
                  data: [40, 30, 15, 15],
                  backgroundColor: [
                    "#22C55E",
                    "#60A5FA",
                    "#FACC15",
                    "#F97316"
                  ]
                }
              ]
            }}
          />
        </Paper>
      </Box>

      <Box display="grid" gridTemplateColumns={{ lg: "1fr 1fr" }} gap={3} mb={3}>
        <Paper sx={card}>
          <Typography fontWeight={700} mb={2}>
            Daily Sales Trend
          </Typography>
          <Line
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  data: [12000, 15000, 13800, 17000, 18500, 21000, 19500],
                  borderColor: "#16A34A",
                  tension: 0.4
                }
              ]
            }}
            options={{ plugins: { legend: { display: false } } }}
          />
        </Paper>

        <Paper sx={card}>
          <Typography fontWeight={700} mb={2}>
            Low Stock Alert
          </Typography>

          {[
            {
              name: "Red Onions",
              qty: 0,
              color: "#FEE2E2",
              text: "#DC2626"
            },
            {
              name: "Fresh Red Apples",
              qty: 15,
              color: "#FEF9C3",
              text: "#CA8A04"
            },
            {
              name: "Organic Carrots",
              qty: 18,
              color: "#FEF9C3",
              text: "#CA8A04"
            }
          ].map((item, i) => (
            <Box
              key={i}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={1.5}
              mb={1}
              borderRadius={2}
              bgcolor={item.color}
            >
              <Box display="flex" gap={1.5} alignItems="center">
                <Avatar variant="rounded" />
                <Typography fontWeight={600}>{item.name}</Typography>
              </Box>
              <Typography fontWeight={700} color={item.text}>
                {item.qty}
              </Typography>
            </Box>
          ))}
        </Paper>
      </Box>

      <Paper sx={{ ...card, mt: 3 }}>
        <Typography fontWeight={700} mb={2}>
          Sales Summary
        </Typography>

        <Table>
          <TableHead sx={{ bgcolor: "#F9FAFB" }}>
            <TableRow>
              {["Period", "Orders", "Revenue", "Avg Order Value", "Growth"].map(
                h => (
                  <TableCell key={h} sx={{ fontSize: 12, fontWeight: 700 }}>
                    {h}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {[
              ["Today", 45, "₹18,500", "₹411", "+12.5%"],
              ["Yesterday", 52, "₹21,200", "₹408", "+8.3%"],
              ["This Week", 312, "₹1,28,400", "₹412", "+15.2%"],
              ["This Month", 1248, "₹5,12,000", "₹410", "+18.7%"]
            ].map((r, i) => (
              <TableRow key={i} hover>
                <TableCell fontWeight={600}>{r[0]}</TableCell>
                <TableCell>{r[1]}</TableCell>
                <TableCell fontWeight={600}>{r[2]}</TableCell>
                <TableCell>{r[3]}</TableCell>
                <TableCell sx={{ color: "#16A34A", fontWeight: 600 }}>
                  {r[4]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

const card = {
  p: 3,
  borderRadius: 3,
  border: "1px solid #eee",
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
};
