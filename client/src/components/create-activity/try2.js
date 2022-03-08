import { CardHeader, Dialog, DialogActions, DialogTitle, Stack } from "@mui/material"
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Text, StyleSheet } from 'react-native';


function CreateAdmin() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const styles = StyleSheet.create({
      baseText: {
        fontSize: '18px',
        fontWeight: 'bold',
        color:'#0B46FF'
        
      },
      passText: {
        fontSize: '18px',
        fontWeight: 'bold',
        color:'green'
      },
  
      notpassText: {
        fontSize: '18px',
        fontWeight: 'bold',
        color:'red'
      },
  
      waitText: {
        fontSize: '18px',
        fontWeight: 'bold',
        color:'grey'
      },
    });
  
    return(
        <div>


        <Box sx={{ mx: 'auto', mt: 10 }}>

          {/* การ์ดใบที่3 */}
          <Card sx={{ mx:'auto', my:3,maxWidth: 1000 , display: 'flex' , bgcolor: 'grey'}} >

                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <CardHeader
                      titleTypographyProps={{fontSize: 36,}}
                      title="สำหรับการสร้างActivity"

                    />
                    <CardContent sx={{ width:650 }}>
                      <Typography 
                        variant="body1" 
                        sx={{ fontSize:18 }}>
                        ชื่อกิจกรรม
                        <br />
                        กิจกรรม      : เริ่ม 07/11/2022  | สิ้นสุด 08/11/2022<br />
                        จำนวนผู้เข้าร่วมสูงสุด : 80 คน
                      </Typography>

                      <Text style={styles.baseText}>
                        สถานะ :
                        <Text style={styles.passText}> ผ่านการคัดเลือก</Text>
                      </Text>
  
                    </CardContent>

                    {/* ปุ่มลงทะเบียนและป็อปอัพ */}
                    <CardActions>
                        <Stack spacing={2} direction="row">
                          <Button variant="contained" onClick={handleClickOpen}>
                            ลงทะเบียน
                          </Button>
                          <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            maxWidth= 'md'
                          >
                            <DialogTitle id="alert-dialog-title" gutterBottom variant="h1" sx={{color: '#004AAD'}}>
                              <Typography sx={{ fontSize: '50px'}} >
                                <h1>ลงทะเบียนสำเร็จ!!</h1>
                              </Typography>
                            </DialogTitle>
                            <DialogActions >
                              <Button sx={{ fontSize: '30px'}} onClick={handleClose} >กลับสู่หน้าหลัก </Button>
                            </DialogActions>
                          </Dialog>
                        </Stack>

                      <Typography gutterBottom variant="h8" component="div">
                          จำนวนที่นั่งเหลือ: 2
                      </Typography>
                    </CardActions>

                    <Typography variant="h6" color='error.main' sx={{ fontSize:16 }}>
                      จำนวนที่นั่งเหลือ 0 ท่านยังสามารถลงทะเบียนเป็นที่นั่งสำรองได้
                      <br />
                      หากต้องการสละสิทธิ์ กรุณาติดต่อช่องทางใดช่องทางหนึ่ง
                    </Typography>
                </Box>
          </Card>
        </Box>
      </div>

  );
}

export default CreateAdmin;