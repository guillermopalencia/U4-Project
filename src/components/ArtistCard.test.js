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
        const { getByText} = render(<ArtistCard artists={artists}/>)
        expect(getByText(/drake/i)).toBeInTheDocument()
    })
    it("should show nothing if no artists", () => {
        let artists=null
        let element = render(<ArtistCard artists={artists}/>)
        expect(element.artists).toBe(undefined)
    })
})