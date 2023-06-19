"use client";

import Image from "next/image";
import Link from "next/link";

import { User } from "@/icons";
import { ICreatorResponse } from "@/interfaces/response";

import { SocialItem } from "../SocialItem";

export const Creator = (creator: ICreatorResponse) => {
    return (
        <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
            <div className="flex flex-1 flex-col p-6">
                {creator.avatar ? (
                    <Image
                        unoptimized
                        className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                        src={creator.avatar}
                        alt={creator.name}
                        width={100}
                        height={100}
                        id={creator.id}
                    />
                ) : (
                    <div className="mx-auto h-32 w-32 flex-shrink-0 rounded-full bg-[#111927] flex justify-center items-center">
                        <User width={100} height={100} color="#fff" />
                    </div>
                )}
                <h3 className="mt-6 text-sm font-medium text-gray-900">{creator.name}</h3>
                <dl className="mt-1 flex flex-col">
                    <dt className="sr-only">Career</dt>
                    <dd className="text-sm text-gray-500">{creator.career}</dd>
                    {creator.default_user && creator.default_user.replace("@", "").length > 0 && (
                        <>
                            <dt className="sr-only">Default User</dt>
                            <dd className="mt-3">
                                <span className="rounded-full bg-[#111927] px-2 py-1 text-xs font-medium text-gray-300">
                                    {creator.default_user}
                                </span>
                            </dd>
                        </>
                    )}
                </dl>
                {creator.website && (
                    <Link href={creator.website} target="_blank" className="text-xs mt-3">
                        {creator.website}
                    </Link>
                )}
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center">
                {creator.instagram && <SocialItem social="Instagram" socialUrl={creator.instagram} />}
                {creator.tiktok && <SocialItem social="Tiktok" socialUrl={creator.tiktok} />}
                {creator.twitter && <SocialItem social="Twitter" socialUrl={creator.twitter} />}
                {creator.youtube && <SocialItem social="Youtube" socialUrl={creator.youtube} />}
                {creator.facebook && <SocialItem social="Facebook" socialUrl={creator.facebook} />}
                {creator.twitch && <SocialItem social="Twitch" socialUrl={creator.twitch} />}
                {creator.github && <SocialItem social="Github" socialUrl={creator.github} />}
                {creator.linkedin && <SocialItem social="Linkedin" socialUrl={creator.linkedin} />}
                {creator.discord && <SocialItem social="Discord" socialUrl={creator.discord} />}
            </div>
        </div>
    );
};
