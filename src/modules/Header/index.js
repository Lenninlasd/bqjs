export const Header = `
    <style>
        .baq-container {
            padding-left: 20px;
            padding-right: 20px;
            background: #f2d901;
            box-shadow: 3px 3px 15px rgba(0,0,0,.15);
        }
        .navbarBaqJS {
            width: 100%;
            display: flex;
            justify-content: space-between;
            max-width: 1152px;
            margin: 0 auto;
        }
        .navbarBaqJS .title {
            font-size: 1.5rem;
            color: black;
        }
        .icon-redes{
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .icon-redes a {
            color: #222;
            padding: 7px 8px;
            margin-left: 12px;
            font-size: 24px;
        }
        .navbarBaqJS .navbar-left-text {
            display: flex;
            align-items: center;
        }
        .navbarBaqJS .navbar-left-text img {
            max-height: 4rem;
        }
    </style>
    <div class="baq-container">
        <header class="navbarBaqJS">

            <div class="navbar-left-text">
                <img src="./src/img/BAQJS-02.png" alt="BarranquillaJS logo">
                <h1 class="title">
                    BarranquillaJS
                </h1>
            </div>

            <div class="icon-redes">
                <a target="_blank" href="https://www.instagram.com/barranquillajs/"><i class="fab fa-instagram"></i></a>
                <a target="_blank" href="https://twitter.com/baq_js"><i class="fab fa-twitter"></i></a>
                <a target="_blank" href="https://github.com/barranquillajs"><i class="fab fa-github"></i></a>
            </div>

        </header>
    </div>`;
