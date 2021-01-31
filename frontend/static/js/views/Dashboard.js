import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back, Dom</h1>
            <p>
                Fugiat voluptate es nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do manga ea pariatur et.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>
        `;
    }
}