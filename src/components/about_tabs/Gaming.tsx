import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

const Gaming = () => {
  return (
    <div className={`p-3 h-full`}>
      <Scrollbars autoHide autoHideTimeout={2000} autoHideDuration={1000}>
        I started gaming a few years ago narrowing down the games I love to play
        to just Apex Legends and League of Legends. Feel free to add me on EA,
        my handle is Bludreiner.
        <br />
        I helped a friend out with a private project designing a small zombie
        game using Unity and got a glimpse of what truly goes on behind the
        scenes in games and am truly astonished at how these games are made,
        maintained and balanced over time. I would love to gain some more
        experience with games if possible as I'm intrigued and I'm sure I'll
        find it very interesting and engaging.
        <br />
        <br />
        <a
          className={`font-bold hover:text-black`}
          target={`_blank`}
          href={`https://www.ea.com/games/apex-legends`}
        >
          Apex Legends
        </a>
        <hr />
        <br />
        Apex legends is a battle royale-hero shooter game developed by Respawn
        Entertainment which had me glued to the screen for the whole day when I
        started off. My favorite heroes to play include Bloodhound, Mirage and
        Fuse which I've managed to gather a couple hundred kills on each of.
        Apex legends is especially difficult because there are so many factors
        that affect battles and no matter how subtle they almost always matter,
        the best Apex players pay attention to these details and use them to
        absolutely dominate games.
        <br />
        <br />
        <a
          className={`font-bold hover:text-black`}
          target={`_blank`}
          href={`https://www.leagueoflegends.com/en-us/`}
        >
          League of Legends (LOL)
        </a>
        <hr />
        <br />
        League of Legends is a multiplayer online battle arena (MOBA) game has a
        variety of legends and it's fandom is a whole society of its own that
        tries to bring out a personality and feel for every legend. LOL is a
        team oriented game where when even just a single member of the 5 man
        team is not in sync the whole game could fall into disarray, although
        I've seen a lot of ridiculous comebacks in LOL for the most part when
        both teams are balanced it's usually near impossible to come back. My
        mains are Illaoi and Morgana and I only started League a couple months
        ago so I'm definetely no good with them welp.
      </Scrollbars>
    </div>
  )
}

export default Gaming
