"use client";

import Image from "next/image";
import { title } from "process";
import { useState } from "react";

export default function Home() {

  const [player, setPlayer] = useState([
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
      name: 'Thanu',
      pot: 1000
    }
  ]);

  const [game, setGame] = useState({
    delar: player[0],
    sm: player[1],
    bb: player[2],
  });

  const title = (player: any) => {
    if (game.bb.id === player.id) return 'BB'
    if (game.sm.id === player.id) return 'SM'
    if (game.delar.id === player.id) return 'Delar'
  }

  return (
    <main className="">
      {player.map(p => {
        return <>
          <div>
            {title(p) || 'Player'} - {p.name} - {p.pot}
          </div>
        </>
      })}
    </main>
  );
}
