const listActions={
    addToList: 'addToList',
    removeFromList: 'removeFromList',
    removeAllFromList: 'removeAllFromList',   
}

function readingListReducer(readingList=[], {type, book}){
    switch(type){
        case listActions.addToList:
            console.log('adding book')
            return [...readingList, book]

        case listActions.removeFromList:
            console.log('removing book')
            let newList=readingList.slice()
            for (let listItem of newList){
                if(listItem.id === book.id){
                    newList.splice(newList.indexOf(listItem),1)
                    return newList
                }
            }
            return newList

        case listActions.removeAllFromList:
            console.log('removed all from reading list')
            return []

        default:
            throw new Error('Error!')
    }
}

export {
    readingListReducer,
    listActions
}