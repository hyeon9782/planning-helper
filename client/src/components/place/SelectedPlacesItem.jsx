import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { courseListState } from '../../store/courseListState';
import { placeState } from '../../store/placeState';
import { BsArrowRight } from 'react-icons/bs';

const SelectedPlacesItem = ({ item, itemIndex }) => {
    const setPlaceList = useSetRecoilState(placeState);
    const [ courceList, setCourceList ] = useRecoilState(courseListState);
    const deleteCource = (id, name, coord) => {

        console.log(`${item.name} 삭제`)

        // 코스 리스트 삭제
        const updatedCourseList = courceList.map((innerArray) => {
            return innerArray.filter((el, index) => {
                return index !== itemIndex;
            })
        })

        setCourceList(updatedCourseList);
        
        // 장소 리스트 추가
        setPlaceList((oldPlaceList) => [
            ...oldPlaceList,
            {
                id,
                name,
                coord
            }
        ])
        
    }
    return (
        <SelectedPlacesItemBlock>
            <Item onClick={() => deleteCource(item.id, item.name, item.coord)}>
                {item ? item.name : "기본1"} 
            </Item>
            {/* <Move>
                <div className='time'>
                    1시간 10분
                </div>
                <div className='icon-box'>
                    <BsArrowRight size="80" />
                </div>
            </Move> */}
        </SelectedPlacesItemBlock>
    )
}

const SelectedPlacesItemBlock = styled.div`
    display: flex;
    height: 110px;
`

const Item = styled.div`
    padding: 10px;
    background-color: lightgray;
    margin: 10px;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`

export default SelectedPlacesItem;