import React from 'react'
import { View, StyleSheet, Button, Modal } from 'react-native'

export default function AddDonation({visible,children}) {
    const [showModal,setShowModal]=React.useState(visible);
    React.useEffect(() => {
        toggleModal();
    },[visible]);
    const toggleModal = () => {
        if(visible){
            setShowModal(true);
        }else{
            setShowModal(false);
        }
    }
  return (
    <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
            <View style={styles.modalContainer}>{children}</View>
        </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
modalBackGround:{
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center',
    flex:1
},
modalContainer:{
    width:'80%',
    backgroundColor:'#3A74CB',
    paddingHorizontal:20,
    paddingVertical:30,
    borderRadius:20,
    elevation:100
}
});
