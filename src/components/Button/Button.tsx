import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Colors } from "../../themes";
import {
	IconLookup,
	IconDefinition,
	findIconDefinition,
	IconName
} from "@fortawesome/fontawesome-svg-core";

// Icon Options
export interface IconProps {
	iconName: IconName;
	border: boolean;
	spin: boolean;
}

// Button Options
export interface IButtonOptions {
	label: string;
    color: Colors;
    textColor: Colors;
    hoverColor: Colors;
}

// Button Props
export interface IButtonProps {
	clicked?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	options: IButtonOptions;
	icon?: IconProps;
}

export default class Button extends React.PureComponent<IButtonProps> {
	getIcon = () => {
		const { icon } = this.props;
		if (icon == null) {
			return;
		}

		const iconLookup: IconLookup = {
			prefix: "fas",
			iconName: icon.iconName
		};
		const iconDefinition: IconDefinition = findIconDefinition(iconLookup);

		return <FontAwesomeIcon icon={iconDefinition} border={icon.border} />;
	};

	render() {
        const icon = this.getIcon();
        const {options} = this.props;

		const classes: string[] = [
			`bg-${options.color}`,
			`hover:bg-${options.hoverColor}`,
			`text-${options.textColor}`,
			"p-4",
			"m-2",
			"rounded",
			"font-sans"
        ];
        
		return (
			<button className={classes.join(" ")} onClick={this.props.clicked}>
				{icon}
				{options.label}
			</button>
		);
	}
}
