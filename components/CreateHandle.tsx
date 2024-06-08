"use client";

import React, { useState } from "react";
import Card from "@/components/Card";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "sonner";
import axios from "axios";

export default function CreateHandle() {
  const [handle, setHandle] = useState("");

  const checkhandle = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/checkhandle",
        {
          userhandle: handle,
        }
      );

      console.log(response.data);
      toast(JSON.stringify(response.data.message));

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex p-10 h-[100vh]">
      <div className="w-[50%] p-10 flex flex-col justify-center">
        <Link href="/" className="mb-10">
          <Logo />
        </Link>
        <div className="w-[450px]">
          <div className="mb-10">
            <p className="text-3xl font-bold my-2">Claim your handle!</p>
            <p className="text-slate-600 text-lg">
              The good ones are still available 😉
            </p>
          </div>
          <div className="">
            <div className="flex">
              <Input
                className="rounded-lg mr-2 h-14 text-lg bg-slate-200"
                placeholder="meril.ink/"
                type="text"
                onChange={(e) => {
                  setHandle(e.target.value);
                }}
              ></Input>
              <Button
                onClick={checkhandle}
                className="w-20 h-14 text-white hover:bg-blue-700 transition-all duration-300"
              >
                check
              </Button>
            </div>
          </div>

          <Link href="/signup">
            <p className="text-slate-600 mt-3">or Login</p>
          </Link>
        </div>
      </div>
      <div className="w-[50%] justify-center items-center flex p-10 ">
        <div className="">
          <Card
            className=" h-74 w-52 ml-24 -rotate-6 bg-red-200  border-slate-200 border-[1px] rounded-xl p-3"
            imgUrl="https://imgs.search.brave.com/tjVOIzREE3KGD4zc-p2E1LFIPqq4ExC8i0piom9epBA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYwL2Qx/LzYxLzYwZDE2MTMx/YjdmNTI2YWMwYmY0/ZDFjZDE4OTg5MmFj/LmpwZw"
            imgBg="bg-white"
            title="Pinterest"
            btnText="Follow"
            btnColor="bg-red-600"
            date="Fri 7 Jun"
            handle="@JohnEdits"
            bottomImg="https://i.pinimg.com/564x/15/ab/ed/15abed9de351feb04bd81a48031593fe.jpg"
            bottomImgW={200}
            bottomImgH={50}
          />
          <Card
            imgUrl="https://imgs.search.brave.com/0WgEuQBRctTMyQC3wTDDrG3UzaEmC3u4Z862Ym2ZLXU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzkxL09jdGljb25z/LW1hcmstZ2l0aHVi/LnN2Zw.svg"
            className="h-40 flex w-80 rotate-12 bg-slate-300  border-slate-200 border-[1px] rounded-xl p-3"
            imgBg="bg-white"
            title="GitHub"
            btnText="Follow"
            btnColor="bg-black"
            date=""
            handle="@kartikver15gr8"
          />
        </div>
        <div>
          <Card
            className=" h-40 ml-4 w-40 rotate-6 bg-slate-200  border-slate-200 border-[1px] rounded-xl p-3"
            imgUrl="https://imgs.search.brave.com/i6ZZ0a2Oh27m7u0oUcIGvv9esf5xvqKboNrp8ofk1PQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpzSGh0WWhh/Q2UyVWMzSVUwSWdL/d0lRLnBuZw"
            imgBg="bg-white"
            title=" Medium"
            btnText="Follow"
            btnColor="bg-black"
            date=""
            handle="@Techbixx"
            bottomImg=""
          />
          <Card
            className="h-40 -ml-6 mt-10 w-80 -rotate-6 bg-green-200  border-slate-200 border-[1px] rounded-xl p-3"
            imgUrl="https://imgs.search.brave.com/nK8QIJwqTpOiYIRcE2Q2kCu1MkKRZd20_3cFLzmxPVk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE5L1Nwb3RpZnlf/bG9nb193aXRob3V0/X3RleHQuc3Zn.svg"
            imgBg="bg-white"
            title="Spotify"
            btnText="Play"
            btnColor="bg-green-600"
            date=""
            handle="@kartikeyverma"
            bottomImg=""
          />
          <Card
            className="h-40 w-40 rotate-3 bg-blue-200  border-slate-200 border-[1px] rounded-xl p-3"
            imgUrl="https://imgs.search.brave.com/0UqyB-Y6jbXUrXOLcePiSpF5jDlmb84vcwMLWyd_nbs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MC8wNC9GYWNlYm9v/a19mX2xvZ29fJTI4/MjAyMSUyOS5zdmcv/NjQwcHgtRmFjZWJv/b2tfZl9sb2dvXyUy/ODIwMjElMjkuc3Zn/LnBuZw"
            imgBg="bg-white"
            title="Facebook"
            btnText="Connect"
            btnColor="bg-blue-600"
            date=""
            handle="@kartikeyverma"
            bottomImg=""
          />
        </div>
      </div>
    </div>
  );
}