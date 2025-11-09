class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<div id="bio">
                <p>
                    This website is haunted by the silly little guys in my head that wanna share my silly little things on the web.
                    <br>Tune into my music tastes on a <em>rainy</em> day and look around, you can find a lot about me here.
                </p>
                <p>
                    Please leave your mark on the guest book and don't
                    forget to take a little rest while you're here.. the
                    outer web is scary &lt;3
                </p>
                <p>This blog is completely SFW!!! 👀</p>
            </div>

            <div>
                <iframe
                    id="MediaPlayer"
                    src="webdeck-player/index.html"
                ></iframe>
            </div>

            <div id="small-box">
                <ul>
                    <li>22</li>
                    <li>he/they</li>
                    <li>taken</li>
                    <li>queer</li>
                </ul>
            </div>

            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="https://helliwellc.wordpress.com/">Portfolio</a></li>
                    <li><a href="https://github.com/cnmhqwerty">GitHub</a></li>
                    <li><a href="guestbook.html">Guestbook</a></li>
                </ul>
            </nav>
            <div id="footnote">
                <p>
                    template by
                    <a href="https://nomnomnami.com">NomnomNami</a>!
                </p>
                <p>last updated: 09/11/2025</p>
            </div>`;
  }
}

customElements.define("sidebar-component", Sidebar);
