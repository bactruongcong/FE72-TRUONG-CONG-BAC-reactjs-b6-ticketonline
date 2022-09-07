export const addSeatList = (data) => {
    return {
        type: 'seatlistselect/addSeatSelect',
        payload: data
    }
}
export const deleteSeatList = (soGhe) => {
    return {
        type: 'seatlistselect/deleteSeatSelect',
        payload: soGhe
    }
}