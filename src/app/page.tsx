"use client"
import style from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={style.topo}>
      <h1 className={style.textTopo} >Conheça a família MacBook</h1>
      <h3 className={style.textH3}>Agora com novos modelos M3</h3>
      <div className="grid grid-cols-2 gap-8 p-5">
        <div className="">
          <Image
            src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png"
            alt="Macbook Air"
            width={250}
            height={200}
            style={{objectFit:"cover"}}
            className="mx-auto"
          />
          <h2 
            className="
              text-2xl mx-auto w-40 mt-5
              "
            >
              Macbook Air de 13 e 15 pol.<br/>
              <span
               className="
                font-bold text-xs ml-6
                "
              >
                chip M2 ou m3
              </span>
          </h2>
          <h4 className=" max-w-xs mx-auto text-center mt-5 mb-5">
            superfino e rapidos para trabalhar, jogar ou criar aonde quer que você vá.
          </h4>
          <h4 className="text-zinc-950 font-bold">
            A pardtir de R$ 916,58/mês ou R$ 10.999*
          </h4>
          <div className="flex justify-center gap-5 mt-5">
            <button 
              className="text-zinc-100 bg-cyan-700 px-5 py-3 rounded-2xl "
            >
              Saiba Mais
            </button>
            <button 
              className="text-cyan-700 border border-cyan-700 px-5 py-3 rounded-2xl "
            >
              Comprar
            </button>
          </div>
        </div>

        <div className="">
          <Image
            src="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png"
            alt="Macbook Air"
            width={250}
            height={200}
            style={{objectFit:"cover"}}
            className="mx-auto"
          />
          <h2 
            className="
              text-2xl mx-auto w-44 mt-5
              "
            >
              MacBook Pro de 14 e 16 pol.<br/>
              <span
               className="
                font-bold text-xs 
                "
              >
                chip M3, M3 Pro ou M3 Max
              </span>
          </h2>
          <h4 className=" max-w-xs mx-auto text-center mt-5 mb-5">
            superfino e rapidos para trabalhar, jogar ou criar aonde quer que você vá.
          </h4>
          <h4 className="text-zinc-950 font-bold">
            A pardtir de R$ 916,58/mês ou R$ 10.999*
          </h4>
          <div className="flex justify-center gap-5 mt-5">
            <button 
              className="text-zinc-100 bg-cyan-700 px-5 py-3 rounded-2xl "
            >
              Saiba Mais
            </button>
            <button 
              className="text-cyan-700 border border-cyan-700 px-5 py-3 rounded-2xl "
            >
              Comprar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
