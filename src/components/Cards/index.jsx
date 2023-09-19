import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


var data = {
  state: 'Tokyo',
  first_name: 'vinoth',
  last_name: 'krishna',
  picture: 'https://api.slingacademy.com/public/sample-users/1.png',
  street: 'dubai 5th cross',
  gender: 'Anime',
  country: 'Japan',
  job: 'procastinator',
  phone: '89081234790',
  zip_code: "708923",
};

const CardDescripition = ({mockupData})=> {
  return(
  <React.Fragment>
    <CardContent>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src={mockupData.profile_picture} />
      </Stack>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {mockupData.job}
      </Typography>
      <Typography variant="h7" component="div">
        {mockupData.first_name + ' ' + mockupData.last_name}
      </Typography>
      <Typography sx={{ m: `0 1.5` }} variant="h9">
        Gender: {mockupData.gender}
      </Typography>
      <Typography variant="body2">
        contact: {mockupData.phone}
        <br />
        Address: {mockupData.zip_code +" ZIP"}
        <details>
          <ul>
            <li>{ mockupData.street+ ", "+mockupData.state }</li>
            <li>{mockupData.country}</li>
          </ul>
        </details>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Know More</Button>
    </CardActions>
  </React.Fragment>
);
  }

export default function Cards({item}){
  // console.log("from card",item);
  const [mockupData, setMockupData] = React.useState(data);
  React.useEffect(()=>{
    setMockupData({...item});
  }, [item]);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardDescripition mockupData={mockupData} />
      </Card>
    </Box>
  );
}
