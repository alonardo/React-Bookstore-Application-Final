import {useContext} from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { AppContext } from '../context/AppContext';

export const AddRemoveItem = ({book}) =>{

  const {addToList, removeFromList, removeAllFromList} =useContext(AppContext)

  return (
    <ButtonGroup sx={{margin:"auto"}}>
        <IconButton key="delete" onClick={()=>{removeAllFromList(book)}}>
            <DeleteForeverTwoToneIcon fontSize="small" />
        </IconButton>
        <IconButton key="rm" onClick={()=>{removeFromList(book)}}>
            <RemoveCircleTwoToneIcon fontSize="small" />
        </IconButton>
        <IconButton key="add" onClick={()=>{addToList(book)}}>
            <AddCircleTwoToneIcon fontSize="small" />
        </IconButton>
    </ButtonGroup>
  )
};