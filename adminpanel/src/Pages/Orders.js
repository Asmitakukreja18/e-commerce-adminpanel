import {
  Box,
  Typography,
  Paper,
  TextField,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from "@mui/material";

const orders = [
  {
    id: "#SGM2024001",
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    time: "Today, 10:30 AM",
    items: "3 items",
    amount: "₹340",
    status: "Delivered",
    color: "#DCFCE7",
    text: "#16A34A"
  },
  {
    id: "#SGM2024002",
    name: "Priya Sharma",
    phone: "+91 98765 43211",
    time: "Today, 11:15 AM",
    items: "5 items",
    amount: "₹520",
    status: "Processing",
    color: "#DBEAFE",
    text: "#2563EB"
  },
  {
    id: "#SGM2024003",
    name: "Amit Patel",
    phone: "+91 98765 43212",
    time: "Today, 12:00 PM",
    items: "2 items",
    amount: "₹285",
    status: "Pending",
    color: "#FEF9C3",
    text: "#CA8A04"
  }
];

export default function OrdersManagement() {
  return (
    <Box p={3}>
      <Box mb={4}>
        <Typography fontSize={24} fontWeight={700}>
          Order Management
        </Typography>
        <Typography color="text.secondary">
          View and manage customer orders
        </Typography>
      </Box>

      <Paper sx={{ borderRadius: 3, border: "1px solid #eee" }}>
      
        <Box p={3} display="flex" gap={2}>
          <TextField size="small" placeholder="Search orders..." />

          <Select size="small" defaultValue="">
            <MenuItem value="">All Status</MenuItem>
            <MenuItem>Pending</MenuItem>
            <MenuItem>Processing</MenuItem>
            <MenuItem>Delivered</MenuItem>
            <MenuItem>Cancelled</MenuItem>
          </Select>

          <TextField size="small" type="date" />
        </Box>

        <Table>
          <TableHead sx={{ bgcolor: "#F9FAFB" }}>
            <TableRow>
              {[
                "Order ID",
                "Customer",
                "Date & Time",
                "Items",
                "Amount",
                "Status",
                "Actions"
              ].map(h => (
                <TableCell
                  key={h}
                  sx={{ fontSize: 12, fontWeight: 700 }}
                >
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((o, i) => (
              <TableRow key={i} hover>
                <TableCell sx={{ fontWeight: 600 }}>
                  {o.id}
                </TableCell>

                <TableCell>
                  <Typography fontWeight={600}>{o.name}</Typography>
                  <Typography fontSize={12} color="text.secondary">
                    {o.phone}
                  </Typography>
                </TableCell>

                <TableCell>{o.time}</TableCell>
                <TableCell>{o.items}</TableCell>

                <TableCell sx={{ fontWeight: 600 }}>
                  {o.amount}
                </TableCell>

                <TableCell>
                  <Select
                    size="small"
                    defaultValue={o.status}
                    sx={{
                      bgcolor: o.color,
                      color: o.text,
                      fontSize: 12,
                      fontWeight: 700,
                      borderRadius: "999px",
                      ".MuiOutlinedInput-notchedOutline": {
                        border: "none"
                      }
                    }}
                  >
                    <MenuItem value="Delivered">Delivered</MenuItem>
                    <MenuItem value="Processing">Processing</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                  </Select>
                </TableCell>

                <TableCell>
                  <Button
                    size="small"
                    sx={{
                      color: "#2563EB",
                      fontWeight: 600,
                      textTransform: "none"
                    }}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize={14} color="text.secondary">
            Showing 1 to 5 of 1,248 entries
          </Typography>

          <Box display="flex" gap={1}>
            <Button size="small" variant="outlined">
              Previous
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{ bgcolor: "#16A34A" }}
            >
              1
            </Button>
            <Button size="small" variant="outlined">
              2
            </Button>
            <Button size="small" variant="outlined">
              3
            </Button>
            <Button size="small" variant="outlined">
              Next
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
