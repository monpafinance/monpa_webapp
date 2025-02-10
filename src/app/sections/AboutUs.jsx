import { Box, Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <Box sx={{ backgroundColor: "#f6f9ff", py: 5 }}>
      <Box className="w-[90%] mx-auto">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "40% 60%" },
            gap: { xs: 0, md: 8 },
            mt: { xs: "30px", md: "70px" },
            mx: "auto",
            width: "90%",
          }}
        >
          {/* Heading */}

          <Typography
            variant="h4"
            sx={{
              color: "#313131",
              fontSize: { xs: "20px", md: "44px" },
              lineHeight: { xs: "32px", md: "48px" },
              fontWeight: 400,
              padding: { xs: 0, md: "0 50px" },
            }}
          >
            Say Goodbye to Payment Risks
          </Typography>

          <Box>
            <Typography
              sx={{
                color: "#2960F7",
                fontSize: { xs: "16px", md: "22px" },
                lineHeight: "32px",
                fontWeight: 600,
                marginBottom: { xs: "12px", md: "0px" },
              }}
            >
              Monpa Keeps Your Money Safe
            </Typography>
            <Typography
              sx={{
                color: "#313131",
                fontSize: { xs: "14px", md: "22px" },
                lineHeight: "32px",
              }}
            >
              We are the link you've been searching for, ensuring your online
              payments are secure every step of the way.
            </Typography>
          </Box>
        </Box>

        {/* Second Container - Cards */}
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1 md:mt-10">
          {/* Card 1 */}
          <Box className=" p-6 ">
            <Box
              component="img"
              src={"/image_fx_ (10) 1.png"}
              alt="Stress-Free Buying"
              className="w-full h-auto rounded-lg"
            />
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "36px",
                fontWeight: 700,
                color: "#313131",
                pt: 2,
              }}
            >
              Stress-Free Buying
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#6E6E6E",
              }}
            >
              Secure your payments with confidence, knowing your funds are
              protected until the transaction is complete.
            </Typography>
          </Box>

          {/* Card 2 */}
          <Box className=" p-6 ">
            <Box
              component="img"
              src="/image 26.png"
              alt="Transactions You Can Trust"
              className="w-full h-auto rounded-lg"
            />
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "36px",
                fontWeight: 700,
                color: "#313131",
                pt: 2,
              }}
            >
              Transactions You Can Trust
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#6E6E6E",
              }}
            >
              Build credibility and trust with your customers through Monpa’s
              transparent processes.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
