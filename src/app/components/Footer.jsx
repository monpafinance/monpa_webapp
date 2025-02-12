import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box>
      {/* Top Section */}
      <Box
        sx={{
          backgroundColor: "#2960F7",
          color: "#FFFFFF",
          textAlign: "center",
          py: 6,
        }}
      >
        <Box sx={{ maxWidth: "530px", mx: "auto" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "32px", md: "48px" },
              lineHeight: "52.8px",
            }}
          >
            Ready to get started?
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: "14px", md: "22px" },
              mt: { xs: 1, md: 3 },
              mb: { xs: 2, md: 5 },
            }}
          >
            Join Our Happy Customers - Start with Monpa
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ width: { xs: "120px", md: "150px" }, margin: "auto" }}
          >
            <img src="/pngegg 1.png" alt="Google Play" />
            <img src="pngegg 2.png" alt="App Store" />
          </Stack>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box sx={{ backgroundColor: "#121724", color: "#FFFFFF", py: 6 }}>
        <Box
          sx={{
            maxWidth: "80%",
            mx: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          {/* Logo & Description */}
          <Box sx={{ maxWidth: "474px", mb: { xs: 4, md: 0 } }}>
            <img
              src="/colorlogo.png"
              alt="Monpa Logo"
              style={{ marginBottom: "16px" }}
            />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "24px",
              }}
            >
              Monpa provides payment protection and customer satisfaction 🔒
              Feel safe and secure doing business online.
            </Typography>
          </Box>

          {/* Links & Socials */}
          <Box>
            <Stack spacing={1} sx={{ mb: 3 }}>
              {["Join Community", "Support", "Blog", "About Us"].map(
                (text, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "24.88px",
                    }}
                  >
                    {text}
                  </Typography>
                )
              )}
            </Stack>

            <Typography
              sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "24.88px" }}
            >
              Follow us on Social Media:
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <IconButton sx={{ color: "white" }}>
                <XIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        {/* Divider & Copyright */}
        <Box sx={{ textAlign: "center", mt: 4, width: "80%", margin: "auto" }}>
          <Divider sx={{ borderColor: "#FFFFFF80", mb: 4 }} />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: "13px", md: "16px" },
              lineHeight: "24.88px",
            }}
          >
            © All Rights Reserved. 2025, Monpa Finance
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
