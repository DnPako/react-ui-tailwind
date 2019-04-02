import { Colors } from "../../themes";
import { IconName } from "@fortawesome/fontawesome-svg-core";

// Icon Options
export interface IconProps {
	iconName: IconName;
	border: boolean;
	spin: boolean;
	position?: 'left' | 'right';
}

// Button Options
export interface IButtonOptions {
    label: string;
    color: Colors;
    textColor: Colors;
	hoverColor: Colors;
	shape: 'rounded' | 'rounded-full';
    position?: 'left' | 'right';
}

// Button Props
export interface IButtonProps {
	clicked?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	options: IButtonOptions;
	icon?: IconProps;
}