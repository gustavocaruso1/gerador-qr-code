"use client";

import {QRCodeCanvas} from 'qrcode.react';
import { FaFileUpload } from "react-icons/fa";

export default function Home() {
  return (
   <main className="container">
    <section className="title-container">
    <h1 className="page-title">Crie e personalize o seu próprio <span>QR Code!</span></h1>
    <img src="/down-arrow.png" alt="Down arrow details" className="down-arrow-details" />
    </section>
    <section className="qr-code-container">
      <div className="qr-code">
        <div className="link-input">
          <label htmlFor="link">
            Digite o seu link
          </label>
          <input type="text" id="link" placeholder="Seu link aqui"/>
        </div>
        <div className="qr-code-preview">
          <p>QR Code Preview</p>
          <QRCodeCanvas
            value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
            title={"Title for my QR Code"}
            size={128}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
            imageSettings={{
              src: "https://static.zpao.com/favicon.png",
              x: undefined,
              y: undefined,
              height: 24,
              width: 24,
              opacity: 1,
              excavate: true,
            }}
          />
        </div>
      </div>
      <div className='qr-code-customization'>
        <div className='customization-container'>
            <h3>
              Cores
            </h3>
            <div className='input-container colors'>
              <div className='input-box'>
                <label htmlFor='fgColor'>
                  Cor principal
                </label>
                <input type='color' className='input-color' id='fgColor'/>
              </div>

              <div className='input-box'>
                <label htmlFor='bgColor'>
                  Cor do fundo
                </label>
                <input type='color' className='input-color' id='bgColor'/>
              </div>
            </div>
        </div>
        <div className='customization-container'>
          <h3>
            Logo
          </h3>
          <div className='input-container'>
              <div className='input-box'>
                <label htmlFor='logo'>
                  Insira o seu logo
                </label>
                <input type='file' className='input-file' id='logo' accept='image/*'/>
                <button className='input-file-button'>
                  <FaFileUpload />
                  Escolher arquivo
                </button>
              </div>

              <div className='input-box'>
                <label htmlFor='logoSize'>
                  Tamanho da logo
                </label>
                <select name='logoSize' id='logoSize'>
                  <option value='24'>24px x 24px</option>
                  <option value='38'>48px x 48px</option>
                  <option value='96'>96px x 96px</option>
                </select>
              </div>
            </div>
        </div>
        <button className='download-button'>
          Baixar QR Code
        </button>
      </div>
    </section>
   </main>
  );
}
