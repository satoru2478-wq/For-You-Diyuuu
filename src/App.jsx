import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Plsss? 🥹"
  ];

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy!!! 💖
          </div>
        </>
      ) : (
        <>
          <img src={lovesvg} className="fixed animate-pulse top-10 left-6 md:left-24 w-28 md:w-40" />
          <img src={lovesvg2} className="fixed bottom-16 right-10 md:right-24 w-32 md:w-40 animate-pulse -z-10" />

          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />

          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine?
          </h1>

          <div className="flex gap-3">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button
              onClick={() => setNoCount(noCount + 1)}
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              {phrases[Math.min(noCount, phrases.length - 1)]}
            </button>
          </div>
        </>
      )}

      <footer className="fixed bottom-2 right-2 opacity-80 text-sm">
        Made with ❤️ by Vedant
      </footer>
    </div>
  );
}
