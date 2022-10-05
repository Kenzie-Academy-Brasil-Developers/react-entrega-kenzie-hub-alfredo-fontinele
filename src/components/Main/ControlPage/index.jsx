import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { ControlPageContainer } from './style'

export const ControlPage = ({ page, setPage }) => {

    const nextPage = () => {
        setPage((page) => page + 1)
    }

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    return (
        <ControlPageContainer>
            <MdNavigateBefore onClick={previousPage}/>
            <h3>{page}</h3>
            <MdNavigateNext onClick={nextPage}/>
        </ControlPageContainer>
    )
}