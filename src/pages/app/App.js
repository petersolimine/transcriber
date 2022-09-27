import "./styles.scss";
import DragDrop from "../../components/DragDrop";
import Button from "../../components/Button";
import Popup from "../../components/Popup";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="header">Penpal Transcriber</h1>
        <p className="subtitle">FREE AUDIO TRANSCRIPTION SERVICE</p>
        <DragDrop />
        <Button disabled={false} text={"Click to Transcribe"} onClick={() => console.log} />
        <Popup
          className="modal"
          buttonLabel={"Click to Transcribe"}
          modalTitle={"Where would you like to send your transcript?"}
          modalBody={"sdsd"}
          modalFooter={"sd"}
        />
      </div>
    </div>
  );
}

export default App;
