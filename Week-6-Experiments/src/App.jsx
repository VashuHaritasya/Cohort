import "./App.css";

function App() {
  return (
    <div>
      <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>;
      <CardWrapper innerComponent={<TextComponent2/>}></CardWrapper>;
    </div>
  );
}
function CardWrapper({ innerComponent }) {
  return (
    <div style={{ border: "2px soild black", padding: 20 }}>
      {innerComponent}
    </div>
  );
}
function TextComponent() {
  return <div>hi there</div>;
}

export default App;
