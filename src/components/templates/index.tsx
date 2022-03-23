import tw from "tailwind-styled-components/dist/tailwind";

export const TemplateContainer = tw.div`
    w-screen h-screen bg-gray-50 flex flex-col items-center
`

export const TemplateContent = tw.div`
    w-full h-full max-w-screen-lg grid grid-cols-2
`

export const TempleteHeroSideBar = tw.aside`
    flex justify-center items-center    
`
export const TemplateMainHeroSection = tw.main`
    flex flex-col justify-center items-center gap-16
`