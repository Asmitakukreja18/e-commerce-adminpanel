import {
  Box,
  Typography,
  IconButton,
  Badge
} from "@mui/material";

import {
  Menu,
  Notifications,
  Search
} from "@mui/icons-material";

import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Dashboard",
  "/categories": "Category Management",
  "/products": "Product Management",
  "/inventory": "Inventory Management",
  "/orders": "Order Management",
  "/analytics": "Reports & Analytics",
  "/settings": "Settings"
};

export default function Topbar({ onMenuClick }) {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <Box
      component="header"
      sx={{
        height: 66,
        bgcolor: "#fff",
        borderBottom: "1px solid #e5e7eb",
        borderLeft: "1px solid #e5e7eb",
        px: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 40
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton
          onClick={onMenuClick}
          sx={{
            color: "#4b5563",
            display: { lg: "none" }
          }}
        >
          <Menu />
        </IconButton>

        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 700,
            color: "#1f2937"
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton sx={{ color: "#4b5563" }}>
          <Badge
            badgeContent={3}
            sx={{
              "& .MuiBadge-badge": {
                bgcolor: "#ef4444",
                color: "#fff",
                fontSize: 11,
                width: 20,
                height: 20,
                borderRadius: "50%"
              }
            }}
          >
            <Notifications />
          </Badge>
        </IconButton>

        <IconButton sx={{ color: "#4b5563" }}>
          <Search />
        </IconButton>
      </Box>
    </Box>
  );
}
