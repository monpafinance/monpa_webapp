import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Typography } from "@mui/material";

export default function Benefits() {
  return (
    <Box sx={{ backgroundColor: "#eef3ff", py: 10, px: { xs: 2, md: 8 } }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", maxWidth: "900px", mx: "auto", mb: 5 }}>
        <Typography
          sx={{
            fontWeight: 400,
            color: "#090909",
            lineHeight: { xs: "28px", md: "62.4px" },
            fontSize: { md: "48px", xs: "20px" },
          }}
        >
          Enjoy{" "}
          <Typography
            component="span"
            sx={{ fontWeight: 600, fontSize: { md: "48px", xs: "20px" } }}
          >
            payment protection
          </Typography>{" "}
          and{" "}
          <Typography
            component="span"
            sx={{
              fontWeight: 600,
              fontSize: { md: "48px", xs: "20px" },
              textAlign: "center",
            }}
          >
            customer satisfaction
          </Typography>
          , all on Monpa
        </Typography>
        <Typography
          sx={{
            color: "#6E6E6E",
            mt: { xs: 0.5, md: 2 },
            fontSize: { xs: "12px", md: "24px" },
          }}
        >
          Enjoy payment protection and customer satisfaction, all on Monpa
        </Typography>
      </Box>

      {/* Benefits Container */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" },
          gap: { xs: 2, md: 8 },
          mt: 4,
          alignItems: "center",
        }}
      >
        <Box>
          <img src="/Rectangle 105.png" alt="For Vendors" width="100%" />
        </Box>

        {/* Vendors Section */}
        <Box>
          <Typography
            sx={{
              backgroundColor: "#FFE4E3",
              px: { xs: "10.78px", md: "16px" },
              py: { xs: "6.74px", md: "10px" },
              width: { xs: "115px", md: "130px" },
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: 600,
              borderRadius: "5px",
              mb: 2,
            }}
          >
            For Vendors
          </Typography>

          <Typography
            fontWeight={600}
            variant="h4"
            sx={{
              fontSize: {
                md: "39.86px",
                xs: "24px",
              },
              color: "#000000",
            }}
          >
            Sell seamlessly on{" "}
            <Typography
              component="span"
              sx={{
                color: "#E22067",
                fontSize: { md: "39.86px", xs: "24px" },
                fontWeight: 600,
              }}
            >
              Instagram
            </Typography>
            ,{" "}
            <Typography
              component="span"
              sx={{
                color: "#36B73F",
                fontSize: { md: "39.86px", xs: "24px" },
                fontWeight: 600,
              }}
            >
              WhatsApp
            </Typography>
            ,{" "}
            <Typography
              component="span"
              sx={{
                color: "#B9A50C",
                fontSize: { md: "39.86px", xs: "24px" },
                fontWeight: 600,
              }}
            >
              Snapchat
            </Typography>{" "}
            and Twitter?
          </Typography>

          <Typography
            sx={{
              color: "#313131",
              mb: 3,
              fontSize: { xs: "12px", md: "16px" },
            }}
          >
            Monpa ensures secure, upfront payments, so you focus on growing your
            business.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {[
              "Receive orders worry-free",
              "Deliver your product or service",
              "Get paid promptly once the buyer confirms",
            ].map((text, index) => (
              <Typography
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#313131",
                  fontSize: { xs: "12px", md: "16px" },
                }}
              >
                <CheckCircleIcon
                  sx={{ color: "#35C012", fontSize: "18px", mr: 1 }}
                />
                {text}
              </Typography>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              px: { xs: "26.96px", md: "40px" },
              py: { xs: "10.78px", md: "16px" },
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "700",
              background: "#2960F7",
            }}
          >
            Get Started Now
          </Button>
        </Box>

        {/* Buyers Section */}
        <Box sx={{ order: { xs: 4, md: 3 } }}>
          <Typography
            sx={{
              backgroundColor: "#E89829",
              px: { xs: "10.78px", md: "16px" },
              py: { xs: "6.74px", md: "10px" },
              width: { xs: "115px", md: "130px" },
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: 600,
              borderRadius: "5px",
              mb: 2,
            }}
          >
            For Buyers
          </Typography>

          <Typography
            variant="h4"
            fontWeight={600}
            sx={{
              mb: 2,
              fontSize: {
                md: "39.86px",
                xs: "24px",
              },
              color: "#000000",
            }}
          >
            Get more control, buy and pay online without fear or worries
          </Typography>

          <Typography
            sx={{
              color: "#313131",
              mb: 3,
              fontSize: { xs: "12px", md: "16px" },
            }}
          >
            Shop with confidence, Monpa safeguards your payment until you’re
            completely satisfied.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {[
              "Place your order confidently",
              "Your payment stays secure until you’re satisfied",
              "Confirm delivery, and we'll release the payment",
            ].map((text, index) => (
              <Typography
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#313131",
                  fontSize: { xs: "12px", md: "16px" },
                }}
              >
                <CheckCircleIcon
                  sx={{ color: "#35C012", fontSize: "18px", mr: 1 }}
                />
                {text}
              </Typography>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              px: { xs: "26.96px", md: "40px" },
              py: { xs: "10.78px", md: "16px" },
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "700",
              background: "#2960F7",
            }}
          >
            Get Started Now
          </Button>
        </Box>

        <Box sx={{ order: { xs: 3, md: 4 } }}>
          <img
            src="/pexels-shkrabaanthony-6207763 1.png"
            alt="For Buyers"
            width="100%"
          />
        </Box>
      </Box>
    </Box>
  );
}
