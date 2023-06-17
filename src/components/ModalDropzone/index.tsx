import { Dialog, Transition } from "@headlessui/react";

import { Fragment, useState } from "react";
import Dropzone from "react-dropzone";

import Close from "@/icons/Close";
import Save from "@/icons/Save";

import { Button } from "../Button";

type IModalDropzone = {
    open: boolean;
    setOpen: (open: boolean) => void;
    onConfirm: (image: any) => void;
    onResetAvatar: () => void;
};

type IModalDropzoneImage = {
    name: string;
    size: number;
    type: string;
    preview: string;
};

export const ModalDropzone = ({ open, setOpen, onConfirm, onResetAvatar }: IModalDropzone) => {
    const [image, setImage] = useState<IModalDropzoneImage>({ name: "", size: 0, type: "", preview: "" });
    const [disable, setDisable] = useState(true);

    const handleClose = () => {
        setOpen(false);
        setImage({ name: "", preview: "", type: "", size: 0 });
        onResetAvatar();
    };

    const handleDeleteImage = () => {
        setDisable(true);
        setImage({ name: "", preview: "", type: "", size: 0 });
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                            Selecione a sua imagem
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <Dropzone
                                                maxFiles={1}
                                                multiple={false}
                                                onDrop={acceptedFiles => {
                                                    setImage({
                                                        name: acceptedFiles[0].name,
                                                        size: acceptedFiles[0].size,
                                                        type: acceptedFiles[0].type,
                                                        preview: URL.createObjectURL(acceptedFiles[0]),
                                                    });
                                                    setDisable(false);
                                                }}
                                            >
                                                {({ getRootProps, getInputProps }) => (
                                                    <section
                                                        style={{
                                                            height: "167px",
                                                            border: "1px dashed #969AA3",
                                                            padding: "24px 32px 24px 32px",
                                                            borderRadius: "8px",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            textAlign: "center",
                                                            flexDirection: "column",
                                                        }}
                                                    >
                                                        {image?.preview.length > 0 ? (
                                                            <>
                                                                <div style={{ justifyContent: "center" }}>
                                                                    <div
                                                                        style={{
                                                                            marginLeft: 90,
                                                                            position: "relative",
                                                                            cursor: "pointer",
                                                                            backgroundColor: "#F00",
                                                                            borderRadius: 60,
                                                                            padding: 10,
                                                                            display: "flex",
                                                                        }}
                                                                        onClick={handleDeleteImage}
                                                                    >
                                                                        <Close width={10} height={10} />
                                                                    </div>
                                                                    <img
                                                                        src={image?.preview}
                                                                        width={120}
                                                                        height={120}
                                                                        style={{ borderRadius: 60, marginTop: -35 }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    style={{ justifyContent: "flex-start" }}
                                                                    onClick={() =>
                                                                        setImage({
                                                                            name: "",
                                                                            preview: "",
                                                                            type: "",
                                                                            size: 0,
                                                                        })
                                                                    }
                                                                >
                                                                    <p style={{ margin: 0 }}>{image?.name}</p>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <div
                                                                {...getRootProps()}
                                                                className="flex flex-col items-center justify-center"
                                                            >
                                                                <input {...getInputProps()} />
                                                                <Save width={40} height={40} />
                                                                <p className="m-0 text-base mt-1">
                                                                    <strong>Arraste e Solte</strong> aqui ou
                                                                    <br />
                                                                    carregue do seu <strong>Computador</strong>
                                                                </p>
                                                                <p className="m-0 text-base">
                                                                    Altura e largura miníma:
                                                                </p>
                                                                <p className="m-0 text-base">
                                                                    500 x 500 px - .jpg ou .png
                                                                </p>
                                                            </div>
                                                        )}
                                                    </section>
                                                )}
                                            </Dropzone>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 flex flex-row gap-3 justify-between">
                                    <Button
                                        text="Cancelar"
                                        variant="outline"
                                        type="button"
                                        color="danger"
                                        handleClick={handleClose}
                                    />
                                    <Button
                                        text={disable ? "Selecione Acima" : "Concluir"}
                                        variant="normal"
                                        type="button"
                                        color={disable ? "default" : "primary"}
                                        handleClick={() => (disable ? null : onConfirm(image))}
                                    />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};
