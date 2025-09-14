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
    <Box sx={{ m: { xs: 2, md: 4 } }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
          mb: 3
        }}
      >
        FREQUENTLY ASKED QUESTIONS (FAQS)
      </Typography>
      <Box sx={{
        m: { xs: 2, md: 5 },
        pl: { xs: 2, md: 20 },
        pr: { xs: 2, md: 20 }
      }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ p: { xs: 1, md: 1 }, pl: { xs: 2, md: 3 }, pr: { xs: 2, md: 3 } }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" }
              }}
            >
              How can I book your private chauffeur service?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{
                textAlign: "left",
                m: 1,
                fontSize: { xs: "0.9rem", md: "1rem" }
              }}
            >
              • Booking is simple: contact us on WhatsApp or send your travel plans by email to arrange your private chauffeur service.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "left",
                m: 1,
                fontSize: { xs: "0.9rem", md: "1rem" }
              }}
            >
              • Confirm your reservation with a 10% deposit, conveniently settled through a secure online payment link.
            </Typography>
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
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• All major debit and credit cards are accepted.</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• You can pre-pay easily through a secure payment link, delivered to you via email, SMS, or WhatsApp.</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• Payment can also be completed upon drop-off or once the journey is finished, according to your preference.</Typography>
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
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• As part of your airport transfer, our team will warmly welcome you with a Meet & Greet in the arrivals area.</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• At the exit point, your driver will greet you with either an ‘Iceland Grand Tours’ sign or your name shown on a tablet/phone.</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• Enjoy the ease of our door-to-door pick-up and drop-off service.</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• We offer a complimentary 45-minute waiting period, beginning once all checked luggage has arrived on the baggage carousel.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ p: 1, pl: 3, pr: 3 }}
          >
            <Typography variant="h6">What services does Iceland Grand Tours offer?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>For your comfort and convenience, Iceland Grand Tours offers the following premium services :</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• Expert Private Chauffeurs</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• Licensed Tour Guides</Typography>
            <Typography variant="body1" sx={{ textAlign: "left", m: 1 }}>• Well-maintained luxury and standard vehicles for your comfort.</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
export default FAQComponent;