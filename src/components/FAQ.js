import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQComponent() {
  return (
    <Box sx={{ m: 4 }}>
      <Typography variant="h4">FREQUENTLY ASKED QUESTIONS (FAQS)</Typography>
      <Box sx={{ m: 5, pl: 20, pr: 20 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ p: 1, pl: 3, pr: 3 }}
          >
            <Typography variant="h6">How can I book your private chauffeur service?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• You can book our private chauffeur service by reaching out to us via WhatsApp or by submitting your planned itinerary through email.</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• To confirm your reservation and secure your preferred date, a 10% deposit is required, which can be conveniently paid through a secure payment link.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ p: 1, pl: 3, pr: 3 }}
          >
            <Typography variant="h6">What payment methods do you accept?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• We accept all major debit and credit cards.</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• You may choose to pre-pay via a secure payment link, which will be sent to you by email, sms or forwarded email from WhatsApp.</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• Alternatively, payment can also be made upon drop-off or after the trip, based on your preference.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ p: 1, pl: 3, pr: 3 }}
          >
            <Typography variant="h6">How does the airport transfer service work?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• Our airport transfer service includes a Meet & Greet at the arrivals area.</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• Your driver will be waiting by the exit point, holding a “Ride Iceland” sign or displaying your name on a tablet or phone.</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• We provide door-to-door pick-up and drop-off for your convenience.</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• A complimentary 45-minute waiting period is included from the time all checked luggage has arrived on the baggage carousel.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ p: 1, pl: 3, pr: 3 }}
          >
            <Typography variant="h6">What services does Ride Iceland offer?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>Ride Iceland provides the following premium services for your comfort and convenience :</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• Professional Private Chauffeur</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• Licensed private tour guides</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• Hygienically maintained luxury and standard vehicles.</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
export default FAQComponent;