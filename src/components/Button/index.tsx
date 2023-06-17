import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface IButton extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
    type?: "button" | "submit" | "reset";
    variant?: "normal" | "outline";
    color?: "primary" | "secondary" | "danger" | "default";
    handleClick?: () => void;
    disabled?: boolean;
    link?: boolean;
    linkUrl?: string;
}

const buttonStyles = {
    normal: {
        primary: "bg-primary hover:bg-indigo-800 text-white",
        secondary: "",
        danger: "",
        default: "bg-gray-500 cursor-default hover:bg-gray-600 text-white",
    },
    outline: {
        primary: "",
        secondary: "",
        danger: "bg-red-500 hover:bg-red-900 text-white",
        default: "",
    },
};

export const Button = ({
    text,
    type = "button",
    variant = "normal",
    color = "primary",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleClick = () => {},
    disabled = false,
    link,
    linkUrl,
    className,
}: IButton) => {
    return (
        <>
            {link ? (
                <Link
                    href={linkUrl ?? ""}
                    target="_blank"
                    className={twMerge(
                        className,
                        buttonStyles[variant][color],
                        "py-2 px-6 rounded-lg w-full font-bold disabled:bg-disabled disabled:text-defaultGray",
                    )}
                >
                    {text}
                </Link>
            ) : (
                <button
                    className={twMerge(
                        className,
                        buttonStyles[variant][color],
                        "py-2 px-6 rounded-lg w-full font-bold disabled:bg-disabled disabled:text-defaultGray",
                    )}
                    type={type}
                    onClick={handleClick}
                    disabled={disabled}
                >
                    {text}
                </button>
            )}
        </>
    );
};
