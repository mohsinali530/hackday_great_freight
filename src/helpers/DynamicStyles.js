import { Dimensions, StyleSheet } from 'react-native';
import { FontFamily, Color, FontSize, Border, Padding } from "../../GlobalStyles";
const { width, height } = Dimensions.get('window');

const DynamicStyles = StyleSheet.create({
  component4Layout: {
    width: "100%",
    right: "0%",
  },
  textTypo: {
    fontFamily: FontFamily.button2,
    fontWeight: "600",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  capIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  frameChildLayout: {
    width: width * 0.075, // 7.5% of screen width
    height: width * 0.075, // 7.5% of screen width
  },
  textText: {
    color: Color.blacks,
    textTransform: "capitalize",
    textAlign: "left",
  },
  rectanglePosition: {
    height: height * 0.375, // 37.5% of screen height
    left: "0%",
    position: "absolute",
  },
  groupPosition: {
    height: height * 0.5333, // 53.33% of screen height
    left: "0%",
    position: "absolute",
  },
  billedTypo: {
    opacity: 0.6,
    fontSize: FontSize.bodySmall_size,
    color: Color.blacks,
    fontFamily: FontFamily.header2,
    textTransform: "capitalize",
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  groupChildPosition1: {
    height: height * 0.013, // 1.3% of screen height
    top: 0,
    position: "absolute",
  },
  groupWrapperPosition: {
    top: "44.93%",
    height: "55.07%",
    bottom: "0%",
    position: "absolute",
  },
  borderPosition: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    top: "0%",
  },
  groupChildPosition: {
    bottom: "68.42%",
    top: "10.53%",
    height: "21.05%",
    backgroundColor: Color.colorGray_100,
    left: "0%",
    position: "absolute",
  },
  parentFlexBox: {
    width: width * 0.9, // 90% of screen width
    flexDirection: "row",
    alignItems: "center",
  },
  invoicesTypo: {
    textAlign: "right",
    color: Color.colorDarkslategray_200,
    textTransform: "capitalize",
    fontSize: FontSize.header2_size,
  },
  vectorIconPosition: {
    top: height * 0.114, // 11.4% of screen height
    maxHeight: "100%",
    position: "absolute",
  },
  checkboxFlexBox: {
    justifyContent: "center",
    borderRadius: Border.br_11xs,
    alignItems: "center",
    backgroundColor: Color.neutral1,
  },
  bgLayout: {
    height: width * 0.16, // 16% of screen width
    width: width * 0.16, // 16% of screen width
  },
  frameLayout: {
    width: width * 0.822, // 82.2% of screen width
    flexDirection: "row",
  },
  dueDateTypo: {
    fontFamily: FontFamily.bodyTiny,
    fontWeight: "500",
    textAlign: "left",
  },
  overDueTypo: {
    lineHeight: width * 0.16, // 16% of screen width
    fontFamily: FontFamily.bodyTiny,
    fontWeight: "500",
    fontSize: FontSize.bodySmall_size,
  },
  wrapperBorder: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_5xs,
    borderColor: Color.colorGainsboro_200,
    justifyContent: "center",
    borderRadius: Border.br_11xs,
    height: width * 0.24, // 24% of screen width
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.neutral1,
  },
  feb2023Clr: {
    color: Color.grey,
    textAlign: "left",
  },
  depositBorder: {
    padding: Padding.p_xs,
    borderColor: Color.colorGainsboro_100,
    borderRadius: Border.br_9xs,
    width: width * 0.9, // 90% of screen width
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    backgroundColor: Color.neutral1,
  },
  time: {
    marginTop: -height * 0.01, // -1% of screen height
    width: width * 1.2, // 120% of screen width
    letterSpacing: 0,
    lineHeight: width * 0.2, // 20% of screen width
    color: Color.colorDarkslategray_100,
    display: "flex",
    height: width * 0.2, // 20% of screen width
    alignItems: "center",
    textAlign: "left",
    fontSize: FontSize.button2_size,
    top: "50%",
    position: "absolute",
    left: "0%",
  },
  timeStyle: {
    height: height * 0.3333, // 33.33% of screen height
    width: width * 0.0833, // 8.33% of screen width
    top: height * 0.4333, // 43.33% of screen height
    right: width * 0.8667, // 86.67% of screen width
    bottom: height * 0.2333, // 23.33% of screen height
    left: width * 0.05, // 5% of screen width
    position: "absolute",
  },
  cellularConnectionIcon: {
    height: width * 0.15, // 15% of screen width
    width: width * 0.16, // 16% of screen width
  },
  wifiIcon: {
    width: width * 0.15, // 15% of screen width
    height: width * 0.11, // 11% of screen width
    marginLeft: width * 0.0167, // 1.67% of screen width
  },
  border: {
    width: width * 0.9041, // 90.41% of screen width
    right: width * 0.0959, // 9.59% of screen width
    borderRadius: 3,
    borderColor: Color.colorDarkslategray_100,
    opacity: 0.35,
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
  },
  capIcon: {
    height: height * 0.3564, // 35.64% of screen height
    width: width * 0.0548, // 5.48% of screen width
    top: height * 0.3267, // 32.67% of screen height
    bottom: height * 0.3168, // 31.68% of screen height
    left: width * 0.9452, // 94.52% of screen width
    opacity: 0.4,
    right: "0%",
  },
  capacity: {
    height: height * 0.6535, // 65.35% of screen height
    width: width * 0.7397, // 73.97% of screen width
    top: height * 0.1782, // 17.82% of screen height
    right: width * 0.1781, // 17.81% of screen width
    bottom: height * 0.1683, // 16.83% of screen height
    left: width * 0.0822, // 8.22% of screen width
    borderRadius: 1,
    backgroundColor: Color.colorDarkslategray_100,
    position: "absolute",
  },
  battery: {
    width: width * 0.0611, // 6.11% of screen width
    height: width * 0.0278, // 2.78% of screen width
    marginLeft: width * 0.0167, // 1.67% of screen width
  },
  cellularConnectionParent: {
    top: height * 0.008, // 0.8% of screen height
    left: width * 0.7694, // 76.94% of screen width
    alignItems: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  statusBar: {
    height: height * 0.0305, // 3.05% of screen height
    bottom: height * 0.9695, // 96.95% of screen height
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    backgroundColor: Color.neutral1,
  },
  component4Child: {
    height: height * 0.9796, // 97.96% of screen height
    bottom: height * 0.0204, // 2.04% of screen height
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    backgroundColor: Color.neutral1,
  },
  component4Item: {
    height: height * 0.0204, // 2.04% of screen height
    top: height * 0.9796, // 97.96% of screen height
    backgroundColor: Color.backgroundGrey,
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  arrowLeftIcon: {
    height: width * 0.24, // 24% of screen width
    overflow: "hidden",
  },
  accountDetails: {
    opacity: 0.9,
    marginLeft: width * 0.0278, // 2.78% of screen width
    fontFamily: FontFamily.header2,
    fontSize: FontSize.header2_size,
  },
  arrowLeftParent: {
    marginTop: -height * 0.0125, // -1.25% of screen height
    left: width * 0.05, // 5% of screen width
    flexDirection: "row",
    alignItems: "center",
  },
  component4: {
    height: height * 0.0498, // 4.98% of screen height
    top: height * 0.0305, // 3.05% of screen height
    bottom: height * 0.9197, // 91.97% of screen height
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  groupChild: {
    width: width * 0.3589, // 35.89% of screen width
    right: width * 0.6411, // 64.11% of screen width
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
  },
  groupItem: {
    width: width * 0.053, // 5.3% of screen width
    top: height * 0.2, // 20% of screen height
    right: width * 0.947, // 94.7% of screen width
    bottom: height * 0.2667, // 26.67% of screen height
    backgroundColor: Color.colorLightcoral,
  },
  overdue: {
    left: width * 0.0795, // 7.95% of screen width
  },
  text: {
    left: width * 0.6821, // 68.21% of screen width
    fontSize: FontSize.bodySmall_size,
    fontFamily: FontFamily.button2,
    fontWeight: "600",
    top: "0%",
    position: "absolute",
  },
  rectangleParent: {
    width: width * 0.9321, // 93.21% of screen width
    right: width * 0.0679, // 6.79% of screen width
    bottom: height * 0.625, // 62.5% of screen height
    top: "0%",
  },
  groupInner: {
    width: width * 0.0494, // 4.94% of screen width
    top: height * 0.2667, // 26.67% of screen height
    right: width * 0.9506, // 95.06% of screen width
    bottom: height * 0.2, // 20% of screen height
    backgroundColor: Color.colorGray_100,
  },
  unpaid: {
    left: width * 0.0741, // 7.41% of screen width
  },
  text1: {
    left: width * 0.6358, // 63.58% of screen width
    fontSize: FontSize.bodySmall_size,
    fontFamily: FontFamily.button2,
    fontWeight: "600",
    top: "0%",
    position: "absolute",
  },
  rectangleGroup: {
    top: height * 0.625, // 62.5% of screen height
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  groupContainer: {
    height: height * 0.3883, // 38.83% of screen height
    width: width * 0.5645, // 56.45% of screen width
    top: height * 0.3107, // 31.07% of screen height
    bottom: height * 0.301, // 30.1% of screen height
    left: width * 0.4355, // 43.55% of screen width
    right: "0%",
    position: "absolute",
  },
  groupParent: {
    height: height * 0.1047, // 10.47% of screen height
    width: width * 0.7972, // 79.72% of screen width
    top: height * 0.1026, // 10.26% of screen height
    right: width * 0.1028, // 10.28% of screen width
    bottom: height * 0.7927, // 79.27% of screen height
    left: width * 0.1, // 10% of screen width
    position: "absolute",
  },
  rectangleView: {
    width: width * 0.6667, // 66.67% of screen width
    left: 0,
    backgroundColor: Color.colorGray_100,
  },
  groupChild1: {
    left: width * 0.45, // 45% of screen width
    backgroundColor: Color.colorDarkgray,
    width: width * 0.78, // 78% of screen width
  },
  groupChild2: {
    left: width * 0.6667, // 66.67% of screen width
    backgroundColor: "#d5d5d5",
    width: width * 0.47, // 47% of screen width
  },
  rectangleContainer: {
    left: 0,
    width: width * 0.7967, // 79.67% of screen width
  },
  groupChild3: {
    width: width * 0.1356, // 13.56% of screen width
    right: width * 0.8644, // 86.44% of screen width
  },
  billed: {
    left: width * 0.2034, // 20.34% of screen width
  },
  text2: {
    top: height * 0.6053, // 60.53% of screen height
    fontSize: FontSize.bodySmall_size,
    fontFamily: FontFamily.button2,
    fontWeight: "600",
    left: "0%",
    position: "absolute",
  },
  rectangleParent1: {
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  groupWrapper: {
    width: width * 0.2056, // 20.56% of screen width
    right: width * 0.7944, // 79.44% of screen width
    left: "0%",
  },
  groupChild4: {
    width: width * 0.127, // 12.7% of screen width
    right: width * 0.873, // 87.3% of screen width
  },
  unBilled: {
    left: width * 0.1905, // 19.05% of screen width
  },
  groupFrame: {
    width: width * 0.2195, // 21.95% of screen width
    right: width * 0.4268, // 42.68% of screen width
    left: width * 0.3537, // 35.37% of screen width
  },
  groupChild5: {
    width: width * 0.125, // 12.5% of screen width
    right: width * 0.875, // 87.5% of screen width
  },
  totalOs: {
    left: width * 0.1875, // 18.75% of screen width
  },
  groupWrapper1: {
    width: width * 0.223, // 22.3% of screen width
    left: width * 0.777, // 77.7% of screen width
    right: "0%",
  },
  groupView: {
    top: height * 0.226, // 22.6% of screen height
    left: width * 0.37, // 37% of screen width
    height: height * 0.069, // 6.9% of screen height
    width: width * 0.7967, // 79.67% of screen width
    position: "absolute",
  },
  invoices: {
    fontFamily: FontFamily.button2,
    fontWeight: "600",
  },
  activity1: {
    fontFamily: FontFamily.header2,
  },
  activity: {
    marginLeft: width * 0.0444, // 4.44% of screen width
  },
  shipments: {
    fontFamily: FontFamily.header2,
  },
  buttonLayout: {
    top: height * 0.8766, // 87.66% of screen height
    width: "100%",
    position: "absolute",
    bottom: "0%",
  },
  buttonIcon: {
    bottom: height * 0.0521, // 5.21% of screen height
    left: width * 0.0494, // 4.94% of screen width
    position: "absolute",
    right: "0%",
    top: "0%",
  },
  buttonContent: {
    height: height * 0.0685, // 6.85% of screen height
    width: "100%",
    borderRadius: Border.br_2xs,
    position: "absolute",
    bottom: height * 0.0521, // 5.21% of screen height
    backgroundColor: Color.colorDarksalmon_100,
  },
  logout: {
    fontFamily: FontFamily.button2,
    fontWeight: "600",
    color: Color.colorBlack_100,
    textAlign: "center",
  },
  shadow: {
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default DynamicStyles;
