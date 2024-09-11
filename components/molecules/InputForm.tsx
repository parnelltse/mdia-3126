import { View, TextInput } from "react-native"
import Button from "@/components/atoms/Button"
import Label from "@/components/atoms/Label"

export default function InputForm({ textForLabel, textForButton, textForPlaceholder}){
    return(
        <View
        style={{
            flexDirection: "row",
            gap:10,
            alignItems: "center"
        }}>
            <Label labelText={textForLabel} />
            <TextInput defaultValue={textForPlaceholder} />
            <Button buttonText={textForButton} />
        </View>
    )
}

