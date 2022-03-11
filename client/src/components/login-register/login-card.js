import React from "react";
import TextField from '@mui/material/TextField';
import { CardHeader } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function LoginCard() {

    const navigate = useNavigate();
    
    return(
        <div>
        <Box>    
            <Card sx={{ mx:'auto', my:3,maxWidth: 1000 , display: 'flex' , bgcolor: 'grey'}} >
                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <CardHeader
                    titleTypographyProps={{fontSize: 36,}}
                    title="เข้าสู่ระบบ"
                    />
                    <CardContent sx={{ width:650 }}>


                    <Typography 
                        variant="body1" 
                        sx={{ fontSize:16 }}>
                        อีเมล
                    </Typography>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="อีเมล" variant="outlined" />
                    </Box>


                    <Typography 
                        variant="body1" 
                        sx={{ fontSize:16 }}>
                        รหัสผ่าน
                    </Typography>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField
                        id="outlined-password-input"
                        label="รหัสผ่าน"
                        type="password"
                        autoComplete="current-password"
                    />
                    </Box>

                    
                    <br />
                    <Stack spacing={2} direction="row">
                        <Button variant="contained">เข้าสู่ระบบ</Button>
                        <Button variant="outLine">ลืมรหัสผ่าน</Button>
                        <Button variant="outLine" onClick={() => {navigate("/register");}}>สร้างบัญชี</Button>
                    </Stack>
                    </CardContent>
                </Box>
            </Card>
        </Box>
      </div>

  );
}

export default LoginCard;