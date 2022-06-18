import { useRouter } from 'next/router';

import { useState } from 'react';




export function useMoveToPage(){

    const router = useRouter()
    const [visitedPage, setVisitedPage] = useState('/')


    const onClickMoveToPage = (path) =>() =>{
        setVisitedPage(path)
        router.push(path)
    }

    return {
        visitedPage,
        onClickMoveToPage
    }
}