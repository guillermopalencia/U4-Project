import { render } from "@testing-library/react";
import React from "react";
import ArtistCard from "./ArtistCard";

describe("testing artist mapping method", () =>{
    it("should show each artist respectfully", () => {
        let artists = [{
            name: 'drake',
            images: 'fakeimage.png'
        },{
            name: '21 savage',
            images: '2ndimage.png'
        }
        ]
        render(<ArtistCard artists={artists}/>)
        expect(artists[0].name).toBe('drake')
        expect(artists[1].images).toBe('2ndimage.png')
    })
    it("should show nothing if no artists", () => {
        render(<ArtistCard/>)
        expect(null)
    })
})