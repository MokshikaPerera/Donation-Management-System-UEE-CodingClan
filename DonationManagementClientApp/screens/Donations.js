import React from 'react'
import { useState } from 'react';
import { Button, View, StyleSheet, Image, TouchableOpacity, Text, ImageBackground, ScrollView, TextInput } from 'react-native'
import AddDonation from '../modal/AddDonation';
import DonationSuccess from '../modal/DonationSuccess';
import AddCard from '../modal/AddCard'

export default function Donations() {
    const [visible, setVisible] = React.useState(false);
    const [visibleSuccess, setVisibleSuccess] = React.useState(false);
    const localimage = require('../assets/bg-img.png');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [note, setNote] = useState('');
    function nameHandler(enteredText) {
        setName(enteredText);
    }
    function amountHandler(enteredText) {
        setAmount(enteredText);
    }
    function paymentMethodHandler(enteredText) {
        props.navigation.navigate('AddCard');
    }
    function noteHandler(enteredText) {
        setNote(enteredText);
    }

    function addDonationHandler() {

    }
    return (

        <ImageBackground source={localimage} resizeMode='stretch' style={styles.appContainer}>
            <View style={{ marginTop: 130 }}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={styles.box3}>
                        <View style={styles.box2}>
                            <Image source={require('../assets/user.jpg')} style={styles.img} />
                            <Text style={styles.boxText2}>Anna Wilson</Text>
                        </View>
                        <Text style={styles.boxText1}>LKR 5000</Text>
                    </View>
                    <View style={styles.box3}>
                        <View style={styles.box2}>
                            <Image source={require('../assets/user.jpg')} style={styles.img} />
                            <Text style={styles.boxText2}>Anna Wilson</Text>
                        </View>
                        <Text style={styles.boxText1}>LKR 5000</Text>
                    </View>
                    <View style={styles.box3}>
                        <View style={styles.box2}>
                            <Image source={require('../assets/user.jpg')} style={styles.img} />
                            <Text style={styles.boxText2}>Anna Wilson</Text>
                        </View>
                        <Text style={styles.boxText1}>LKR 5000</Text>
                    </View>
                </ScrollView>
                {/* <DonationSuccess visible={visible}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Image source={require('../assets/cross.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../assets/success.png')} style={{ width: 150, height: 150 }} />
                    </View>
                    <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>Donation successful</Text>
                </DonationSuccess> */}

                {/* Add Donation Modal Box */}
                <AddDonation visible={visible}>
                    <View >
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.header}>
                                <TouchableOpacity onPress={() => setVisible(false)}>
                                    <Image source={require('../assets/cross.png')} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.modalHeaderText}>Add Donations</Text>
                        <View style={styles.modalInputContainer1}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.labelText}>Name</Text>
                                <TextInput style={styles.textInput} placeholder='Enter name' onChangeText={nameHandler} />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.labelText}>Amount</Text>
                                <TextInput style={styles.textInput} placeholder='Enter amount' onChangeText={amountHandler} />
                            </View>
                        </View>
                        <View style={styles.modalInputContainer1}>
                            <Text style={styles.labelText2}>Payment Method</Text>

                            {/* Add Card Modal Box */}
                            <AddCard></AddCard>
                            <TouchableOpacity  >
                                <View style={styles.boxContainer}>
                                    <View style={styles.box}>
                                        <Image source={require('../assets/Plus.png')} style={styles.img2} />
                                        <Text style={styles.boxText3}>Add Card</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* <Button title='Add Card' onPress={paymentMethodHandler} /> */}
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.labelText}>Note(Optional)</Text>
                            <TextInput style={styles.textInput2} placeholder='Enter note' onChangeText={noteHandler} />
                        </View>
                        <View style={{ marginTop: 50 }}>
                            <DonationSuccess visibleSuccess={visible}>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={styles.header}>
                                        <TouchableOpacity onPress={() => setVisibleSuccess(false)}>
                                            <Image source={require('../assets/cross.png')} style={{ width: 30, height: 30 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={require('../assets/success.png')} style={{ width: 150, height: 150 }} />
                                </View>
                                <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>Donation successful</Text>
                            </DonationSuccess>
                            <Button title='Donate' color="#06134B" onPress={() => setVisibleSuccess(true)}  />
                        </View>
                    </View>
                </AddDonation>
                <View style={styles.buttonContainer}>
                    {/* <Button title='add donations' onPress={() => setVisible(true)} /> */}
                    <TouchableOpacity onPress={() => setVisible(true)} >
                        <View style={styles.boxContainer}>
                            <View style={styles.box}>
                                <Image source={require('../assets/Plus.png')} style={styles.img2} />
                                <Text style={styles.boxText3}>Give Donations</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>


    )
}
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        ImageBackground: require('../assets/bg-img.png'),
        alignItems: 'center'
    },
    header: {
        width: '100%',
        height: 30,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    box2: {
        backgroundColor: '#fff',
        width: 400,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
        padding: 5,
        flexDirection: 'row',

    },
    box3: {
        backgroundColor: '#fff',
        width: 400,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
        padding: 5,
        marginTop: 20
    },

    boxText1: {
        color: '#EF1E43',
        fontSize: 20,
        marginTop: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    boxText2: {
        color: '#06134B',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 40
    },
    boxText3: {
        color: '#06134B',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 0
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
    img2: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    buttonContainer: {
        marginTop: 10,
        width: '50%',
        alignItems: 'flex-end'
    },
    boxContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    box: {
        backgroundColor: '#91BEF3',
        width: 200,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
        padding: 5,
        borderColor: '#000000',
        borderWidth: 1,
    },
    modalHeaderText: {
        color: '#06134B',
        fontSize: 25
    },
    labelText: {
        color: '#FFFFFF',
        fontSize: 15
    },
    labelText2: {
        color: '#FFFFFF',
        marginBottom: 10,
        fontSize: 15
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '75%',
        padding: 5,
        margin: 5,
        backgroundColor: '#FCFDFF',
        fontSize: 15
    },
    textInput2: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        height: '150%',
        padding: 5,
        margin: 5,
        backgroundColor: '#FCFDFF',
        fontSize: 15,
    },
    inputContainer1: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row'
    },
    inputContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

})
