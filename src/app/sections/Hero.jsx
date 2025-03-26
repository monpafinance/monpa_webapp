"use client";

import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import SplitType from "split-type";

function Hero() {
  const charTextRef = useRef(null);
  const wordTextRef = useRef(null);

  useEffect(() => {
    // Split the character animation text into individual chars
    const charSplit = new SplitType(charTextRef.current, { types: "chars" });

    // Animate characters separately
    gsap.from(charSplit.chars, {
      opacity: 0,
      y: 20, // Move up
      stagger: 0.05, // Delay between each character
      duration: 0.8,
      ease: "power3.out",
    });

    // Split the word animation text into words
    const wordSplit = new SplitType(wordTextRef.current, { types: "words" });

    // Animate words separately
    gsap.from(wordSplit.words, {
      opacity: 0,
      x: -10, // Slide words from left
      stagger: 0.2, // Delay between each word
      duration: 1,
      ease: "power2.out",
      delay: 0.5, // Start after chars animate
    });

    // Cleanup on unmount
    return () => {
      charSplit.revert();
      wordSplit.revert();
    };
  }, []);

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
              ref={charTextRef}
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
              ref={wordTextRef}
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
            <motion.img
              src="/heropic.png"
              alt="Hero Image"
              style={{
                width: "100%",
                maxWidth: "475px",
                height: "auto",
                objectFit: "contain",
              }}
              initial={{ opacity: 0, x: 50 }} // Start hidden and move from the right
              animate={{ opacity: 1, x: 0 }} // Fade in and slide in
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05, rotate: 2 }} // Slight rotation and scale on hover
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
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
