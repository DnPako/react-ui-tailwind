import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { buttons as buttonList }  from "./buttons";

import Button, {IconProps, IButtonOptions} from "./Button";

const icon: IconProps = {
    iconName: "spinner",
    border: false,
    spin: false,
};

// COLORS
storiesOf('Buttons/Simple', module)
    .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
    .add("Button Colors", () => {
        return buttonList.map((option: IButtonOptions) => {
            
            return <Button key={option.label} options={option} clicked={action('onClick')} />;
        });
    })
   
// ICONS
storiesOf('Buttons/Icon', module)
    .add("With Icon", () => <Button options={buttonList[0]} icon={icon} clicked={action('onClick')} />);    