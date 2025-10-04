"use client";

import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex flex-col justify-center items-center gap-5 p-5">
        <Image
          src={"/images/illustrations/recruitment.jpg"}
          alt="job-search-banner-img"
          width={500}
          height={500}
        />
        <div className="space-y-2">
          <h2 className="font-bold text-3xl">LamaranKu</h2>
          <p className="text-lg text-muted-foreground">
            Stay organized and monitor your job application progress easily
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center bg-accent p-5 py-10">
        {children}
      </div>
    </div>
  );
}
