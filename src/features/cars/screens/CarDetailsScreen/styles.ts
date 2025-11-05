import { StyleSheet } from "react-native";

import { AppColors } from '../../../../constant/AppColors';

export default  StyleSheet.create({
  container: { flex: 1, backgroundColor: AppColors.secondary},
  image: { width: 350, height: 200, borderRadius: 10, margin: 10 },
  details: { padding: 16 },
  name: { fontSize: 22, fontWeight: 'bold' },
  brand: { fontSize: 16, color: AppColors.gray, marginVertical: 8 },
  price: { fontSize: 20, color: AppColors.primary, fontWeight: '600' },
  description: { marginVertical: 16, fontSize: 16, color: AppColors.gray },
  colorsContainer: { marginTop: 12 },
  colorsTitle: { fontSize: 16, fontWeight: 'bold' },
  colorList: { flexDirection: 'row', marginTop: 8 },
  header:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
marginBottom:10,
  },
  colorDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: AppColors.gray,
  },
  imageStyle:{
    height: 250,
  },
  bookButton:{
    position:'absolute',
    bottom:50,
    alignSelf:'center',
    backgroundColor:AppColors.primary,
    paddingVertical:12,
    paddingHorizontal:32,
    borderRadius:8,
    width:'90%',
    alignItems:'center',
  }
});