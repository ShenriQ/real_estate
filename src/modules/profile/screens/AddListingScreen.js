import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Keyboard, Platform, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import FastImage from 'react-native-fast-image';
import Spinner from 'react-native-loading-spinner-overlay';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import { updateProfileDetails } from '../../../store/actions/auth';
import { MainBtn } from '../../../common/components';
import { translate } from '../../../common/services/translate';
import { createListing } from '../../../store/actions/listings'
import alerts from '../../../common/services/alerts';
import { getImageFullURL, isEmpty, } from '../../../common/services/utility';
import Theme from '../../../theme';
import AuthInput from '../../../common/components/AuthInput';
import AutoLocInput from '../../../common/components/AutoLocInput';
import ImgPickOptionModal from '../../../common/components/modals/ImgPickOptionModal';
import Header1 from '../../../common/components/Header1';
import PhotoList from '../components/PhotoList';
import { RadioBtn } from '../../../common/components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { uploadPhoto } from '../../../common/services/firebase';
// Svg
import Svg_addphoto from '../../../common/assets/svgs/add_a_photo.svg';


const AddListingScreen = (props) => {
	const [isLoading, ShowLoading] = useState(false);
	const [showPickerModal, setShowPickerModal] = useState(false);
	const [photos, setPhotos] = useState([]);
	const [google_map_position, setGoogleMapPosition] = useState({});
	const [address_text, setAddressText] = useState('');

	useEffect(() => {
		let text = google_map_position.street || '';
		if (google_map_position.city != null && google_map_position.city != '') {
			text = `${text} ${google_map_position.city}`;
		}
		if (google_map_position.country != null && google_map_position.country != '') {
			text = `${text}, ${google_map_position.country}`;
		}
		setAddressText(text);
	}, [google_map_position]);

	const [value1, setValue1] = useState('');  // type_use
	const [value2, setValue2] = useState('');  // living_rooms
	const [value3, setValue3] = useState('');  // rooms
	const [value4, setValue4] = useState('');  // toilets
	const [value5, setValue5] = useState('');  // room_toilets
	const [value6, setValue6] = useState('');  // helper_rooms

	const [value_city1, setValue_city1] = useState('');
	const [value_city2, setValue_city2] = useState('');
	const [value_city3, setValue_city3] = useState('');


	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
	const [open4, setOpen4] = useState(false);
	const [open5, setOpen5] = useState(false);
	const [open6, setOpen6] = useState(false);

	const [open_city1, setOpen_city1] = useState(false);
	const [open_city2, setOpen_city2] = useState(false);
	const [open_city3, setOpen_city3] = useState(false);

	const onOpen1 = useCallback(() => {
		setOpen2(false);
		setOpen3(false);
		setOpen4(false);
		setOpen5(false);
		setOpen6(false);

		setOpen_city1(false);
		setOpen_city2(false);
		setOpen_city3(false);
	}, []);
	const onOpen2 = useCallback(() => {
		setOpen1(false);
		setOpen3(false);
		setOpen4(false);
		setOpen5(false);
		setOpen6(false);

		setOpen_city1(false);
		setOpen_city2(false);
		setOpen_city3(false);
	}, []);
	const onOpen3 = useCallback(() => {
		setOpen1(false);
		setOpen2(false);
		setOpen4(false);
		setOpen5(false);
		setOpen6(false);

		setOpen_city1(false);
		setOpen_city2(false);
		setOpen_city3(false);
	}, []);
	const onOpen4 = useCallback(() => {
		setOpen1(false);
		setOpen2(false);
		setOpen3(false);
		setOpen5(false);
		setOpen6(false);

		setOpen_city1(false);
		setOpen_city2(false);
		setOpen_city3(false);
	}, []);
	const onOpen5 = useCallback(() => {
		setOpen1(false);
		setOpen2(false);
		setOpen3(false);
		setOpen4(false);
		setOpen6(false);

		setOpen_city1(false);
		setOpen_city2(false);
		setOpen_city3(false);
	}, []);
	const onOpen6 = useCallback(() => {
		setOpen1(false);
		setOpen2(false);
		setOpen3(false);
		setOpen4(false);
		setOpen5(false);

		setOpen_city1(false);
		setOpen_city2(false);
		setOpen_city3(false);
	}, []);


	const onOpen_city1 = useCallback(() => {
		setOpen1(false);
		setOpen2(false);
		setOpen3(false);
		setOpen4(false);
		setOpen5(false);
		setOpen6(false);

		setOpen_city2(false);
		setOpen_city3(false);
	}, []);
	const onOpen_city2 = useCallback(() => {
		setOpen1(false);
		setOpen2(false);
		setOpen3(false);
		setOpen4(false);
		setOpen5(false);
		setOpen6(false);

		setOpen_city1(false);
		setOpen_city3(false);
	}, []);
	const onOpen_city3 = useCallback(() => {
		setOpen1(false);
		setOpen2(false);
		setOpen3(false);
		setOpen4(false);
		setOpen5(false);
		setOpen6(false);

		setOpen_city1(false);
		setOpen_city2(false);
	}, []);


	const [type_use_items, setTypeUseItems] = useState([
		{ label: '?????? Residential', value: '0' },
		{ label: '????????? Office building', value: '1' },
		{ label: '?????? Shop', value: '2' },
		{ label: '???????????? Industrial building', value: '3' },
	]);

	const [living_rooms, setLivingRooms] = useState([
		{ label: '1???', value: '1' },
		{ label: '2???', value: '2' },
		{ label: '3???', value: '3' }
	]);

	const [rooms, setRooms] = useState([
		{ label: '?????????', value: '0' },
		{ label: '1??? ', value: '1' },
		{ label: '2??? ', value: '2' },
		{ label: '3??? ', value: '3' },
	]);

	const [toilets, setToilets] = useState([
		{ label: '1??? ', value: '1' },
		{ label: '2??? ', value: '2' },
		{ label: '3??? ', value: '3' },
	]);

	const [room_toilets, setRoomToilets] = useState([
		{ label: '0?????? ', value: '0' },
		{ label: '1?????? ', value: '1' },
		{ label: '2?????? ', value: '2' },
		{ label: '3?????? ', value: '3' }
	]);

	const [helper_rooms, setHelperRooms] = useState([
		{ label: '0?????????', value: '0' },
		{ label: '1?????????', value: '1' },
		{ label: '2?????????', value: '2' },
		{ label: '3?????????', value: '3' }
	]);

	const [cities1, setCities1] = useState([]);
	const [cities2, setCities2] = useState([]);
	const [cities3, setCities3] = useState([]);

	const [state, setState] = useState({
		isSell: true,
		is_featured: false,
		outer_roof: false,
		outer_terrace: false,
		include_water_fee: false,
		include_electricity_fee: false,
		include_manage_fee: false,
		include_government_fee: false,
		include_government_rent: false,
		club_house: false,
		swimming_pool: false,
		car_park: false
	})

	useEffect(() => {
		let tmp = [];
		props.city1_list.map(item => {
			tmp.push({ label: item.name, value: item.name })
		})
		setCities1(tmp);
	}, [props.city1_list, props.city2_list, props.city3_list])

	useEffect(() => {
		onChangeCity1(value_city1)
	}, [value_city1])

	useEffect(() => {
		onChangeCity2(value_city2)
	}, [value_city2])

	useEffect(() => {
		if (props.route.params.listItem != null) {
			setState({
				isSell: props.route.params.listItem.isSell == true,
				is_featured: props.route.params.listItem.is_featured == true,
				outer_roof: props.route.params.listItem.outer_roof == true,
				outer_terrace: props.route.params.listItem.outer_terrace == true,
				include_water_fee: props.route.params.listItem.include_water_fee == true,
				include_electricity_fee: props.route.params.listItem.include_electricity_fee == true,
				include_manage_fee: props.route.params.listItem.include_manage_fee == true,
				include_government_fee: props.route.params.listItem.include_government_fee == true,
				include_government_rent: props.route.params.listItem.include_government_rent == true,
				club_house: props.route.params.listItem.club_house == true,
				swimming_pool: props.route.params.listItem.swimming_pool == true,
				car_park: props.route.params.listItem.car_park == true,
				//
				owner_id: props.route.params.listItem.owner_id,
				type_use: '' + props.route.params.listItem.type_use,
				living_rooms: '' + props.route.params.listItem.living_rooms,
				rooms: '' + props.route.params.listItem.rooms,
				toilets: '' + props.route.params.listItem.toilets,
				room_toilets: '' + props.route.params.listItem.room_toilets,
				helper_rooms: '' + props.route.params.listItem.helper_rooms,
				actual_size: '' + props.route.params.listItem.actual_size,
				construction_size: '' + props.route.params.listItem.construction_size,
				price: '' + props.route.params.listItem.price,
				other: props.route.params.listItem.other || '',
				title: props.route.params.listItem.title || '',
				title_en: props.route.params.listItem.title_en || '',
				property_no: props.route.params.listItem.property_no || '',
				youtube: props.route.params.listItem.youtube || '',
			})

			setValue_city1(props.route.params.listItem.area)
			setValue_city2(props.route.params.listItem.street)
			setValue_city3(props.route.params.listItem.building)

			setValue1('' + props.route.params.listItem.type_use);
			setValue2('' + props.route.params.listItem.living_rooms);
			setValue3('' + props.route.params.listItem.rooms);
			setValue4('' + props.route.params.listItem.toilets);
			setValue5('' + props.route.params.listItem.room_toilets);
			setValue6('' + props.route.params.listItem.helper_rooms);

			setTimeout(() => {
				setGoogleMapPosition(props.route.params.listItem.google_map_position)
			}, 600)

			setPhotos(props.route.params.listItem.photos || [])
		}
	}, [props.route.params.listItem])


	const onChangeCity1 = (_city_1) => {
		let index = props.city1_list.findIndex(item => item.name == _city_1)
		if (index != -1) {
			let tmp = [];
			props.city2_list.filter(item => item.city_1 == props.city1_list[index].id).map(item => {
				tmp.push({ label: item.name, value: item.name })
			})
			setCities2(tmp)
			if (tmp.length == 0) {
				setValue_city2(null)
			}

			setCities3([])
		}
		else {
			setCities2([])
			setValue_city2(null)
			setCities3([])
			setValue_city3(null)
		}
	}

	const onChangeCity2 = (_city_2) => {
		let index = props.city2_list.findIndex(item => item.name == _city_2)
		if (index != -1) {
			let tmp = [];
			props.city3_list.filter(item => item.city_2 == props.city2_list[index].id).map(item => {
				tmp.push({ label: item.name, value: item.name })
			})
			setCities3(tmp)
			if (tmp.length == 0) {
				setValue_city3(null)
			}
		}
		else {
			setCities3([])
			setValue_city3(null)
		}
	}

	const onImageUpload = () => {
		ImagePicker.openPicker({
			multiple: true
		}).then((images) => {
			console.log('photos ', photos)
			console.log('images ', images)
			setPhotos(photos.concat(images.map((i, index) => { return { image: i, weight: photos.length + index + 1 } })));
			setShowPickerModal(false);
		})
			.catch((error) => {
				console.log('onImageUpload ', error)
			});
	};
	const onCapture = () => {
		ImagePicker.openCamera({
			cropping: true,
		}).then((image) => {
			setPhotos(photos.concat([{
				image: image,
				weight: photos.length + 1
			}]));
			setShowPickerModal(false);
		})
			.catch((error) => {
				console.log('onCapture ', error)
			});
	};

	const validateInputs = () => {
		return true;
	}

	const onSave = async () => {
		if (validateInputs() == true) {
			try {
				ShowLoading(true);

				let uploadedPhotos = [];
				for (let i = 0; i < photos.length; i++) {
					try {
						let photoUrl = photos[i].image;
						if (photos[i].image.path != null) {
							photoUrl = await uploadPhoto(`users/photo/${new Date().getTime()}.jpg`, photos[i].image.path);
						}

						uploadedPhotos.push({
							image: photoUrl,
							weight: photos[i].weight
						})
					} catch (error) {
						console.log('uploadPhoto error ', error);
					}
				}

				let newListingData = {
					...state,
					youtube: state.youtube || '',
					type_use: parseInt(state.type_use),
					area: value_city1,
					street: value_city2,
					building: value_city3,
					google_map_position: google_map_position,
					photos: uploadedPhotos,
					owner_id: props.user.id,
					is_featured: state.is_featured == true,
					outer_roof: state.outer_roof == true,
					outer_terrace: state.outer_terrace == true,
					include_water_fee: state.include_water_fee == true,
					include_electricity_fee: state.include_electricity_fee == true,
					include_manage_fee: state.include_manage_fee == true,
					include_government_fee: state.include_government_fee == true,
					include_government_rent: state.include_government_rent == true,
					club_house: state.club_house == true,
					swimming_pool: state.swimming_pool == true,
					car_park: state.car_park == true,
					actual_size: parseInt(state.actual_size),
					construction_size: parseInt(state.construction_size),
					price: parseInt(state.price),
					living_rooms: parseInt(state.living_rooms),
					rooms: parseInt(state.rooms),
					toilets: parseInt(state.toilets),
					room_toilets: parseInt(state.room_toilets),
					helper_rooms: parseInt(state.helper_rooms),
					created_at: new Date().getTime(),
					updated_at: new Date().getTime(),
				};

				if (props.route.params.listItem != null && props.route.params.listItem.id != null) {  // edit
					newListingData.id = props.route.params.listItem.id;
					newListingData.updated_at = new Date().getTime();
				}
				console.log('newListingData ', newListingData)
				await createListing(newListingData);

				ShowLoading(false);
				alerts.info('', '????????????????????????').then((res) => {
					props.navigation.goBack();
				});
			} catch (error) {
				ShowLoading(false);
				console.log('on Save', error);
				alerts.error('??????', '???????????????');
			}
		}
	};

	return (
		<View style={styles.container}>
			<Header1
				onLeft={() => {
					props.navigation.goBack();
				}}
				style={{ paddingHorizontal: 20, height: 90, marginBottom: 0 }}
				title={'????????????'}
			/>
			<View style={styles.formView}>
				<KeyboardAwareScrollView style={styles.scrollview} keyboardShouldPersistTaps='handled'>
					<View style={{ height: 20 }}></View>
					<View style={Theme.styles.col_center}>
						<View style={[Theme.styles.col_center, { width: 116, height: 116 }]}>
							<View style={[Theme.styles.col_center, styles.photoView]}>
								<TouchableOpacity
									onPress={() => setShowPickerModal(true)}
									style={[Theme.styles.col_center, { padding: 20 }]}
								>
									<Svg_addphoto />
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={[Theme.styles.row_center, { width: '100%', flexWrap: 'wrap', marginVertical: 16 }]}>
						<PhotoList photos={photos} changePhotos={(items) => setPhotos(items)} />
					</View>
					<View style={[Theme.styles.row_center, { marginTop: 8, marginVertical: 16 }]}>
						<RadioBtn
							checked={state.isSell == true}
							onPress={() => {
								Keyboard.dismiss()
								setState({ ...state, isSell: (state.isSell == true ? false : true) })
							}}
							text='?????? BUY'
							style={{ marginRight: 40 }}
							textStyle={{ marginLeft: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text }}
						/>
						<RadioBtn
							checked={state.isSell == false}
							onPress={() => {
								Keyboard.dismiss()
								setState({ ...state, isSell: (state.isSell == true ? false : true) })
							}}
							text='?????? RENT'
							textStyle={{ marginLeft: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text }}
						/>
					</View>

					<AuthInput
						placeholder={'Youtube URL'}
						underlineColorAndroid={'transparent'}
						keyboardType={'default'}
						selectionColor={Theme.colors.cyan2}
						onChangeText={(youtube) => setState({ ...state, youtube })}
						returnKeyType={'next'}
						autoCapitalize={'none'}
						value={state.youtube}
						secure={false}
						style={{ marginTop: 16, marginBottom: 12 }}
					/>

					<AuthInput
						placeholder={'?????? / ?????? / ?????? / ?????? '}
						underlineColorAndroid={'transparent'}
						keyboardType={'default'}
						selectionColor={Theme.colors.cyan2}
						onChangeText={(title) => setState({ ...state, title })}
						returnKeyType={'next'}
						autoCapitalize={'none'}
						value={state.title}
						secure={false}
						style={{ marginBottom: 12 }}
					/>
					<AuthInput
						placeholder={'(??????) ?????? / ?????? / ?????? / ?????? '}
						underlineColorAndroid={'transparent'}
						keyboardType={'default'}
						selectionColor={Theme.colors.cyan2}
						onChangeText={(title_en) => setState({ ...state, title_en })}
						returnKeyType={'next'}
						autoCapitalize={'none'}
						value={state.title_en}
						secure={false}
						style={{ marginBottom: 12 }}
					/>
					<AuthInput
						placeholder={'???????????? Property no.'}
						underlineColorAndroid={'transparent'}
						keyboardType={'default'}
						selectionColor={Theme.colors.cyan2}
						onChangeText={(property_no) => setState({ ...state, property_no })}
						returnKeyType={'next'}
						autoCapitalize={'none'}
						value={state.property_no}
						secure={false}
						style={{ marginBottom: 12 }}
					/>
					{
						Platform.OS == 'android' ?
							<React.Fragment>
								<DropDownPicker
									open={open1}
									setOpen={setOpen1}
									onOpen={onOpen1}
									value={value1}
									setValue={setValue1}
									placeholder={'???????????? '}
									items={type_use_items}
									setItems={setTypeUseItems}
									onChangeValue={(type_use) => setState({ ...state, type_use })}
									style={{
										borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 103
									}}
									onPress={() => {
										Keyboard.dismiss()
									}}
								/>
								<DropDownPicker
									open={open_city1}
									setOpen={setOpen_city1}
									onOpen={onOpen_city1}
									value={value_city1}
									setValue={setValue_city1}
									placeholder={'??????'}
									items={cities1}
									setItems={setCities1}
									style={{
										borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 102
									}}
									onPress={() => {
										Keyboard.dismiss()
									}}
									dropDownDirection="BOTTOM"
									ListEmptyComponent={() => <View />}
								/>
								<DropDownPicker
									open={open_city2}
									setOpen={setOpen_city2}
									onOpen={onOpen_city2}
									value={value_city2}
									setValue={setValue_city2}
									placeholder={'??????'}
									items={cities2}
									setItems={setCities2}
									style={{
										borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 101
									}}
									onPress={() => {
										Keyboard.dismiss()
									}}
									dropDownDirection="BOTTOM"
									ListEmptyComponent={() => <View />}
								/>
								<DropDownPicker
									open={open_city3}
									setOpen={setOpen_city3}
									onOpen={onOpen_city3}
									value={value_city3}
									setValue={setValue_city3}
									placeholder={'?????? / ??????'}
									items={cities3}
									setItems={setCities3}
									style={{
										borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 100
									}}
									onPress={() => {
										Keyboard.dismiss()
									}}
									dropDownDirection="BOTTOM"
									ListEmptyComponent={() => <View />}
								/>
							</React.Fragment>
							:
							<React.Fragment>
								<View style={{ zIndex: 103 }}>
									<DropDownPicker
										open={open1}
										setOpen={setOpen1}
										onOpen={onOpen1}
										value={value1}
										setValue={setValue1}
										placeholder={'???????????? '}
										items={type_use_items}
										setItems={setTypeUseItems}
										onChangeValue={(type_use) => setState({ ...state, type_use })}
										style={{
											borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 103
										}}
										onPress={() => {
											Keyboard.dismiss()
										}}
									/>
								</View>
								<View style={{ zIndex: 102 }}>
									<DropDownPicker
										open={open_city1}
										setOpen={setOpen_city1}
										onOpen={onOpen_city1}
										value={value_city1}
										setValue={setValue_city1}
										placeholder={'??????'}
										items={cities1}
										setItems={setCities1}
										onChangeValue={(area) => {
											setState({ ...state, area })
										}}
										style={{
											borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 102
										}}
										onPress={() => {
											Keyboard.dismiss()
										}}
										dropDownDirection="BOTTOM"
										ListEmptyComponent={() => <View />}
									/>
								</View>
								<View style={{ zIndex: 101 }}>
									<DropDownPicker
										open={open_city2}
										setOpen={setOpen_city2}
										onOpen={onOpen_city2}
										value={value_city2}
										setValue={setValue_city2}
										placeholder={'??????'}
										items={cities2}
										setItems={setCities2}
										onChangeValue={(street) => {
											setState({ ...state, street })
										}}
										style={{
											borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 101
										}}
										onPress={() => {
											Keyboard.dismiss()
										}}
										dropDownDirection="BOTTOM"
										ListEmptyComponent={() => <View />}
									/>
								</View>
								<View style={{ zIndex: 100 }}>
									<DropDownPicker
										open={open_city3}
										setOpen={setOpen_city3}
										onOpen={onOpen_city3}
										value={value_city3}
										setValue={setValue_city3}
										placeholder={'?????? / ??????'}
										items={cities3}
										setItems={setCities3}
										onChangeValue={(building) => {
											setState({ ...state, building })
										}}
										style={{
											borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 100
										}}
										onPress={() => {
											Keyboard.dismiss()
										}}
										dropDownDirection="BOTTOM"
										ListEmptyComponent={() => <View />}
									/>
								</View>
							</React.Fragment>
					}

					<AutoLocInput
						address_text={address_text}
						placeholder={'Google Map ??????'}
						left_icon={<View />}
						onChange={(location, address) => {
							let tmpAddress = {
								latitude: location.latitude,
								longitude: location.longitude,
								street: address.street,
								building: address.building,
								country: address.country,
								city: address.city,
							};
							setGoogleMapPosition(tmpAddress);
						}}
					/>
					<AuthInput
						placeholder={'????????????'}
						underlineColorAndroid={'transparent'}
						keyboardType='decimal-pad'
						selectionColor={Theme.colors.cyan2}
						onChangeText={(construction_size) => setState({ ...state, construction_size })}
						returnKeyType={'next'}
						autoCapitalize={'none'}
						value={state.construction_size}
						secure={false}
						style={{ marginBottom: 12 }}
					/>

					<AuthInput
						placeholder={'???????????? '}
						underlineColorAndroid={'transparent'}
						keyboardType='decimal-pad'
						selectionColor={Theme.colors.cyan2}
						onChangeText={(actual_size) => setState({ ...state, actual_size })}
						returnKeyType={'next'}
						autoCapitalize={'none'}
						value={state.actual_size}
						secure={false}
						style={{ marginBottom: 12 }}
					/>

					{
						Platform.OS == 'android' ?
							<React.Fragment>
								<DropDownPicker
									open={open2}
									setOpen={setOpen2}
									onOpen={onOpen2}
									value={value2}
									setValue={setValue2}
									placeholder={'??????????'}
									items={living_rooms}
									setItems={setLivingRooms}
									onChangeValue={(living_rooms) => {
										setState({ ...state, living_rooms })
									}}
									style={{
										borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 99
									}}
									onPress={() => {
										Keyboard.dismiss()
									}}
									dropDownDirection="BOTTOM"
								/>
								<DropDownPicker
									open={open3}
									setOpen={setOpen3}
									onOpen={onOpen3}
									value={value3}
									setValue={setValue3}
									placeholder={'??????????'}
									items={rooms}
									setItems={setRooms}
									onChangeValue={(rooms) => {
										setState({ ...state, rooms })
									}}
									style={{
										borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 98
									}}
									onPress={() => {
										Keyboard.dismiss()
									}}
									dropDownDirection="BOTTOM"
								/>
								<DropDownPicker
									open={open4}
									setOpen={setOpen4}
									onOpen={onOpen4}
									value={value4}
									setValue={setValue4}
									placeholder={'??????????'}
									items={toilets}
									setItems={setToilets}
									onChangeValue={(toilets) => {
										setState({ ...state, toilets })
									}}
									style={{
										borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 97
									}}
									onPress={() => {
										Keyboard.dismiss()
									}}
									dropDownDirection="BOTTOM"
								/>
								<DropDownPicker
									open={open5}
									setOpen={setOpen5}
									onOpen={onOpen5}
									value={value5}
									setValue={setValue5}
									placeholder={'?????????????'}
									items={room_toilets}
									setItems={setRoomToilets}
									onChangeValue={(room_toilets) => {
										setState({ ...state, room_toilets })
									}}
									style={{
										borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 96
									}}
									onPress={() => {
										Keyboard.dismiss()
									}}
									dropDownDirection="BOTTOM"
								/>
								<DropDownPicker
									open={open6}
									setOpen={setOpen6}
									onOpen={onOpen6}
									value={value6}
									setValue={setValue6}
									placeholder={'????????????????'}
									items={helper_rooms}
									setItems={setHelperRooms}
									onChangeValue={(helper_rooms) => {
										setState({ ...state, helper_rooms })
									}}
									style={{
										borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 95
									}}
									onPress={() => {
										Keyboard.dismiss()
									}}
									dropDownDirection="BOTTOM"
								/>
							</React.Fragment>
							:
							<React.Fragment>
								<View style={{ zIndex: 99 }}>
									<DropDownPicker
										open={open2}
										setOpen={setOpen2}
										onOpen={onOpen2}
										value={value2}
										setValue={setValue2}
										placeholder={'??????????'}
										items={living_rooms}
										setItems={setLivingRooms}
										onChangeValue={(living_rooms) => {
											setState({ ...state, living_rooms })
										}}
										style={{
											borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 99
										}}
										onPress={() => {
											Keyboard.dismiss()
										}}
										dropDownDirection="BOTTOM"
									/>
								</View>
								<View style={{ zIndex: 98 }}>
									<DropDownPicker
										open={open3}
										setOpen={setOpen3}
										onOpen={onOpen3}
										value={value3}
										setValue={setValue3}
										placeholder={'??????????'}
										items={rooms}
										setItems={setRooms}
										onChangeValue={(rooms) => {
											setState({ ...state, rooms })
										}}
										style={{
											borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 98
										}}
										onPress={() => {
											Keyboard.dismiss()
										}}
										dropDownDirection="BOTTOM"
									/>
								</View>
								<View style={{ zIndex: 97 }}>
									<DropDownPicker
										open={open4}
										setOpen={setOpen4}
										onOpen={onOpen4}
										value={value4}
										setValue={setValue4}
										placeholder={'??????????'}
										items={toilets}
										setItems={setToilets}
										onChangeValue={(toilets) => {
											setState({ ...state, toilets })
										}}
										style={{
											borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 97
										}}
										onPress={() => {
											Keyboard.dismiss()
										}}
										dropDownDirection="BOTTOM"
									/>
								</View>
								<View style={{ zIndex: 96 }}>
									<DropDownPicker
										open={open5}
										setOpen={setOpen5}
										onOpen={onOpen5}
										value={value5}
										setValue={setValue5}
										placeholder={'?????????????'}
										items={room_toilets}
										setItems={setRoomToilets}
										onChangeValue={(room_toilets) => {
											setState({ ...state, room_toilets })
										}}
										style={{
											borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 96
										}}
										onPress={() => {
											Keyboard.dismiss()
										}}
										dropDownDirection="BOTTOM"
									/>
								</View>
								<View style={{ zIndex: 95 }}>
									<DropDownPicker
										open={open6}
										setOpen={setOpen6}
										onOpen={onOpen6}
										value={value6}
										setValue={setValue6}
										placeholder={'????????????????'}
										items={helper_rooms}
										setItems={setHelperRooms}
										onChangeValue={(helper_rooms) => {
											setState({ ...state, helper_rooms })
										}}
										style={{
											borderColor: Theme.colors.gray3, marginBottom: 12, zIndex: 95
										}}
										onPress={() => {
											Keyboard.dismiss()
										}}
										dropDownDirection="BOTTOM"
									/>
								</View>
							</React.Fragment>
					}

					<Text style={styles.subjectTitle}>??????</Text>
					<View style={[Theme.styles.row_center_start, { marginTop: 8, marginVertical: 16 }]}>
						<RadioBtn
							checked={state.outer_roof == true}
							onPress={() => {
								Keyboard.dismiss()
								setState({ ...state, outer_roof: (state.outer_roof == true ? false : true) })
							}}
							text='??????'
							style={{ marginRight: 32, marginTop: 12 }}
							textStyle={{ marginLeft: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text }}
						/>
						<RadioBtn
							checked={state.outer_terrace == true}
							onPress={() => {
								Keyboard.dismiss()
								setState({ ...state, outer_terrace: (state.outer_terrace == true ? false : true) })
							}}
							text='??????'
							style={{ marginRight: 32, marginTop: 12 }}
							textStyle={{ marginLeft: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text }}
						/>
					</View>

					<Text style={styles.subjectTitle}>????????????</Text>
					<View style={[Theme.styles.row_center_start, { width: '100%', flexWrap: 'wrap', marginTop: 8, marginVertical: 16 }]}>
						<RadioBtn
							checked={state.include_water_fee == true}
							onPress={() => {
								Keyboard.dismiss()
								setState({ ...state, include_water_fee: (state.include_water_fee == true ? false : true) })
							}}
							text='???'
							style={{ marginRight: 32, marginTop: 20 }}
							textStyle={{ marginLeft: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text }}
						/>
						<RadioBtn
							checked={state.include_electricity_fee == true}
							onPress={() => {
								Keyboard.dismiss()
								setState({ ...state, include_electricity_fee: (state.include_electricity_fee == true ? false : true) })
							}}
							text='???'
							style={{ marginRight: 32, marginTop: 20 }}
							textStyle={{ marginLeft: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text }}
						/>
						<RadioBtn
							checked={state.include_manage_fee == true}
							onPress={() => {
								Keyboard.dismiss()
								setState({ ...state, include_manage_fee: (state.include_manage_fee == true ? false : true) })
							}}
							text='?????????'
							style={{ marginRight: 32, marginTop: 20 }}
							textStyle={{ marginLeft: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text }}
						/>
						<RadioBtn
							checked={state.include_government_fee == true}
							onPress={() => {
								Keyboard.dismiss()
								setState({ ...state, include_government_fee: (state.include_government_fee == true ? false : true) })
							}}
							text='??????'
							style={{ marginRight: 32, marginTop: 20 }}
							textStyle={{ marginLeft: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text }}
						/>
						<RadioBtn
							checked={state.include_government_rent == true}
							onPress={() => {
								Keyboard.dismiss()
								setState({ ...state, include_government_rent: (state.include_government_rent == true ? false : true) })
							}}
							text='??????'
							style={{ marginRight: 32, marginTop: 20 }}
							textStyle={{ marginLeft: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text }}
						/>
					</View>

					<Text style={styles.subjectTitle}>??????</Text>
					<View style={[Theme.styles.row_center_start, { marginTop: 8, marginVertical: 16 }]}>
						<RadioBtn
							checked={state.club_house == true}
							onPress={() => {
								Keyboard.dismiss()
								setState({ ...state, club_house: (state.club_house == true ? false : true) })
							}}
							text='??????'
							style={{ marginRight: 32, marginTop: 12 }}
							textStyle={{ marginLeft: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text }}
						/>
						<RadioBtn
							checked={state.swimming_pool == true}
							onPress={() => {
								Keyboard.dismiss()
								setState({ ...state, swimming_pool: (state.swimming_pool == true ? false : true) })
							}}
							text='??????'
							style={{ marginRight: 32, marginTop: 12 }}
							textStyle={{ marginLeft: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text }}
						/>
						<RadioBtn
							checked={state.car_park == true}
							onPress={() => {
								Keyboard.dismiss()
								setState({ ...state, car_park: (state.car_park == true ? false : true) })
							}}
							text='?????????'
							style={{ marginRight: 32, marginTop: 12 }}
							textStyle={{ marginLeft: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text }}
						/>
					</View>
					<Text style={styles.subjectTitle}>????????????</Text>
					<View style={[Theme.styles.row_center_start, { marginTop: 8, marginVertical: 16 }]}>
						<RadioBtn
							checked={state.is_featured == true}
							onPress={() => {
								Keyboard.dismiss()
								setState({ ...state, is_featured: (state.is_featured == true ? false : true) })
							}}
							text='???'
							style={{ marginRight: 32, marginTop: 12 }}
							textStyle={{ marginLeft: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text }}
						/>
					</View>
					<AuthInput
						placeholder={'???????????? '}
						underlineColorAndroid={'transparent'}
						keyboardType={'default'}
						selectionColor={Theme.colors.cyan2}
						onChangeText={(other) => setState({ ...state, other })}
						returnKeyType={'next'}
						autoCapitalize={'none'}
						value={state.other}
						secure={false}
						textAlignVertical={'top'}
						numberOfLines={4}
						multiline={true}
						style={{ marginTop: 12, marginBottom: 12, minHeight: 70 }}
					/>
					<AuthInput
						placeholder={'??????'}
						underlineColorAndroid={'transparent'}
						keyboardType='decimal-pad'
						selectionColor={Theme.colors.cyan2}
						onChangeText={(price) => setState({ ...state, price })}
						returnKeyType={'next'}
						autoCapitalize={'none'}
						value={state.price}
						secure={false}
						style={{ marginBottom: 12 }}
					/>
					<View style={{ height: 20 }}></View>
				</KeyboardAwareScrollView>
				<View style={{ width: '100%' }}>
					<MainBtn
						disabled={isLoading}
						loading={isLoading}
						style={{ borderRadius: 0, height: 70 }}
						title={'????????????'}
						onPress={onSave}
					/>
				</View>

			</View>
			<ImgPickOptionModal
				showModal={showPickerModal}
				onCapture={onCapture}
				onImageUpload={onImageUpload}
				onClose={() => setShowPickerModal(false)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: Theme.colors.white,
	},
	formView: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
	},
	scrollview: {
		flex: 1, width: '100%', paddingHorizontal: 20
	},
	subjectTitle: { marginTop: 12, fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text },
	applyBtn: { fontSize: 16, fontFamily: Theme.fonts.semiBold, color: Theme.colors.cyan2 },
	categ_view: { height: 47, width: '100%', paddingLeft: 20, borderTopWidth: 1, borderTopColor: '#F6F6F9' },
	categ_txt: { fontSize: 14, fontFamily: Theme.fonts.semiBold, color: '#AAA8BF' },
	listItem: {
		height: 54,
		width: '100%',
		marginBottom: 12,
		borderRadius: 15,
		paddingLeft: 16,
		paddingRight: 16,
		backgroundColor: '#FAFAFC',
	},
	item_txt: { fontSize: 14, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text },

	birthdayView: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#E9E9F7',
		borderRadius: 12,
		height: 50,
		paddingLeft: 12,
		paddingRight: 12,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		marginBottom: 12,
	},
	birthdayTxt: {
		fontSize: 14,
		fontFamily: Theme.fonts.medium,
		flex: 1,
		marginLeft: 4,
	},

	photoView: {
		height: 100,
		width: 100,
		borderWidth: 1,
		borderColor: '#FF7675',
		borderRadius: 50,
	},
	avatarImg: { width: 100, height: 100, borderRadius: 50, position: 'absolute', top: 0, left: 0 },
	modalContent: {
		width: '100%',
		paddingHorizontal: 20,
		paddingBottom: 30,
		paddingTop: 20,
		backgroundColor: Theme.colors.white,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	modalTitle: {
		width: '100%',
		textAlign: 'center',
		fontSize: 16,
		fontFamily: Theme.fonts.bold,
		color: Theme.colors.text,
		marginBottom: 12,
	},
});

const mapStateToProps = ({ app }) => ({
	user: app.user,
	city1_list: app.city1_list,
	city2_list: app.city2_list,
	city3_list: app.city3_list,
});

export default connect(mapStateToProps, {
	updateProfileDetails,
})(AddListingScreen);
