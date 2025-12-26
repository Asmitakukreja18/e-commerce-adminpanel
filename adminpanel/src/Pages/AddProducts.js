import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  Paper,
  Switch,
  IconButton
} from "@mui/material";
import { ArrowBack, Add, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Box>
          <Typography fontSize={24} fontWeight={700}>
            Add New Product
          </Typography>
          <Typography color="text.secondary">
            Fill in the product details below
          </Typography>
        </Box>

        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/products")}
        >
          Back to Products
        </Button>
      </Box>

      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Box display="grid" gridTemplateColumns={{ md: "1fr 1fr" }} gap={3}>
          <TextField label="Product Name *" />
          <TextField label="SKU *" />

          <Select defaultValue="">
            <MenuItem value="">Select Category</MenuItem>
            <MenuItem>Vegetables</MenuItem>
            <MenuItem>Fruits</MenuItem>
          </Select>

          <Select defaultValue="">
            <MenuItem value="">Select Sub-Category</MenuItem>
            <MenuItem>Leafy</MenuItem>
            <MenuItem>Root</MenuItem>
          </Select>
        </Box>

        <Box
          mt={4}
          p={4}
          border="2px dashed #D1D5DB"
          borderRadius={3}
          textAlign="center"
          sx={{ cursor: "pointer", "&:hover": { borderColor: "#16A34A" } }}
        >
          <Typography>Click to upload or drag & drop</Typography>
          <Typography fontSize={12} color="text.secondary">
            PNG, JPG up to 5MB
          </Typography>
        </Box>

        <Box mt={4} display="grid" gridTemplateColumns={{ md: "1fr 1fr 1fr" }} gap={3}>
          <TextField label="Price *" type="number" InputProps={{ startAdornment: "₹" }} />
          <Select defaultValue="">
            <MenuItem value="">Unit</MenuItem>
            <MenuItem>kg</MenuItem>
            <MenuItem>g</MenuItem>
          </Select>
          <TextField label="Stock Quantity *" type="number" />
        </Box>

        <Box mt={4}>
          <Typography fontWeight={600} mb={1}>Variants</Typography>
          <Box display="flex" gap={2}>
            <TextField fullWidth placeholder="Variant name (500g)" />
            <TextField type="number" placeholder="Price" />
            <IconButton color="error"><Delete /></IconButton>
          </Box>

          <Button startIcon={<Add />} sx={{ mt: 2, color: "#16A34A" }}>
            Add Variant
          </Button>
        </Box>

        <TextField
          multiline
          rows={4}
          label="Description"
          fullWidth
          sx={{ mt: 4 }}
        />

        
        <Box display="flex" alignItems="center" gap={2} mt={3}>
          <Switch defaultChecked color="success" />
          <Typography fontWeight={600}>Active Product</Typography>
        </Box>

        <Box mt={4} display="flex" gap={2}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#16A34A", px: 4 }}
          >
            Save Product
          </Button>
          <Button variant="outlined" onClick={() => navigate("/products")}>
            Cancel
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
