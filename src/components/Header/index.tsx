import {FC} from "react";
import * as React from 'react'
export interface HeaderProps {
    title: string;
}
export const Header: FC<HeaderProps> = ({title}: HeaderProps) => {
    return <div>{title}</div>
}

export default Header;