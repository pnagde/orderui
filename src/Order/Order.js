import React, { Component } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import style from "./Order.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/CheckCircleOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Lottie from "react-lottie";
import correct from '../assets/correct.json';
import {
  CardContent,
  Divider,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const steps = ["PLACED", "CONFIRMED", "PACKING", "DISPATCHED", "DELIVERED"];
const price = [
  {
    product: "Perfume",
    delivery: 30,
    subtotal: 230,
    total: 260,
  },
];
const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: correct,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
  render() {
    return (
      <div>
        <Container maxWidth="xl">
          <Grid container spacing={0} m={1}>
            <Grid xs={8}>
              <Box
                sx={{
                  width: 1,
                  height: 1,
                  backgroundColor: "#219C90",
                }}
              >
                <Typography
                  variant="h3"
                  textAlign={"center"}
                  p={3}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  Order Detail
                </Typography>
                <Lottie
                  options={defaultOptions}
                  height={150}
                  width={150}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                />
                <Typography
                  variant="body1"
                  textAlign={"center"}
                  p={2}
                  color={"white"}
                >
                  <br></br>
                  Thankyou for ordering
                  <Typography
                    variant="body2"
                    textAlign={"center"}
                    p={0}
                    color={"white"}
                  >
                    we will be sending you an email confirmation to
                    xyz.tekjar@gmil.com soon!
                  </Typography>
                </Typography>

                <Card sx={{ maxWidth: 1, margin: 2 }}>
                  <CardContent>
                    <Typography
                      variant="body2"
                      textAlign={"center"}
                      color={"white"}
                    >
                      Order <b>#20322333</b> was placed on <b>March 13,2023</b>{" "}
                      and is currently in progress
                    </Typography>
                    <Stepper
                      activeStep={0}
                      sx={{ maxWidth: 1 }}
                      alternativeLabel
                    >
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </CardContent>
                </Card>
                <Divider />
                <Typography
                  variant="body1"
                  p={2}
                  color={"white"}
                  textAlign={"center"}
                >
                  Expected Delivery Date - 23 March,2023
                </Typography>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box
                sx={{
                  width: 1,
                  height: 1,
                }}
              >
                <Typography variant="h6" m={1}>
                  <LocalShippingIcon /> DELIVERY ADDRESS
                </Typography>
                <Divider variant="middle" />
                <Typography variant="body2" pl={2} pt={0.5} pb={0.5}>
                  232, High Street,
                  <br></br>
                  Behind main bar,
                  <br></br>
                  US
                </Typography>
                <Divider variant="fullWidth" />
                <Typography variant="h6" m={1}>
                  <ReceiptLongIcon /> BILLING ADDRESS
                </Typography>
                <Divider variant="middle" />
                <Typography variant="body2" pl={2} pt={0.5} pb={0.5}>
                  232, High Street,
                  <br></br>
                  Behind main bar,
                  <br></br>
                  US
                </Typography>
                <Divider variant="fullWidth" />
                <Typography variant="h6" m={1}>
                  <ContactMailIcon /> CONTACT DETAIL
                </Typography>
                <Divider variant="middle" />
                <Typography variant="body2" pl={2} pt={0.5} pb={0.5}>
                  xyz.tejkar@gmail.com
                </Typography>
                <Typography variant="body2" pl={2} pt={0.5} pb={0.5}>
                  +91 88232357
                </Typography>
                <Divider variant="fullWidth" />
                <TableContainer>
                  <Table sx={{ maxWidth: 1 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" colSpan={2}>
                          <Typography variant="h5">
                          Price Details
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {price.map((element) => (
                        <TableRow key={element.product}>
                          <TableCell>Sub Total</TableCell>
                          <TableCell>{element.subtotal} <CurrencyRupeeIcon fontSize="10"/> </TableCell>
                        </TableRow>
                      ))}
                      {price.map((element) => (
                        <TableRow key={element.product}>
                          <TableCell>Delivery</TableCell>
                          <TableCell>+{element.delivery} <CurrencyRupeeIcon  fontSize="10" /> </TableCell>
                        </TableRow>
                      ))}
                      {price.map((element) => (
                        <TableRow key={element.product}>
                          <TableCell>
                            <Typography variant="h5">Total Amount</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="h5">
                              {element.total}
                              <CurrencyRupeeIcon /> 
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Order;
