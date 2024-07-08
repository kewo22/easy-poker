"use client";

import Image from "next/image";
import { title } from "process";
import { useState } from "react";

enum PlayerTitle {
  D = 'Delar',
  SM = 'Small Blind',
  BB = 'Big Bline'
}

interface Game {
  delar: Player | null,
  sm: Player | null,
  bb: Player | null,
}

interface Player {
  id: number,
  name: string,
  pot: number,
}

export default function Home() {

  const [player, setPlayer] = useState<Player[]>([
    {
      id: 0,
      name: 'Kewin',
      pot: 1000
    },
    {
      id: 1,
      name: 'Dani',
      pot: 1000
    },
    {
      id: 2,
      name: 'Naresh',
      pot: 1000
    },
    {
      id: 3,
      name: 'Max',
      pot: 1000
    },
    {
      id: 4,
      name: 'Ham',
      pot: 1000
    },
    {
      id: 5,
      name: 'Thanu',
      pot: 1000
    }
  ]);

  const [game, setGame] = useState<Game>({
    delar: null,
    sm: null,
    bb: null,
  });


  // SHOULD RUN AUTOMATICALLY
  const onStartGameClick = () => {
    setGame({
      delar: player[0],
      sm: player[1],
      bb: player[2],
    })
  }

  return (
    <main className="">
      <button onClick={onStartGameClick}>Start</button>
      {player.map(p => {
        return <>
          <div>
            {p.name} - {p.pot} 
            <button className="bg-green-900 px-3 py-1 rounded">Call/Bet/Raise</button>
            <button className="bg-green-900 px-3 py-1 rounded">Check</button>
            <button className="bg-green-900 px-3 py-1 rounded">Fold</button>
          </div>
        </>
      })}
    </main>
  );
}
