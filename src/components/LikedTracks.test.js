import { render } from "@testing-library/react";
import React from "react";
import LikedTracks from "./LikedTracks";

describe("testing genre mapping method", () =>{
    it("should show each genre respectfully", () => {
        let likedTracks = [{track: {name: 'one dance', album: {name: 'more life', images: 'png'}, artists: 'drake'}}]
        let track1 = likedTracks[0].track.name
        console.log(track1)
        const { getByRole } = render(<LikedTracks likedTracks={likedTracks}/>)
        expect(getByRole('heading',{name: 'one dance'})).toBeInTheDocument()
    })
    it("should show nothing if no artists", () => {
        let likedTracks = null
        const element = render(<LikedTracks likedTracks={likedTracks}/>)
        expect(element.likedTracks).toBe(undefined)
    })
})