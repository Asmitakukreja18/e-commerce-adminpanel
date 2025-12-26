import {
  Box,
  Typography,
  Button,
  Paper,
  TextField,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Switch,
  IconButton,
  Chip
} from "@mui/material";

import { Add, Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Fresh Tomatoes",
    sku: "VEG001",
    img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=100",
    category: "Vegetables",
    price: "₹40/500g",
    stock: "In Stock (150)",
    stockColor: "success",
    active: true
  },
  {
    name: "Fresh Red Apples",
    sku: "FRT001",
    img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=100",
    category: "Fruits",
    price: "₹120/1kg",
    stock: "Low Stock (15)",
    stockColor: "warning",
    active: true
  },
  {
    name: "Red Onions",
    sku: "VEG002",
    img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=100",
    category: "Vegetables",
    price: "₹35/1kg",
    stock: "Out of Stock",
    stockColor: "error",
    active: false
  }
];

export default function ProductManagement() {
  const navigate = useNavigate();

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Box>
          <Typography fontSize={24} fontWeight={700}>
            Product Management
          </Typography>
          <Typography color="text.secondary">
            Add and manage products in your inventory
          </Typography>
        </Box>

        <Button
          startIcon={<Add />}
          onClick={() => navigate("/products/add")}
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
          Add Product
        </Button>
      </Box>

      <Paper sx={{ borderRadius: 3, border: "1px solid #eee" }}>
      
        <Box p={3} display="flex" gap={2}>
          <TextField size="small" placeholder="Search products..." />
          <Select size="small" defaultValue="">
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem>Vegetables</MenuItem>
            <MenuItem>Fruits</MenuItem>
          </Select>
          <Select size="small" defaultValue="">
            <MenuItem value="">All Status</MenuItem>
            <MenuItem>Active</MenuItem>
            <MenuItem>Inactive</MenuItem>
          </Select>
        </Box>

        <Table>
          <TableHead sx={{ bgcolor: "#F9FAFB" }}>
            <TableRow>
              {["Product", "Category", "Price", "Stock", "Status", "Actions"].map(h => (
                <TableCell key={h} sx={{ fontSize: 12, fontWeight: 700 }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((p, i) => (
              <TableRow key={i} hover>
                <TableCell>
                  <Box display="flex" gap={2} alignItems="center">
                    <img
                      src={p.img}
                      alt={p.name}
                      style={{ width: 48, height: 48, borderRadius: 8 }}
                    />
                    <Box>
                      <Typography fontWeight={600}>{p.name}</Typography>
                      <Typography fontSize={12} color="text.secondary">
                        SKU: {p.sku}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell>{p.category}</TableCell>
                <TableCell fontWeight={600}>{p.price}</TableCell>

                <TableCell>
                  <Chip
                    label={p.stock}
                    color={p.stockColor}
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
                </TableCell>

                <TableCell>
                  <Switch checked={p.active} color="success" />
                </TableCell>

                <TableCell>
                  <IconButton color="primary"><Edit /></IconButton>
                  <IconButton color="error"><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box p={2} display="flex" justifyContent="space-between">
          <Typography fontSize={14}>Showing 1 to 5 of 287 entries</Typography>
          <Box display="flex" gap={1}>
            <Button size="small" variant="outlined">Previous</Button>
            <Button size="small" variant="contained" sx={{ bgcolor: "#16A34A" }}>1</Button>
            <Button size="small" variant="outlined">Next</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
