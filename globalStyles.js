import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar:{
        backgroundColor: 'transparent',
        height: 64,
        width: 64,
    },
    btnRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        marginVertical: 8,
        position: 'absolute',
        bottom: 0,
    },
    item: {
        padding: 16,
        marginVertical: 6,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    name: { fontSize: 16 },
    label: { fontSize: 16, color: 'gray', marginBottom: 8 },
    menuBtn: { textAlign: 'center', padding: 12, color: '#555' },
})