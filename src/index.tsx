import * as React from 'react'
import Header, {HeaderProps} from "./components/Header";
import {FC} from "react";

interface EzReactFormProps {
  header: HeaderProps
}

export const EzReactForm: FC<EzReactFormProps> = ({ header }: EzReactFormProps) => {
  return <div>
    <Header title={header.title}/>
  </div>
}
