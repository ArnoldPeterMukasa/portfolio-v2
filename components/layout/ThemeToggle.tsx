"use client";
import{Moon, Sun} from "lucide-react";
import{useTheme} from "next-themes";
import {useEffect, useState} from "react";
export default function ThemeToggle(){
    const [mounted, setMounted]=useState(false);
    const{theme, setTheme}=useTheme();
    useEffect(()=>{
        setMounted(true);
    }, []);
    if (!mounted){
        return null;
    }
    return(
        <button
        onClick={()=>
            setTheme(theme==="dark"?"light":"dark")
        }
        className="rounded-lg border p-2"
        >
            {theme==="dark"?(
                <Sun size={18}/>
            ):(
                <Moon size={18}/>
            )}
        </button>
    );
}