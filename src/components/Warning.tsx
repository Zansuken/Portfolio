import { FC, useState } from "react";
import '../sass/Warning.scss';


const Warning: FC = () => {

  const [show, setShow] = useState(true);

  if (show) return <div className="warning">
    <div className="warning_text">
      <p>This website is deprecated. My active website can be found <a href="https://sebastien-doom.netlify.app">here</a>.</p>
      <p>You can still navigate through here but I've learned a lot since I released this portfolio :).</p>
    </div>
    <button onClick={() => setShow(false)}>Explore my past</button>
  </div>

  return <></>
};

export default Warning;