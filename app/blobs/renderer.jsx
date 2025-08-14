'use client';

import { randomInt } from '../../utils';

export function ShapeRenderer({ svgPath, colors }) {
	const [color1, color2] = colors || [];
	const stroke = `hsl(${randomInt(0, 359)}, 100%, 40%)`;
	return (
		<div className="relative rounded-none bg-gradient-to-br from-white to-neutral-200">
			<svg viewBox="0 0 512 512" className="w-full h-full">
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor={color1} />
						<stop offset="100%" stopColor={color2} />
					</linearGradient>
				</defs>
				<path d={svgPath} fill="url(#gradient)" stroke={stroke} strokeWidth={2} />
			</svg>
		</div>
	);
}
