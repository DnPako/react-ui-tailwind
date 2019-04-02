import * as React from "react";
import * as Interface from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	IconLookup,
	IconDefinition,
	findIconDefinition
} from "@fortawesome/fontawesome-svg-core";

export default class Button extends React.PureComponent<Interface.IButtonProps> {
	// GET ICON DEFINITION IF EXISTS
	getIcon = () => {
		const { icon } = this.props;
		if (icon == null) {
			return;
		}
		
		const { options } = this.props;
		const iconLookup: IconLookup = {
			prefix: "fas",
			iconName: icon.iconName
		};
		const iconDefinition: IconDefinition = findIconDefinition(iconLookup);
		
		let classes: string = 'mr-2';
		if (icon.position === "right") {
			classes = "float-right ml-2";
		}

		if (options.label === "") {
			classes = "";
		}

		return <FontAwesomeIcon className={classes} icon={iconDefinition} border={icon.border} />;
	};

	render() {
        const icon = this.getIcon();
        const {options} = this.props;

		const classes: string[] = [
			`bg-${options.color}`,
			`hover:bg-${options.hoverColor}`,
			`text-${options.textColor}`,
			`float-${options.position}`,
			options.shape,
			"px-5 py-4",
			"m-2",
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
