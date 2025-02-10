"use client";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";

const pages = ["Use Case", "How it works", "FAQs", "Support"];

function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#121724",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          padding: { xs: "12px 2%", md: " 15px 3" },
          width: "90%",
        }}
      >
        <Toolbar disableGutters className="justify-content-center">
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Image src={Logo} width={146.14} height={28} alt="Monpa Logo" />
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Image src={Logo} width={104.39} height={20} alt="Monpa Logo" />{" "}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },

              maxWidth: "40%",
              margin: "auto",
              justifyContent: "space-around",
            }}
          >
            {pages.map((page) => (
              <li
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
                className="list-none font-[300] text-[16px]/[24px]"
              >
                <Link href="#">{page}</Link>
              </li>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              gap: "20px",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: "#ffffff",
                color: "#ffffff",
                padding: { xs: "8px 12px", md: "12px 24px" },
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: "600",
                fontFamily: "Inter",
                height: { xs: "39px", md: "46px" },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                },
                background: "#ffffff",
                color: "#0A0A0A",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Inter",
                height: "46px",
              }}
              // className="font-[600] text-base/[24px] p-[12px_24px] text-[#0A0A0A]"
            >
              Create free account
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
