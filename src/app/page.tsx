import Link from "next/link";

import { Suspense } from "react";

import { Creator } from "@/components/Creator";
import { ICreatorResponse } from "@/interfaces/response";
import { getCreators } from "@/lib/getCreators";

export default async function Home() {
    const creators = await getCreators();

    return (
        <>
            {" "}
            <div className="bg-default h-screen">
                <div className="mx-auto max-w-7xl py-6 px-6">
                    <div className="space-y-12">
                        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
                                Criadores de Conteúdo Tech
                            </h2>
                            <p className="text-xl text-gray-300 text-center">
                                Se você não está na listagem abaixo, <Link href="/create">clique aqui</Link>.
                            </p>
                        </div>
                        <Suspense fallback={<div>Carregando...</div>}>
                            {creators.length > 0 ? (
                                <>
                                    <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-4 lg:gap-8">
                                        {creators.map((creator: ICreatorResponse) => (
                                            <Creator key={creator.id} {...creator} />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <p className="text-xl text-gray-300 text-center w-full bg-gray-800 py-5 rounded-2xl">
                                    Não há nenhum <strong>Teh Creator</strong> cadastrado ainda.
                                </p>
                            )}
                        </Suspense>
                    </div>
                </div>
                <div className="pb-3 flex justify-center items-center w-full">
                    <span className="text-xs text-gray-500 text-center">
                        Desenvolvido com ❤ pelo{" "}
                        <Link href="https://instagram.com/brunofhorn" target="_blank">
                            @brunofhorn
                        </Link>
                    </span>
                </div>
            </div>
        </>
    );
}
