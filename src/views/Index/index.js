import React from 'react';
import './index.css';
import Api from './../../services/api';

export default function Index(){

    async function shorten(){
        //const res = await Api.post();
    }

    return(
        <div className='container'>
            <section className='urlSection'>
                <input type='text' name='url' className='url'/>
            </section>
        </div>
    );
}