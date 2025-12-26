import {
  Box,
  Typography,
  Button,
  Paper,
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Switch,
  IconButton
} from "@mui/material";

import {
  Add,
  Edit,
  Delete
} from "@mui/icons-material";

const categories = [
  { name: "Vegetables", icon: "🥕", sub: 8, products: 45, active: true, bg: "#DCFCE7", color: "#16A34A" },
  { name: "Fruits", icon: "🍎", sub: 6, products: 38, active: true, bg: "#FEE2E2", color: "#DC2626" },
  { name: "Dairy", icon: "🧀", sub: 5, products: 32, active: true, bg: "#DBEAFE", color: "#2563EB" },
  { name: "Grocery", icon: "🍞", sub: 12, products: 78, active: true, bg: "#FEF3C7", color: "#D97706" },
  { name: "Beverages", icon: "☕", sub: 4, products: 28, active: false, bg: "#F3E8FF", color: "#7C3AED" }
];

export default function CategoryManagement() {
  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Box>
          <Typography fontSize={24} fontWeight={700} color="#1F2937">
            Category Management
          </Typography>
          <Typography color="#6B7280">
            Manage product categories and sub-categories
          </Typography>
        </Box>

        <Button
          startIcon={<Add />}
          sx={{
            bgcolor: "#16A34A",
            color: "#fff",
            px: 3,
            py: 1.5,
            borderRadius: "12px",
            fontWeight: 600,
            boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
            "&:hover": { bgcolor: "#15803D" }
          }}
        >
          Add Category
        </Button>
      </Box>

      <Paper
        sx={{
          borderRadius: "16px",
          border: "1px solid #F3F4F6",
          overflow: "hidden"
        }}
      >
        <Box p={3} display="flex" gap={2}>
          <TextField
            placeholder="Search categories..."
            size="small"
            sx={{ width: 250 }}
          />

          <Select size="small" value="all" sx={{ width: 160 }}>
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </Box>

        <Table>
          <TableHead sx={{ bgcolor: "#F9FAFB" }}>
            <TableRow>
              {["Category Name", "Icon", "Sub-Categories", "Products", "Status", "Actions"].map(h => (
                <TableCell
                  key={h}
                  sx={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#6B7280",
                    textTransform: "uppercase"
                  }}
                >
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {categories.map((c, i) => (
              <TableRow
                key={i}
                hover
                sx={{ "&:hover": { bgcolor: "#F9FAFB" } }}
              >
                <TableCell sx={{ fontWeight: 600 }}>{c.name}</TableCell>

                <TableCell>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: c.bg,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18
                    }}
                  >
                    {c.icon}
                  </Box>
                </TableCell>

                <TableCell>{c.sub}</TableCell>
                <TableCell>{c.products}</TableCell>

                <TableCell>
                  <Switch checked={c.active} color="success" />
                </TableCell>

                <TableCell>
                  <IconButton sx={{ color: "#2563EB" }}>
                    <Edit />
                  </IconButton>
                  <IconButton sx={{ color: "#DC2626" }}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box
          p={2}
          borderTop="1px solid #F3F4F6"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize={14} color="#6B7280">
            Showing 1 to 5 of 5 entries
          </Typography>

          <Box display="flex" gap={1}>
            <Button variant="outlined" size="small">Previous</Button>
            <Button variant="contained" size="small" sx={{ bgcolor: "#16A34A" }}>
              1
            </Button>
            <Button variant="outlined" size="small">Next</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
