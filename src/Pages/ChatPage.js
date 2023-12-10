import { Box } from "@chakra-ui/react"
import { ChatState } from "../Context/ChatProvider"
import SideDrawer from "../components/Miscellaneous/SideDrawer"
import ChatBox from "../components/ChatBox"
import MyChats from "../components/MyChats"
import { useState } from "react"

const ChatPage = () => {
   const {user} = ChatState()
   const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%"}}>
        {user && <SideDrawer />}
        <Box
        display="flex"
        justifyContent='space-between'
        w='100%'
        h='100vh'
        p='10px'
        >
            {user && 
            <MyChats fetchAgain={fetchAgain} />}
            {user && <ChatBox
            fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
        </Box>
    </div>
  )
}

export default ChatPage