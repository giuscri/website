import * as React from "react";
import { Introduction } from "../introduction/Introduction";
import { Contacts } from "../contacts/Contacts";

import './main.css';

export interface ContainerProps { title: string }

export const Container = (props: ContainerProps) =>
    <div id="container">
        <h1>{props.title}</h1>
        <Introduction />
        <Contacts />
    </div>
