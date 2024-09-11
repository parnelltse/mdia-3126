import { Text, View } from "react-native";
import InputForm from "@/components/molecules/InputForm";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputForm 
        textForLabel="peepeepoopoo"
        textForButton="geh"
        textForPlaceholder="poopypants"
      />
    </View>
  );
}

