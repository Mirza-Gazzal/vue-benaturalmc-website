export const loadScript = (scripts) => {
    let i;
    let script;
    let len = scripts.length;
    for (i = 0; i < len; i = i + 1) {
        script = document.createElement("script");
        script.setAttribute("src",scripts[i].src);
        script.setAttribute("defer",true);
        //plugin.async = true;
        if (scripts[i].onload)
            script.onload = scripts[i].onload
        document.head.appendChild(script);
        // W_LOGGER(scripts[i])
    }
}

export default loadScript