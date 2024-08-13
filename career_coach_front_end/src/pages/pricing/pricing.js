import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PricingCard = ({ title, price, features, buttonText, isRecommended }) => {
  return (
    <Card
      sx={{
        width: 350,
        borderRadius: '12px',
        textAlign: 'center',
        padding: '20px',
        boxShadow: isRecommended ? '0px 10px 20px rgba(0, 0, 0, 0.15)' : '0px 4px 10px rgba(0, 0, 0, 0.1)',
        background: isRecommended ? 'linear-gradient(to bottom, #66b2ff, #0059b3)' : '#fff',
        color: isRecommended ? '#fff' : 'inherit',
        borderColor: isRecommended ? 'transparent' : 'grey.300',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: 'bold', marginBottom: '16px' }}
        >
          {title}
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          {price}
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: '20px 0', flexGrow: 1 }}>
          {features.map((feature, index) => (
            <Typography
              variant="body1"
              component="li"
              key={index}
              sx={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'left' }}
            >
              <CheckCircleIcon sx={{ marginRight: '8px', color: isRecommended ? '#fff' : 'primary.main' }} />
              {feature}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <Box sx={{ padding: '20px 0 0' }}>
        <Button
            variant="contained"
            color={isRecommended ? 'secondary' : 'primary'}
            size="large"
            href='./createAccount'
            sx={{
                borderRadius: '24px',
                padding: '12px 30px',
                width: '200px',
                backgroundColor: isRecommended ? '#fff' : 'primary.main',
                color: isRecommended ? '#0059b3' : '#fff',
                '&:hover': {
                backgroundColor: isRecommended ? '#e6e6e6' : 'primary.dark',
                },
                alignSelf: 'center',
            }}
            >
            {buttonText}
        </Button>
      </Box>
    </Card>
  );
};

const Pricing = () => {
  const tiers = [
    {
      title: 'Free',
      price: '$0',
      features: ['1 Message with Career Advisor', 
      '1 Resume Review', 
      '1 Cover Letter Review'],
      buttonText: 'Sign Up',
    },
    {
      title: 'Basic',
      price: '$20/mo',
      features: ['5 Conversations with Career Advisor', 
      '5 Resume Reviews', 
      '5 Cover Letter Reviews'
    ],
      buttonText: 'Get Started',
      isRecommended: true,
    },
    {
      title: 'Ultra',
      price: '$35/mo',
      features: ['Unlimited Conversations w/ Advisor', 
      'Unlimited Resume Reviews', 
      'Unlimited Cover Letter Reviews', 
      'Unlimited Email Replies',
    ],
      buttonText: 'Go Ultra',
    },
  ];

  return (
    <Box sx={{ padding: '60px 20px', backgroundColor: '#f4f4f4' }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', marginBottom: '40px' }}
      >
        Our Pricing Plans
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {tiers.map((tier, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
            <PricingCard
              title={tier.title}
              price={tier.price}
              features={tier.features}
              buttonText={tier.buttonText}
              isRecommended={tier.isRecommended}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
