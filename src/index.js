import { Header, Hero, Members } from "./modules/index.js";

const template = `
<div>
    ${Header}
    ${Hero}
    ${Members}
</div>
`;

document.getElementById("main").innerHTML = template;
