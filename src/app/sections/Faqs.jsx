"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Faqs() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: "What is Monpa Africa?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How does Monpa protect my payments?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How does Monpa ensure customer satisfaction?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Which platforms can I use Monpa on?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Can I trust Monpa with my business?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Is there a fee to use Monpa?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What should I do if I have a problem with a transaction?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f6f9ff", padding: { xs: 3, md: 6 } }}>
      {/* Header Section */}
      <Box sx={{ maxWidth: "840px", margin: "auto", textAlign: "center" }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: { xs: "14px", md: "16px" },
            color: "#2960F7",
          }}
        >
          FAQ
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "16px", md: "24px" },
            marginY: "8px",
            color: "black",
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          sx={{ fontWeight: 400, fontSize: "16px", color: "#6E6E6E" }}
        >
          Here are answers to some questions you might have for us
        </Typography>
      </Box>

      {/* Accordion List */}
      <Box sx={{ maxWidth: "840px", margin: "auto", marginTop: 3 }}>
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            sx={{ background: "#E1ECFF", marginBottom: 1, border: "none" }}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              <Typography
                component="span"
                sx={{ fontSize: { xs: "12px", md: "20px" } }}
              >{`${index + 1}. ${faq.question}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
