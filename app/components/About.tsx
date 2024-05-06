"use client"
import Image from "next/image"
import { useState } from "react"

const About = () => {
    const [visible, setVisible] =  useState(false)
  return (
    <div className="flex flex-col items-center" >
        <button onClick={() => setVisible(!visible)} className=" px-4 py-2 rounded-full bg-slate-800 text-slate-150">Sobre mi</button>
        { visible &&
            <div className="flex flex-col items-center space-y-2 p-8">
                <Image className="rounded-full" src={ '/00102.jpg'}  alt="imagen de José Tomás Hervás"  width={100} height={100}/>
                <h1>José Tomás Hervás</h1>
                <p>Desarrollador web full stack</p>
                <a href="https://josetomashervas.com" className="border border-slate-800 px-4 py-1 rounded-full">josetomashervas.com</a>
            </div>
        }
    </div>
  )
}
export default About