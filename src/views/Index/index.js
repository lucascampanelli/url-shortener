import React, { useState } from 'react';
import './index.css';
import Api from './../../services/api';
import {FiCopy, FiLink} from 'react-icons/fi'

export default function Index(){

    const [url, setUrl] = useState("");
    const [hash, setHash] = useState("");
    const [job, setJob] = useState("");

    async function shorten(e){
        e.preventDefault();
        try{
            const res = await Api.post("", {
                "url": url
            });
            setHash("https://rel.ink/"+res.data.hashid);
        }catch(e){
            setJob("Oops! Communication failure with API");
        }
    }

    function copy(){
        const textClip = document.getElementById('shortened');
        textClip.select();
        document.execCommand("copy");
        setJob("URL copied successfully!");
    }

    return(
        <div className='container'>
            <section className='titleSection'>
                <h1 className='titleLabel'>URL Shortener</h1>
                <h3 className='descriptionLabel'>Do more with short and recognizable URLs with one click</h3>
            </section>
            <section className='urlSection'>
                <form onSubmit={shorten}>
                    <input value={url} onInput={e => {setUrl(e.target.value)}} type='text' name='url' className='url' placeholder='Paste your URL here'/><button type='submit' className='btnEnter'><FiLink className='enterIcon'/></button>
                </form>
            </section>
            <section className='shortenedSection'>
                {
                    hash ? <div className='clipboard'><FiCopy className='copyIcon'/><input className='shortened' id='shortened' value={hash} onClick={copy}/></div> : ""
                }
                {
                    <h4 className='jobLabel'>{job}</h4>
                }
            </section>
        </div>
    );
}