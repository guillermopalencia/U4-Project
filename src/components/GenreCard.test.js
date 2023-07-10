import { render } from "@testing-library/react";
import React from "react";
import GenreCard from "./GenreCard";

describe("testing genre mapping method", () =>{
    it("should show each genre respectfully", () => {
        let genres = ['rap','rock','metal'
        ]
        render(<GenreCard genres={genres}/>)
        expect(genres[0]).toBe('rap')
        expect(genres[1]).toBe('rock')
    })
    it("should show nothing if no artists", () => {
        render(<GenreCard/>)
        expect(null)
    })
})