"use client";

import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HowItWork() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures animation runs only once
    });
  }, []);

  const steps = [
    {
      img: "/Layer_1.png",
      title: "Initiate the Transaction",
      desc: "You create a payment request or send a payment link to your customer.",
    },
    {
      img: "/Group.png",
      title: "Payment Protection",
      desc: "The buyer makes a payment to Monpa, which is held safely in escrow.",
    },
    {
      img: "/Asset 14.png",
      title: "Confirmation",
      desc: "Buyer confirms receipt of agreed product; and payment is released to seller.",
    },
    {
      img: "/Asset 15.png",
      title: "Security First",
      desc: "Monpa uses secure payment methods to protect your personal and payment information.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f6f9ff", py: { xs: 2, md: 12 }, px: 6 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", maxWidth: 728, mx: "auto" }}>
        <Typography
          variant="h4"
          sx={{
            color: "black",
            fontWeight: 600,
            lineHeight: { xs: "24px", md: "44px" },
            fontSize: { xs: "20px", md: "32px" },
          }}
        >
          How It Works:
          <span style={{ fontWeight: 400, fontStyle: "italic" }}>
            {" "}
            Simple, Safe Transactions
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "13px", md: "18px" },
            color: "#313131",
            mt: 2,
            lineHeight: { xs: "20px", md: "24px" },
          }}
        >
          Monpa holds payments in escrow until both the buyer and seller are
          satisfied. Simple, safe, and transparent.
        </Typography>
      </Box>

      {/* Steps Section */}
      <Box
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="none"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 1, md: 3 },
          margin: { xs: "20px 0", md: "70px 0 " },
        }}
      >
        {steps.map((item, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "start",
              width: { xs: "100%", sm: "48%", md: "22%" },
            }}
          >
            <img
              src={item.img}
              alt=""
              style={{ marginBottom: "16px", width: "48px" }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#313131",
                fontSize: { md: "16px", xs: "12px" },
              }}
            >
              {item.title}
            </Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "#6E6E6E" }}>
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Secure Solutions Section */}
      <Box
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="none"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "40% 60%" },
          height: "341px",
          justifyContent: "start",
        }}
      >
        <Box sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: 297 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "black",
              lineHeight: "44px",
              fontSize: { md: "32px", xs: "24px" },
              textAlign: "start",
            }}
          >
            The{" "}
            <span style={{ color: "#2960F7", fontStyle: "italic" }}>
              secure
            </span>{" "}
            solutions for your business/payments
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "16px" },
              color: "#6E6E6E",
              mt: { xs: 0.5, md: 2 },
            }}
          >
            Monpa is designed for every business of all sizes. It is for
            everyone who wants a reliable, secure way to handle online payments.
          </Typography>
        </Box>

        <img src="/howiteorkOne.png" alt="" style={{ width: "100%" }} />
      </Box>

      {/* Crypto & Freelancer Images */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" },
          gap: 4,
        }}
      >
        {["/crypto.png", "/freelancer.png"].map((img, index) => (
          <img
            data-aos="flip-right"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="none"
            src={img}
            alt=""
            key={index}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
