
'use client';

import { cn } from "@/lib/utils";

import { Copy } from "lucide-react"
import React from 'react'
import { Button } from "./ui/button";

interface ICopyToClipboard {
	children: React.ReactElement
}

export const CopyToClipboard = ({ children }: ICopyToClipboard) => {
	const textInput = React.useRef<HTMLDivElement>(null)
	const [hovered, setHovered] = React.useState(false)
	const [copied, setCopied] = React.useState(false)

	const onEnter = () => {
		setHovered(true)
	}

	const onExit = () => {
		setHovered(false)
		setCopied(false)
	}

	const onCopy = () => {
		setCopied(true)
		if (textInput.current !== null && textInput.current.textContent !== null)
			navigator.clipboard.writeText(textInput.current.textContent)
		setTimeout(() => {
			setCopied(false)
		}, 2000)
	}

	return (
		<div
			ref={textInput}
			onMouseEnter={onEnter}
			onMouseLeave={onExit}
			className="relative code-block"
		>
			{hovered && (
				<Button onClick={onCopy} variant="outline" size="icon" className="absolute right-2 top-2 w-8 h-8 p-1 rounded border-2 bg-gray-700 dark:bg-gray-800">
					<Copy className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-white"/>
				</Button>
			)}
			{children}
		</div>
	)
}