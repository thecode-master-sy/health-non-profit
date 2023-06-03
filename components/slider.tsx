"use client";

import placeholder from "@/public/images/activities-placeholder.jpg";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const members: {image: StaticImageData; name:string; title: string; description: string;}[]  = [
  {
    name: "Rev. Sister Chika Dibia",
    title: "Chairperson of BOT",
    description: "This is a placeholder description i would input the main description later just for testing purposes This is a placeholder description i would input the main description later just for testing purposes",
    image:placeholder
  },

  {
    name: "Mr. Basil Akunana",
    title: "Estate Manager and project management consultant",
    description: "",
    image:placeholder
  },

  {
    name: "Dr. Phina Okeke",
    title: "medical doctor",
    description: "",
    image:placeholder
  },

  {
    name: "Mr. Dureke Sixtus",
    title: "Businessman and a social enterprenerudical doctor",
    description: "",
    image:placeholder
  },

  {
    name: "Mrs. Jessica Fadoju",
    title: "Chairperson of BOT",
    description: "",
    image:placeholder
  },
 {
    name: "Dr. Item Justin Atangwho",
    title: "Academician",
    description: "",
    image:placeholder
  },

]


const xOffset = 100;

const variants = {
  initial: (direction:number) => {
    return(
      {
        x: direction > 0 ? xOffset :-xOffset,  
        opacity: 0
      }   
    )
  },
  animate: {
    x: 0,
    opacity: 1,
     transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction:number) => {
    return(
      {
        x: direction > 0 ? -xOffset: xOffset,
        opacity: 0,
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      }
    )
  }
}


export const Pagination = ({slides, currentSlide}:{slides:[]; currentSlide:number}) => {
  return (
    <div>
      {
        slides.map((slide, index) => (
          <motion.div className={currentSlide === index ? "selected" : ""} layoutId="selected" key={index
          }>
          </motion.div>
        )) 
      }
    </div> 
  )
}

export const Slider = () => {
    const slides:[]= [];
  
    members.forEach((member, index) => {
      /*@ts-ignore*/
      slides.push(index)
    })

    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);
    const [hasPagenated, setHasPagenated] = useState(false);
    const [isGrabbing, setGrabbing] = useState(false)
    
    
    function setSlide (newSlide:number, newDirection:number) {
        if(!newDirection)  newDirection = newSlide - currentSlide;
  
        setCurrentSlide(newSlide);
        setDirection(newDirection);
    }
  
    function SlideRight() {
      setDirection(1); 
    
      if(currentSlide === slides.length - 1) {
        setCurrentSlide(0)
        return;
      }
    
      setCurrentSlide(currentSlide + 1);
    }
  
    function SlideLeft() {
      setDirection(-1)
    
      if(currentSlide === 0) {
        setCurrentSlide(slides.length - 1)
        return;
      }
      
      setCurrentSlide(currentSlide - 1)
    }
  
    function DragGesture(e:PointerEvent, {offset}:{offset:{x:number, y:number}}) {
        if (hasPagenated) return;

        setGrabbing(true)

        let newSlide = currentSlide;
        
        const threshold = xOffset/2;
        
        if(offset.x < -threshold) {
          if(currentSlide === slides.length - 1) { 
            newSlide = 0;
            setSlide(newSlide, offset.x < 0 ? 1 : -1);
            return;
          } 

          newSlide = currentSlide + 1; 
        }
        
        if(offset.x > threshold) {
          if(currentSlide === 0) {
            newSlide = slides.length - 1;
            setSlide(newSlide, offset.x < 0 ? 1 : -1);
            return;
          }
          
          newSlide = currentSlide - 1;
        }
        
        if(newSlide !== currentSlide) {
          setHasPagenated(true);
          
          setSlide(newSlide, offset.x < 0 ? 1 : -1)
        }
    } 
    


   return (
    <>     
     <div className="w-full max-w-[800px] mx-auto grid grid-flow-col gap-4 overflow-hidden text-center">
        <AnimatePresence key={currentSlide}>
          <motion.div
            key={currentSlide}
            className={`w-screen max-w-[800px] ${isGrabbing ? "cursor-grabbing": ""}`}
            drag="x"
            variants={variants}
            initial="initial"
            animate="animate" 
            exit="exit"
            custom={direction}
            dragConstraints={{left:0, right:0, top: 0, bottom: 0}}
            /*@ts-ignore*/            
            onDrag={DragGesture}
            onDragStart={() => setHasPagenated(false)}          
            onDragEnd={() => setHasPagenated(true)}
           >
            <motion.div className="relative w-[150px] h-[150px] rounded-full overflow-hidden mx-auto">
              <Image src={members[currentSlide].image} layout="fill" objectFit="cover" alt={members[currentSlide].name} draggable="false"/>   
            </motion.div>

            <motion.p className="mt-4 capitalize text-xl font-bold">{members[currentSlide].name}</motion.p>
            <motion.p className="mt-4">{members[currentSlide].title}</motion.p>
            <motion.p className="mt-4 leading-7 tracking-wide">{members[currentSlide].description}</motion.p>
          </motion.div>
        </AnimatePresence>
     </div>
      
      <div className="flex justify-center gap-3 mt-4">
        <button className="bg-primary text-white rounded-full py-1 px-1" onClick={SlideLeft}>
          <FaAngleLeft/>
        </button>
        <button className="bg-primary text-white rounded-full py-1 px-1" onClick={SlideRight}>
            <FaAngleRight/>
        </button>
      </div>
      
      <div>
        <Pagination slides={slides} currentSlide={currentSlide}/>
      </div>
    </>
   ) 
 };
