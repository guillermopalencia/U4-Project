import { render } from "@testing-library/react";
import React from "react";
import GenreCard from "./GenreCard";

describe("testing genre mapping method", () =>{
    it("should show each genre respectfully", () => {
        let genres = ['rap','rock','metal'
        ]
        const {getByText } = render(<GenreCard genres={genres}/>)
        expect(getByText(/rap/i)).toBeInTheDocument()
        expect(getByText(/rock/i)).toBeInTheDocument()
    })
    it("should show nothing if no artists", () => {
        let genres = null
        const element = render(<GenreCard genres={genres}/>)
        expect(element.genres).toBe(undefined)
    })
})