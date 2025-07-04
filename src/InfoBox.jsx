import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css"


export default function InfoBox({info}) {
  const INIT_URL =
    "https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={INIT_URL} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component="span"
          >
            <p> Temp : {info.temp} &deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>Min Temp : {info.tempMin}</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels
              like {info.feelslike} &deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
