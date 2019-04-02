/* 
    Temporary file to initiate buttons
*/
import { IButtonOptions, IconProps } from "./interfaces";

export const buttons: IButtonOptions[] = [
    {
        label: 'Main',
        color: 'main',
        textColor: 'white',
        hoverColor: 'main-hover',
        shape: 'rounded'
    },
    {
        label: 'Primary',
        color: 'primary',
        textColor: 'white',
        hoverColor: 'primary-hover',
        shape: 'rounded'
    },
    {
        label: 'Secondary',
        color: 'secondary',
        textColor: 'white',
        hoverColor: 'secondary-hover',
        shape: 'rounded'
    },
    {
        label: 'Default',
        color: 'default',
        textColor: 'primary',
        hoverColor: 'default-hover',
        shape: 'rounded'
    },
    {
        label: 'Danger',
        color: 'danger',
        textColor: 'white',
        hoverColor: 'danger-hover',
        shape: 'rounded'
    },
    {
        label: 'Warning',
        color: 'warning',
        textColor: 'primary',
        hoverColor: 'warning-hover',
        shape: 'rounded'
    },
    {
        label: 'Success',
        color: 'success',
        textColor: 'white',
        hoverColor: 'success-hover',
        shape: 'rounded'
    },
    {
        label: 'Info',
        color: 'info',
        textColor: 'white',
        hoverColor: 'info-hover',
        shape: 'rounded'
    },
    {
        label: 'Left',
        color: 'secondary',
        textColor: 'white',
        hoverColor: 'secondary-hover',
        shape: 'rounded',
        position: 'left'
    },
    {
        label: 'Right',
        color: 'secondary',
        textColor: 'white',
        hoverColor: 'secondary-hover',
        shape: 'rounded',
        position: 'right'
    }
];

export const buttonIcons: IButtonOptions[] = [
    {
        label: '',
        color: 'main',
        textColor: 'white',
        hoverColor: 'main-hover',
        shape: 'rounded'
    },
    {
        label: '',
        color: 'default',
        textColor: 'grey-darker',
        hoverColor: 'default-hover',
        shape: 'rounded-full'
    },
];

export const icons: IconProps[] = [
    {
        iconName: "spinner",
        border: false,
        spin: false,
    },
    {
        iconName: "spinner",
        border: false,
        spin: false,
        position: "right"
    },
    {
        iconName: "bell",
        border: false,
        spin: true,
    }
];