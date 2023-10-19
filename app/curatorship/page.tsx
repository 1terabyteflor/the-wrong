import Nav from "../components/Nav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVimeoV, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import Logo from "../components/Logo";

export default async function Curatorship() {
    return (
        <div className="flex w-full pr-40">
            <Nav/>
            <div className="flex flex-col">
                <h1 className="font-arial font-bold text-lg pt-1">Curatorial Text</h1>
                <p className="font-arial text-sm">The materiality of the digital technologies and the possibilities for circulation they enable have been producing a series of modifications in the field of art that reconfigure the concept of artwork, of its medium or form of circulation and, therefore, its reception. <br></br>
        So far, so near explores a series of pieces made with AI, in order to inquire about certain hegemonic narratives  linked not only with the artistic canon but with our worldview. <br></br>
        AI tools have motivated artists to produce pieces in an exponentially wild way. But, What limits and potentialities emerge in this field of experimentation? Is it possible to produce critical reflections using the processes and languages that the system under investigation provides? <br></br>
        Using different raw materials as a source of inspiration the corpus gathers collage, digital and analogue photography, video, illustration and sounds.</p>
                <br></br>
                <h1 className="font-arial font-bold text-lg">About the Curator</h1>
                <p className="font-arial text-sm">Laura Focarazzo is an experimental filmmaker and independent curator based in Buenos Aires, Argentina. She holds an MA in Curatorship of Visual Art, and researches in the field of Electronic Arts.  <br></br>
            As a curator, she has worked in projects for the Ribalta Experimental Film Festival, Italy; TENT, Festival for experimental films and new media, India; Strangloscope - Mostra International de audio, video/filme & performance experimental, Brazil; the [.BOX] Videoart project space, Italy; The Wrong Biennale, online; Galería del Museo Marítimo y del Presidio, Argentina; MUNTREF, Museo de Artes Visuales, Argentina, among others.<br></br>
            As an artist, she has had exhibitions at ICA, The Institute of Contemporary Arts, London; ZKM, Germany; FILE - Electronic Language International Festival, Brazil; BienalSur, Argentina; Echo Park Film Center, Los Angeles; MACBA, Museo de Arte Contemporáneo de Buenos Aires, Argentina; Festival Les Instants vidéo: 50 Years of Video Art, France; BAFICI - International Independent Film Festival of Buenos Aires, Argentina; Rencontres Traverse Vidéo at La Cinémathèque Toulouse, France; Incubarte, International Independent Art Festival, Spain; Festival Punto y Raya, Reykjavík; Copenhagen Art Festival, Denmark, among others. Her work has been included at datta.art, a platform that commissions original digital artworks by established and emerging artists for selling.
                </p>
                <br></br>
                <h1 className="font-arial font-bold">Contact</h1>
                <div className="flex mt-3">
                <Link href="https://vimeo.com/laurafocarazzo" target="_blank">
                    <FontAwesomeIcon icon={faVimeoV} className="mr-3 icon" />                
                </Link>
                <Link href="https://www.instagram.com/laurafocarazzo/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="mr-3 icon" />
                </Link>
                <Link href="mailto:eludiendoelcuboblanco@gmail.com" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </Link>
                </div>
                <Logo/>
            </div>
    </div>
    )
}