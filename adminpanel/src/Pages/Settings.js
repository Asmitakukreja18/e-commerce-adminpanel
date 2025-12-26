import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Stack
} from "@mui/material";

import {
  Notifications,
  Download,
  Settings as SettingsIcon,
  Logout,
  ChevronRight
} from "@mui/icons-material";

export default function Settings() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
   
      <Box mb={4}>
        <Typography fontSize={26} fontWeight={700}>
          Settings
        </Typography>
        <Typography color="text.secondary">
          Manage your business profile and preferences
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}width={800}>
          <Stack spacing={4}>
            <Paper sx={card}>
              <Typography sx={cardTitle}>Business Profile</Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Label>Business Name</Label>
                  <Input defaultValue="Smart Grocery Market" />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Label>Contact Email</Label>
                  <Input defaultValue="admin@smartgrocery.com" />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Label>Phone Number</Label>
                  <Input defaultValue="+91 98765 43210" />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Label>WhatsApp Number</Label>
                  <Input defaultValue="+91 98765 43210" />
                </Grid>

                <Grid item xs={12}>
                  <Label>Business Address</Label>
                  <Input
                    multiline
                    rows={3}
                    defaultValue="123 MG Road, Andheri West, Mumbai, Maharashtra - 400053"
                  />
                </Grid>
              </Grid>

              <Button sx={primaryBtn}>Save Changes</Button>
            </Paper>

            <Paper sx={card}>
              <Typography sx={cardTitle}>Admin Profile</Typography>

              <Stack spacing={3}>
                <Box>
                  <Label>Full Name</Label>
                  <Input defaultValue="Admin User" />
                </Box>

                <Box>
                  <Label>Email Address</Label>
                  <Input defaultValue="admin@smartgrocery.com" />
                </Box>

                <Box>
                  <Label>Current Password</Label>
                  <Input type="password" />
                </Box>

                <Box>
                  <Label>New Password</Label>
                  <Input type="password" />
                </Box>
              </Stack>

              <Button sx={primaryBtn}>Update Profile</Button>
            </Paper>
          </Stack>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Stack spacing={4}>
            <Paper sx={card}>
              <Typography sx={cardTitle}>Quick Actions</Typography>

              <Stack spacing={2}>
                <ActionRow
                  icon={<Notifications />}
                  label="Notifications"
                  color="#2563EB"
                  bg="#DBEAFE"
                />
                <ActionRow
                  icon={<Download />}
                  label="Backup Data"
                  color="#7C3AED"
                  bg="#EDE9FE"
                />
                <ActionRow
                  icon={<SettingsIcon />}
                  label="System Settings"
                  color="#16A34A"
                  bg="#DCFCE7"
                />
              <ActionRow
      icon={<Logout />}
      label="Logout"
      danger
      to="/login"
    />
              </Stack>
            </Paper>

            <Box sx={helpCard}>
              <Typography fontSize={18} fontWeight={700}>
                Need Help?
              </Typography>
              <Typography fontSize={14} sx={{ opacity: 0.9 }} mb={2}>
                Contact our support team for assistance
              </Typography>

              <Button sx={helpBtn}>Contact Support</Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}


const card = {
  p: 3,
  borderRadius: 3,
  border: "1px solid #E5E7EB",
  boxShadow: "0 1px 4px rgba(0,0,0,0.05)"
};

const cardTitle = {
  fontSize: 18,
  fontWeight: 700,
  mb: 3
};

const primaryBtn = {
  mt: 3,
  bgcolor: "#16A34A",
  color: "#fff",
  px: 4,
  py: 1.4,
  borderRadius: 3,
  fontWeight: 600,
  textTransform: "none",
  "&:hover": { bgcolor: "#15803D" }
};

const helpCard = {
  p: 3,
  borderRadius: 3,
  color: "#fff",
  background: "linear-gradient(135deg,#22C55E,#16A34A)",
  boxShadow: "0 12px 25px rgba(0,0,0,0.15)"
};

const helpBtn = {
  bgcolor: "#fff",
  color: "#16A34A",
  fontWeight: 600,
  borderRadius: 2,
  px: 3,
  textTransform: "none",
  "&:hover": { bgcolor: "#F3F4F6" }
};

const Input = props => (
  <TextField
    fullWidth
    {...props}
    size="small"
    sx={{
      "& .MuiOutlinedInput-root": {
        borderRadius: 2.5,
        "&.Mui-focused fieldset": {
          borderColor: "#22C55E",
          borderWidth: 2
        }
      }
    }}
  />
);

const Label = ({ children }) => (
  <Typography fontSize={13} fontWeight={600} mb={1} color="#374151">
    {children}
  </Typography>
);

const ActionRow = ({ icon, label, color, bg, danger }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      p: 2,
      borderRadius: 2.5,
      bgcolor: danger ? "#FEF2F2" : "#F9FAFB",
      cursor: "pointer",
      "&:hover": {
        bgcolor: danger ? "#FEE2E2" : "#F3F4F6"
      }
    }}
  >
    <Box display="flex" alignItems="center" gap={2}>
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: 2,
          bgcolor: danger ? "#FEE2E2" : bg,
          color: danger ? "#DC2626" : color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {icon}
      </Box>
      <Typography fontWeight={600} color={danger ? "#DC2626" : "#111827"}>
        {label}
      </Typography>
    </Box>

    <ChevronRight sx={{ color: "#9CA3AF" }} />
  </Box>
);
