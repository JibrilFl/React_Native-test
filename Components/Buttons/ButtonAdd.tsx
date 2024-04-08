import styled from "styled-components/native";
import {Alert} from "react-native";

const Pressable= styled.Pressable`
  backgroundColor: red;
  color: blueviolet;
  width: 32px;
  height: 32px;
  borderRadius: 100%;
`;

export default ButtonAdd = ({title}) => {
    return (
        <Pressable onPress={() => alert('Simple Button pressed')}>
        </Pressable>
    )
};