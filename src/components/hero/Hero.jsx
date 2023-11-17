import "./hero.css";

export function Hero(props) {
  return (
    <div id="hero">
      {props.children}
      <h1>Unlimited movies, TV shows, and more</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <p>
        Ready to watch? Enter your email to create or restart your membership
      </p>
      <div id="tint"></div>
    </div>
  );
}
