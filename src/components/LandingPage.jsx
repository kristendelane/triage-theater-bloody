import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="locked-wrapper">
      <div className="image-stage">
        {/* HITBOX on top of everything */}
        <div
          className="hitbox"
          style={{
            top: "650px",
            left: "750px",
            width: "180px",
            height: "60px",
            backgroundColor: "rgba(255, 0, 0, 0.4)",
            border: "2px solid red",
            zIndex: 9999
          }}
          title="Spin the Wheel"
          onClick={() => navigate("/story-selector")}
        />
        <img
          src="/assets/skeleton_landing_art.png"
          alt="Skeleton"
          className="locked-image"
        />
      </div>
    </div>
  );
}
