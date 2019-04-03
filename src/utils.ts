/**
* Function that return a shade of a color, lighter or darker
* @method shadeHexColor
* @param {string} color e.g #03A9F4
* @param {Percent} percent
* @return {string} return the shade result
*/
type Percent = 0.1 | 0.2 | 0.3 | 0.5 | 0.6 | 0.7 | -0.1 | -0.2 | -0.3 | -0.4 | -0.5 | -0.6 | -0.7;
export const shadeHexColor = (color: string, percent: Percent) => {
    const f = parseInt(color.slice(1),16);
    const t = percent<0?0:255;
    const p = percent<0?percent*-1:percent;
    const R = f>>16;
    const G = f>>8&0x00FF;
    const B = f&0x0000FF;

    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}