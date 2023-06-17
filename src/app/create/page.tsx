"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";

import { ModalDropzone } from "@/components/ModalDropzone";
import {
    Arrow,
    At,
    Camera,
    Code,
    Discord,
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Tiktok,
    Twitch,
    Twitter,
    User,
    Website,
    Youtube,
} from "@/icons";
import { convertToBase64 } from "@/utils/convertToBase64";

const CreateScheme = z.object({
    name: z.string({ required_error: "O nome é obrigatório." }).nonempty(),
    default_user: z.string().optional(),
    career: z.string().optional(),
    instagram: z.string().optional(),
    tiktok: z.string().optional(),
    twitter: z.string().optional(),
    youtube: z.string().optional(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    facebook: z.string().optional(),
    twitch: z.string().optional(),
    discord: z.string().optional(),
    website: z.string().optional(),
});

export type CreateForm = z.infer<typeof CreateScheme>;

export default function Create() {
    const [avatar, setAvatar] = useState({ preview: "", base64: "" });
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        reset,
    } = useForm<CreateForm>({
        defaultValues: {
            name: "",
            default_user: "",
            career: "",
            instagram: "",
            tiktok: "",
            twitter: "",
            youtube: "",
            github: "",
            linkedin: "",
            facebook: "",
            twitch: "",
            website: "",
        },
        resolver: zodResolver(CreateScheme),
    });

    const onSubmit = (data: CreateForm) => {
        setIsLoading(true);

        const options = {
            method: "POST",
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...data, avatar: avatar.base64 }),
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/create`, options)
            .then(res => res.json())
            .then((response: any) => {
                if (response?.error) {
                    toast.error(response?.error);
                    setIsLoading(false);
                } else {
                    toast.success("O Tech Creator foi cadastrado com sucesso.");
                    clearErrors();
                    reset();
                    setAvatar({ base64: "", preview: "" });
                    setIsLoading(false);
                }
            })
            .catch(err => {
                toast.error(err);
                setIsLoading(false);
            });
    };

    const onAvatarConfirm = (image: any) => {
        if (!image?.selected) {
            convertToBase64(image)
                .then(base64String => {
                    setAvatar({ ...image, base64: base64String });
                })
                .catch(error => {
                    console.log("Error: ", error);
                    toast.error("Ocorreu um erro ao tentar enviar a imagem.");
                });
        } else {
            setAvatar(image);
        }

        setModal(false);
    };

    const handleClickUploadAvatar = () => {
        setModal(true);
    };

    const onResetAvatar = () => {
        setAvatar({ preview: "", base64: "" });
    };

    return (
        <>
            <Toaster />
            <ModalDropzone
                open={modal}
                setOpen={setModal}
                key={"modal-dropzone"}
                onConfirm={onAvatarConfirm}
                onResetAvatar={onResetAvatar}
            />
            <div className="bg-default flex min-h-screen flex-col justify-center sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-lg">
                    <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
                        <Link href="/" className="absolute flex flex-row gap-2">
                            <Arrow width={15} height={15} />
                            <span className="text-xs font-semibold">Voltar</span>
                        </Link>
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex justify-center items-center">
                                <button
                                    type="button"
                                    onClick={handleClickUploadAvatar}
                                    id="avatar"
                                    className="w-14 h-14 rounded-lg py-1 px-2 bg-slate-300 cursor-pointer flex items-center justify-center"
                                >
                                    <div className="bg-slate-500 rounded-full flex flex-col items-center justify-center">
                                        {avatar.preview.length > 0 ? (
                                            <Image
                                                src={avatar.preview}
                                                width={80}
                                                height={80}
                                                alt="Avatar"
                                                className="rounded-full"
                                            />
                                        ) : (
                                            <div className="p-2">
                                                <Camera width={30} height={30} color="#fff" />
                                            </div>
                                        )}
                                    </div>
                                </button>
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <User width={20} height={20} color="#ddd" />
                                    </div>
                                    <input
                                        type="text"
                                        {...register("name")}
                                        name="name"
                                        id="name"
                                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Nome"
                                    />
                                    {errors.name && <small>{errors?.name?.message}</small>}
                                </div>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <At width={20} height={20} color="#ddd" />
                                    </div>
                                    <input
                                        type="text"
                                        {...register("default_user")}
                                        name="default_user"
                                        id="default_user"
                                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Apelido (ou @ principal)"
                                    />
                                </div>
                            </div>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Code width={20} height={20} color="#ddd" />
                                </div>
                                <input
                                    type="text"
                                    {...register("career")}
                                    name="career"
                                    id="career"
                                    className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Carreira (Ex: Fullstack Javascript / Backend Developer)"
                                />
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Instagram width={20} height={20} color="#ddd" />
                                    </div>
                                    <input
                                        type="text"
                                        {...register("instagram")}
                                        name="instagram"
                                        id="instagram"
                                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="@usuario do Instagram"
                                    />
                                </div>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Tiktok width={20} height={20} color="#ddd" />
                                    </div>
                                    <input
                                        type="text"
                                        {...register("tiktok")}
                                        name="tiktok"
                                        id="tiktok"
                                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="@usuario do Tiktok"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Twitter width={20} height={20} color="#ddd" />
                                    </div>
                                    <input
                                        type="text"
                                        {...register("twitter")}
                                        name="twitter"
                                        id="twitter"
                                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="@usuario do Twitter"
                                    />
                                </div>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Youtube width={20} height={20} color="#ddd" />
                                    </div>
                                    <input
                                        type="text"
                                        {...register("youtube")}
                                        name="youtube"
                                        id="youtube"
                                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="@usuario do Youtube"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Facebook width={20} height={20} color="#ddd" />
                                    </div>
                                    <input
                                        type="text"
                                        {...register("facebook")}
                                        name="facebook"
                                        id="facebook"
                                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="@usuario do Facebook"
                                    />
                                </div>

                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Linkedin width={20} height={20} color="#ddd" />
                                    </div>
                                    <input
                                        type="text"
                                        {...register("linkedin")}
                                        name="linkedin"
                                        id="linkedin"
                                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="@usuario do Linkedin"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row gap-2">
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Discord width={20} height={20} color="#ddd" />
                                    </div>
                                    <input
                                        type="text"
                                        {...register("discord")}
                                        name="discord"
                                        id="discord"
                                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="#usuario do discord"
                                    />
                                </div>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Github width={20} height={20} color="#ddd" />
                                    </div>
                                    <input
                                        type="text"
                                        {...register("github")}
                                        name="github"
                                        id="github"
                                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="@usuario do Github"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Twitch width={20} height={20} color="#ddd" />
                                    </div>
                                    <input
                                        type="text"
                                        {...register("twitch")}
                                        name="twitch"
                                        id="twitch"
                                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="@usuario do Twitch"
                                    />
                                </div>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Website width={20} height={20} color="#ddd" />
                                    </div>
                                    <input
                                        type="text"
                                        {...register("website")}
                                        name="website"
                                        id="website"
                                        className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="seusite.com.br"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type={isLoading ? "button" : "submit"}
                                    className={`flex w-full justify-center rounded-md border border-transparent ${
                                        isLoading ? "bg-gray-500 hover:bg-gray-700" : "bg-primary hover:bg-indigo-700"
                                    } py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2`}
                                >
                                    {isLoading ? "Carregando..." : "Cadastrar Tech Creator"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
