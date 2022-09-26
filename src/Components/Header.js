import React from "react";
import * as S from "./style"
import RC from "../recipes imagens/RC.png"

export default function App() {
  return(
<S.DivHeader>
    <div>
    <figure>
<img src={RC} alt="Logo"/>
    </figure>
    <nav>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </nav>
    </div>
    <S.Hone>Recipes</S.Hone>
    


</S.DivHeader>
  )
}