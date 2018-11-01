export const Hero = `
<style>
    .hero{
        color: #233034;
        font-size: 32px;
        line-height: 1.36;
        text-align: left;
        display: flex;
        max-width: 1152px;
        margin: 20px auto;
        justify-content: space-between;
    }
    .hero .text-container {
        padding: 16px;
        display: flex;
        align-items: center;
        max-width: 600px;
        
    }
    .hero .text-container .text {
        flex-direction: column;
        justify-content: flex-start;
        font-weight: 300;
    }
    .hero .map img {
        max-height: 500px;
    }
    .baq-button {
        background: #ffd121;
        height: 53px;
        padding: 0 25px;
        line-height: 36px;
        display: inline-block;
        text-decoration: none;
        color: #233034;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
        max-width: 120px;
        justify-content: center;
        text-transform: uppercase;
        transition: all 0.2s ease-in;
        letter-spacing: 1px;
    }

    .baq-button:hover {
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        transition: all 0.2s ease-in;
    }

</style>
<div class="hero">
    <div class="text-container">
        <div class="text">
            <p>
                Este es un grupo para todos los desarrolladores, entusiastas y apasionados
                por JavaScript en Barranquilla y la Costa Atlántica.
            </p>
            <a class="baq-button" target="_blank" href="https://www.meetup.com/es-ES/BarranquillaJS/"> Únete </a>
        </div>
    </div>
    <div class="map">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Atlantico-municipios.svg">
    </div>
</div>`;
