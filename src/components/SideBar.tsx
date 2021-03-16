import { useState } from "react";
import '../styles/sidebar.scss';
import { Button } from './Button';

import { MovieProps } from '../@types/Typings'

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: GenreResponseProps[]
  handleClickButton: (genreId: number) => void
  selectedGenreId: number
}

export function SideBar({ genres, handleClickButton, selectedGenreId }: SideBarProps) {

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}