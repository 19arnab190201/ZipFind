import { useEffect } from "react";
const MapComponent = ({ latitude, longitude }) => {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    const zoom = 12;
    ifameData.src = `https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed&iwloc=near`;
  });
  return (
    <div>
      <iframe
        loading='lazy'
        style={{
          zIndex: "1",
          border: "none",
          marginTop: "13px",
          objectFit: "cover",
          overflowY: "hidden",
          borderRadius: "10px",
        }}
        allowFullScreen=''
        referrerPolicy='no-referrer-when-downgrade'
        id='iframeId'
        height={window.innerHeight - window.innerHeight * 0.15}
        width={window.innerWidth - window.innerWidth * 0.26}></iframe>
    </div>
  );
};

export default MapComponent;
