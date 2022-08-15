import { useMemo } from "react"

export const usePagination = ({
    totalCount,
    pageSize
}) => {
    const paginationRange = useMemo(() => {
        // Logique d'implémentation.
        const totalPageCount = Math.ceil(totalCount/pageSize)
        const range = (start, end) => {
            let length = end - start + 1
            return Array.from({length}, (_, idx) => idx + start)
        }
        return range(1, totalPageCount)
    }, [totalCount, pageSize])
    return paginationRange
}

/*
"useMemo" sera appelé à chaque changement de valeur dans son tableau de dépendances.

Le nombre de pages nécessaire est <= au nombre de numéros de pages que je montre, donc je retourne le "range"
de 1 à "totalPageCount". Ex :
< 1 2 3 4 >

Ligne 9 : Math.ceil arrondit le résultat de la division au chiffre supérieur pour avoir une page en plus
pour les dernières cartes.
*/