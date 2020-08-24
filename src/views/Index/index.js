import React, { useState } from 'react';
import './index.css';
import Api from './../../services/api';
import {FiCopy} from 'react-icons/fi'

export default function Index(){

    const [url, setUrl] = useState("");
    const [hash, setHash] = useState("");

    async function shorten(e){
        e.preventDefault();
        const res = await Api.post("", {
            "url": url
        });
        setHash("https://rel.ink/"+res.data.hashid);
    }

    function copy(){
        const textClip = document.getElementById('shortened');
        textClip.select();
        document.execCommand("copy");
    }

    return(
        <div className='container'>
            <section className='urlSection'>
                <form onSubmit={shorten}>
                    <input value={url} onInput={e => {setUrl(e.target.value)}} type='text' name='url' className='url'/>
                </form>
            </section>
            <section className='shortenedSection'>
                {
                    hash ? <div className='clipboard'><FiCopy className='copyIcon'/><input className='shortened' id='shortened' value={hash} onClick={copy}/></div> : ""
                }
                
            </section>
        </div>
    );
}