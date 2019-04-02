import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";
import {IButtonOptions} from "./interfaces";
import { buttons as buttonList, icons, buttonIcons }  from "./buttons";

// COLORS
storiesOf('Buttons/Simple', module)
    .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
    .add("Button", () => {
        return buttonList.map((option: IButtonOptions) => {
            return <Button key={option.label} options={option} clicked={action('onClick')} />;
        });
    })
    // .add("Button Float", () => 
    //     (
    //         <>
    //             <Button options={buttonList[8]} clicked={action('onClick')} />
    //             <Button options={buttonList[9]} clicked={action('onClick')} />
    //         </>
    //     ))
   
// ICONS
storiesOf('Buttons/Icon', module)
    .add("Icon Buttons", () => {
        return (
            <>
                <Button options={buttonList[0]} icon={icons[0]} clicked={action('onClick')} />
                <Button options={buttonList[0]} icon={icons[1]} clicked={action('onClick')} />
                <Button options={buttonIcons[0]} icon={icons[1]} clicked={action('onClick')} />
                <Button options={buttonIcons[1]} icon={icons[2]} clicked={action('onClick')} />
            </>
        )
    });    