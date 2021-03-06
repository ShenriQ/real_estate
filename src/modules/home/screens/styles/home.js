import { Dimensions, StyleSheet } from 'react-native';
import Theme from '../../../../theme';

const { width } = Dimensions.get('window');

const FEATURED_WIDTH = width - 60;
const FEATURED_HEIGHT = FEATURED_WIDTH / 1.5;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Theme.specifications.statusBarHeight,
    },
    scroll: {
        marginLeft: 10,
    },
    filterContainer: {
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    filterView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterIco: {
        marginHorizontal: 12,
        width: 20,
        height: 20,
    },
    filterText: {
        color: Theme.colors.gray1,
        fontFamily: 'SF_medium',
        fontSize: 16,
        paddingLeft: 5,
    },
    filterTextDesc: {
        color: Theme.colors.gray1,
        fontFamily: 'SanFranciscoDisplay-Regular',
        fontSize: 13,
        paddingLeft: 5,
        textAlign: 'right',
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    reviewModal: {
        justifyContent: 'center',
        margin: 20,
    },

    modalView: {
        width: '100%',
        paddingTop: 10,
        backgroundColor: Theme.colors.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    closedModalView: {
        paddingTop: 10,
        paddingLeft: 10,
        backgroundColor: Theme.colors.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    reviewModalView: {
        padding: 10,
        backgroundColor: Theme.colors.white,
        borderRadius: 10,
    },

    closedModalTitle: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: Theme.colors.black,
        fontFamily: 'SanFranciscoDisplay-Bold',
        fontSize: 17,
    },
    closedModalDesc: {
        paddingLeft: 10,
        paddingVertical: 5,
        color: Theme.colors.gray1,
        fontFamily: 'SanFranciscoDisplay-Regular',
        fontSize: 15,
    },
    closedModalImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    closedModalImage: {
        height: 60,
        width: 60,
        borderRadius: 8,
        resizeMode: 'contain',
        overflow: 'hidden',
    },
    closedModalInfoContainer: {
        marginTop: 30,
        flexDirection: 'row',
    },
    modalContainerReview: {
        flexDirection: 'row',
        marginTop: -5,
        paddingBottom: 3,
        justifyContent: 'center',
    },
    ButtonRev: {
        backgroundColor: Theme.colors.cyan2,
        marginTop: 30,
        marginBottom: 10,
        marginHorizontal: 70,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    ButtonTextRev: {
        fontFamily: 'SanFranciscoDisplay-Regular',
        color: Theme.colors.white,
        fontSize: 15,
        textAlign: 'center',
    },
    inputRev: {
        flex: 1,
        marginTop: 15,
        backgroundColor: '#f7f7f7',
        padding: 5,
        height: 70,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Theme.colors.cyan2,
    },
    closedModalInfo: {
        flex: 1,
    },
    closedModalInfoDesc: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        color: Theme.colors.gray1,
        fontFamily: 'SanFranciscoDisplay-Regular',
        fontSize: 13,
        textAlign: 'center',
    },
    closedModalIcoContainer: {
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closedModalIco: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },
    closedModalIcoRev: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
    modalTextContainer: {
        borderBottomWidth: 1,
        borderBottomColor: Theme.colors.listBorderColor,
    },
    modalText: {
        paddingLeft: 10,
        paddingVertical: 10,
        color: Theme.colors.black,
        fontFamily: 'SanFranciscoDisplay-Regular',
        fontSize: 18,
    },
    location: {
        flexDirection: 'row',
        padding: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Theme.colors.listBorderColor,
    },
    locationIcoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    locationIco: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    locationTitleContainer: {
        flex: 6,
        marginLeft: 10,
        justifyContent: 'center',
    },
    filterTitleContainer: {
        flex: 8,
        justifyContent: 'center',
    },
    modalFilterText: {
        paddingVertical: 10,
        color: Theme.colors.black,
        fontFamily: 'SanFranciscoDisplay-Regular',
        fontSize: 18,
    },
    locationTitle: {
        color: Theme.colors.black,
        fontFamily: 'SanFranciscoDisplay-Regular',
        fontSize: 18,
        paddingVertical: 5,
    },
    featuredLocationContainer: {
        backgroundColor: Theme.colors.white,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        margin: 10,
        marginBottom: 10,
    },
    featuredLocationIco: {
        height: 13,
        width: 13,
        resizeMode: 'contain',
    },
    featuredLocation: {
        color: Theme.colors.black,
        fontFamily: 'SF_medium',
        fontSize: 17,
        paddingTop: 5,
        marginBottom: -5,
    },
    featuredTitle: {
        color: Theme.colors.black,
        fontFamily: 'SanFranciscoDisplay-Bold',
        fontSize: 21,
        paddingTop: 10,
        paddingBottom: 0,
    },
    featuredTitleDesc: {
        color: Theme.colors.gray3,
        fontFamily: 'SanFranciscoDisplay-Regular',
        fontSize: 15,
        paddingTop: 0,
    },
    actionTypeView: {
        paddingBottom: 10,
        marginHorizontal: 10,
        borderBottomColor: Theme.colors.listBorderColor,
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: -25,
    },
    actionTextDelivery: {
        color: 'gray',
        fontFamily: 'SF_medium',
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 0,
    },
    actionTextPickup: {
        color: 'gray',
        fontFamily: 'SF_medium',
        fontSize: 14,
        paddingTop: 10,
        marginLeft: 20,
        paddingBottom: 0,
    },
    actionDeliveryTextActiveColor: {
        color: '#53AAC1',
        fontFamily: 'SF_medium',
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 0,
    },
    actionTextPickupActiveColor: {
        color: '#53AAC1',
        fontFamily: 'SF_medium',
        fontSize: 14,
        paddingTop: 10,
        marginLeft: 20,
        paddingBottom: 0,
    },
    featuredLine: {
        paddingBottom: 5,
        borderBottomColor: Theme.colors.listBorderColor,
        borderBottomWidth: 1,
    },
    featuredScrollView: {
        paddingLeft: 10,
    },
    featuredCard: {
        width: FEATURED_WIDTH,
        height: FEATURED_HEIGHT,
        marginRight: 10,
        borderRadius: 4,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 20,
    },
    featuredImageContainer: {
        flex: 3,
    },
    featuredImage: {
        width: FEATURED_WIDTH,
        height: FEATURED_HEIGHT * (3 / 4),
    },
    featuredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Theme.colors.white,
    },
    featuredTitleContainer: {
        flex: 7,
    },
    featuredName: {
        color: Theme.colors.black,
        fontFamily: 'SF_medium',
        fontSize: 18,
        padding: 10,
        justifyContent: 'center',
    },
    featuredIcoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    featuredIco: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },
    closeModalImage: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        margin: 5,
        marginLeft: 10,
    },
    noRes: {
        flex: 1,
        backgroundColor: Theme.colors.white,
        alignItems: 'center',
    },
    noResTitle: {
        color: '#000000',
        fontFamily: 'SanFranciscoDisplay-Bold',
        fontSize: 23,
        textAlign: 'center',
        paddingTop: 20,
    },
    noResDescription: {
        color: '#000000',
        fontFamily: 'SF_medium',
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    noResImage: {
        width: 300,
        height: 110,
    },
    bottomContainerButton: {
        backgroundColor: Theme.colors.cyan2,
        margin: 10,
        marginTop: 50,
        marginHorizontal: 30,
        marginBottom: 0,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    bottomContainerButtonText: {
        fontFamily: 'SF_medium',
        color: Theme.colors.white,
        fontSize: 18,
        textAlign: 'center',
    },
    addressItem: {
        flexDirection: 'row',
    },

    filerTopButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        borderRadius: 6,
        width: 80,
        height: 30,
    },
    filterTopButtonText: {
        fontSize: 15,
        color: '#7f7f7f',
    },
    filtersMenuItemsContainer: {
        marginTop: 10,
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    filterItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 6,
    },
    radioButton: {
        marginRight: 10,
        height: 22,
        width: 22,
        borderRadius: 11,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        borderWidth: 2,
        borderColor: '#c4c4c440',
    },
    radioButtonSelected: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: '#61C8D5',
        borderColor: '#61C8D5',
    },
    applyFiltersButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '80%',
        marginHorizontal: 20,
        backgroundColor: '#61C8D5',
    },
    applyFilterButtonText: { fontSize: 20, color: '#fff' },
});