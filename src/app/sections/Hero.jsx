import { Box, Button, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

function Hero() {
  const words = [
    "Reliable",
    "Trust",
    "Security",
    "Seamless",
    "Safe Transactions",
    "Payment",
    "Secure",
  ];

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          py: { xs: 5, md: 10 },
          backgroundImage: `url("/background.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            width: "90%",
            margin: "auto",
            alignItems: "center",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left Content */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Box
              sx={{
                fontSize: { xs: "28px", md: "48px" },
                fontWeight: "800",
                lineHeight: { xs: "36.96px", md: "63.36px" },
                color: "#ffffff",
              }}
            >
              Make payments online without fear or worries
            </Box>
            <Box
              sx={{
                fontSize: { xs: "14px", md: "20px" },
                lineHeight: { xs: "19.6px", md: "28px" },
                color: "#ffffff",
                marginTop: { xs: 1, md: 2 },
                marginBottom: 3,
              }}
            >
              Monpa aims to eliminate fraud, make every payment safe and build
              trust between buyers and sellers.
            </Box>
            <Button
              variant="contained"
              sx={{
                padding: "16px 40px",
                fontWeight: "700",
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "24px",
                fontFamily: "Inter",
                color: "#ffffff",
                background: "#2960F7",
                m: { xs: "auto", md: 0 },
              }}
            >
              Get Started Now
            </Button>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              textAlign: "center",
              pt: { xs: 3, md: 0 },
              m: { xs: "auto", md: 0 },
            }}
          >
            <img
              src="/heropic.png"
              alt="Hero Image"
              style={{
                width: "100%",
                maxWidth: "475px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box style={{ background: "#121A2D" }}>
        <Box
          sx={{
            display: "flex",
            maxWidth: "80%",
            margin: "auto",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/starpic.png"
            alt="Star Pic"
            sx={{
              width: { xs: "22.34px", md: "81px" },
              height: { xs: "16px", md: "58px" },
            }}
          />
          <Marquee gradient="True" gradientColor="#121A2D">
            {words.map((text, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "12px", md: "22px" },
                  lineHeight: { xs: "16px", md: "18px" },
                  color: "#ffffff",
                  padding: { xs: "10px 30px", md: "40px 30px" },
                }}
              >
                {text}
              </Typography>
            ))}
          </Marquee>
          <Box
            component="img"
            src="/starpic.png"
            alt="Star Pic"
            sx={{
              width: { xs: "22.34px", md: "81px" },
              height: { xs: "16px", md: "58px" },
            }}
          />{" "}
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
