import React from 'react'
import {Link } from "react-router-dom";
import {AiFillInfoCircle,AiFillSetting} from "react-icons/ai";
import { BiToggleLeft,BiRefresh} from "react-icons/bi";

export default function Home() {
  return (
    <div><ul className='nav-links'>
    <li>
        <Link to="/"><BiRefresh size={40}/></Link>
            </li>
            <li> <Link to ="/about"><AiFillInfoCircle size={40}/></Link></li>
            <li> <Link to ="/setting"><AiFillSetting size={40}/></Link></li>
            <li> <Link to ="/toggle"><BiToggleLeft size={40}/></Link></li>
            </ul>
            </div>
  )
}
