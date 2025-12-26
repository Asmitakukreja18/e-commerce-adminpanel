import {
  Box,
  Typography,
  Button,
  Paper,
  TextField,
  Select,
  MenuItem,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip
} from "@mui/material";

import {
  Download,
  CheckCircle,
  Error,
  Cancel
} from "@mui/icons-material";

const stats = [
  {
    label: "In Stock Products",
    value: 245,
    icon: <CheckCircle />,
    bg: "#DCFCE7",
    color: "#16A34A"
  },
  {
    label: "Low Stock Items",
    value: 23,
    icon: <Error />,
    bg: "#FEF9C3",
    color: "#CA8A04"
  },
  {
    label: "Out of Stock",
    value: 19,
    icon: <Cancel />,
    bg: "#FEE2E2",
    color: "#DC2626"
  }
];

const inventory = [
  {
    name: "Fresh Tomatoes",
    sku: "VEG001",
    img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=100",
    category: "Vegetables",
    variant: "500g",
    stock: "150 units",
    status: "In Stock",
    color: "success"
  },
  {
    name: "Fresh Red Apples",
    sku: "FRT001",
    img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=100",
    category: "Fruits",
    variant: "1kg",
    stock: "15 units",
    status: "Low Stock",
    color: "warning"
  },
  {
    name: "Red Onions",
    sku: "VEG002",
    img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=100",
    category: "Vegetables",
    variant: "1kg",
    stock: "0 units",
    status: "Out of Stock",
    color: "error"
  }
];

export default function InventoryManagement() {
  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Box>
          <Typography fontSize={24} fontWeight={700}>
            Inventory Management
          </Typography>
          <Typography color="text.secondary">
            Monitor and manage stock levels
          </Typography>
        </Box>

        <Button
          startIcon={<Download />}
          sx={{
            bgcolor: "#16A34A",
            color: "#fff",
            px: 3,
            py: 1.5,
            borderRadius: "12px",
            fontWeight: 600,
            "&:hover": { bgcolor: "#15803D" }
          }}
        >
          Download Report
        </Button>
      </Box>
      <Grid container spacing={3} mb={4}>
        {stats.map((s, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper
              sx={{
                p: 3,
                borderRadius: "16px",
                border: "1px solid #eee"
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: s.bg,
                  color: s.color,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2
                }}
              >
                {s.icon}
              </Box>

              <Typography fontSize={14} color="text.secondary">
                {s.label}
              </Typography>
              <Typography fontSize={28} fontWeight={700}>
                {s.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ borderRadius: 3, border: "1px solid #eee" }}>
       
        <Box p={3} display="flex" gap={2}>
          <TextField size="small" placeholder="Search inventory..." />
          <Select size="small" defaultValue="">
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem>Vegetables</MenuItem>
            <MenuItem>Fruits</MenuItem>
          </Select>
          <Select size="small" defaultValue="">
            <MenuItem value="">All Stock Status</MenuItem>
            <MenuItem>In Stock</MenuItem>
            <MenuItem>Low Stock</MenuItem>
            <MenuItem>Out of Stock</MenuItem>
          </Select>
        </Box>

        <Table>
          <TableHead sx={{ bgcolor: "#F9FAFB" }}>
            <TableRow>
              {[
                "Product",
                "Category",
                "Variant",
                "Current Stock",
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
            {inventory.map((item, i) => (
              <TableRow key={i} hover>
                <TableCell>
                  <Box display="flex" gap={2} alignItems="center">
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 8,
                        objectFit: "cover"
                      }}
                    />
                    <Box>
                      <Typography fontWeight={600}>
                        {item.name}
                      </Typography>
                      <Typography fontSize={12} color="text.secondary">
                        SKU: {item.sku}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell>{item.category}</TableCell>
                <TableCell>{item.variant}</TableCell>

                <TableCell
                  sx={{
                    fontWeight: 600,
                    color:
                      item.color === "error"
                        ? "#DC2626"
                        : item.color === "warning"
                        ? "#CA8A04"
                        : "#111827"
                  }}
                >
                  {item.stock}
                </TableCell>

                <TableCell>
                  <Chip
                    label={item.status}
                    color={item.color}
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
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
                    Update Stock
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
            Showing 1 to 5 of 287 entries
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
