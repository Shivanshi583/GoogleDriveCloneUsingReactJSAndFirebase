import React, { useState } from 'react';
import MobileScreenShareIcon from  '@material-ui/icons/MobileScreenShare';
import DevicesIcon from '@material-ui/icons/Devices';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import styled from 'styled-components';
import { Modal } from '@material-ui/core';


const SideBarContainer=styled.div`
margin-top:10px;
`
const SideBarBtn=styled.div`
button{
    background:transparent;
    border:1px solid lightgray;
    display:flex;
    align-items:center;
    border-radius:40px;
    padding:5px 10px;
    box-shadow: 2px 2px 2px #ccc;
    margin-left:20px;
    span{
        font-size:16px;
        margin-right:20px;
        margin-left:10px;
    }
  }
`
const SideBarOptions=styled.div`
margin-top:10px;
.progress_bar{
    padding: 0px 20px;
}
.progress_bar span{
    display:block;
    color:#333;
    font-size:13px;
}
`
const SideBarOption=styled.div`
display:flex;
align-items:center;
padding:8px 20px;
border-radius:0px 20px 20px 0px;
&:hover{
    background:whitesmoke;
    cursor:pointer;
}
svg.MuiSvgIcon-root{
    color:rgb(78,78,78)
}
span{
    margin-left:15px;
    font-size:13px;
    font-weight:500;
    color:rgb(78,78,78);
}
`

const ModalPopup=styled.div`
   top:50%;
   background-color:#fff;
   width:500px;
   margin: 0px auto;
   position:relative;
   transform:translateY(-50%);
   padding:10px;
   border-radius: 10px;
`

const ModalHeading = styled.div`
   text-align:center;
   border-radius: 1px solid lightgray;
   height:40px;
`

const ModalBody = styled.div`
  input.modal_submit{
    width:100%;
    background:darkmagenta;
    padding:10px 20px;
    color:#fff;
    text-transform:uppercase;
    letter-spacing:5px;
    font-size:16px;
    border:0;
    outline:0;
    border-radius:5px;
    cursor:pointer;
    margin-top:20px;

  }
  input.modal_file{
    background:whitesmoke;
    padding:20px;
    color:#000;
    display:block;
     margin-top:20px;
  }

`
const UploadingPara = styled.div`
background:green;
color:#fff;
margin:20px;
text-align: center;
padding:10px;
letter-spacing:1px;

`




const Sidebar = () => {
   const [open,setOpen] =useState(true);
    const[uploading,setUploading] = useState(false);
    const[file,setFile] = useState(null);

    const handleFile = e =>{
        if(e.target.files[0])  setFile(e.target.files[0])
    }


  return (
    <>
     <Modal open={open} onClose={()=>setOpen(false)}>
      <ModalPopup>
        <form>
            <ModalHeading>
                <h3>Select file you want to upload</h3>
            </ModalHeading>
            <ModalBody>
                {uploading ? <UploadingPara>Uploading...</UploadingPara> :
                (
                    <>
                <input type="file" className='modal_file' onChange={handleFile}/>
                <input type="submit" className='modal_submit' />
                </>
                )
            }
            </ModalBody>
        </form>
      </ModalPopup>
     </Modal>

    <SideBarContainer>
    <SideBarBtn >
        <button onClick={()=>setOpen(true)}>
            <img src="" alt='+'/>
            <span>New</span>
        </button>
    </SideBarBtn>
    <SideBarOptions>
        <SideBarOption >
            <MobileScreenShareIcon/><span>My Drive</span>
        </SideBarOption>
        <SideBarOption >
            <DevicesIcon/><span>Computers</span>
        </SideBarOption>
        <SideBarOption >
            <PeopleAltOutlinedIcon/><span>Shared with me</span>
        </SideBarOption>
        <SideBarOption >
            <QueryBuilderOutlinedIcon/><span>Recent</span>
        </SideBarOption>
        <SideBarOption>
            <StarBorderOutlinedIcon/><span>Starred</span>
        </SideBarOption>
        <SideBarOption >
            <DeleteOutlineOutlinedIcon/><span>Trash</span>
        </SideBarOption>
    </SideBarOptions>
    <hr/>
    <SideBarOptions>
    <SideBarOption >
            <CloudQueueIcon/>
            <span>Storage</span>
        </SideBarOption>
        <div className='progress_bar'>
           <progress size="tiny" value="50" max="100"/>
           <span>105 GB of 200GB used</span>
        </div>
    </SideBarOptions>
   </SideBarContainer>
    </>
   
  )
}

export default Sidebar
