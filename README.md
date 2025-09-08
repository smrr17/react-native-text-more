# @smrr17/react-native-text-more

A lightweight React Native component that **truncates a list of strings** into a single line and shows a `+N more` indicator when the content exceeds available space.  

Ideal for displaying product names, tags, or labels in a compact and user-friendly way.  

---

## ✨ Features

- 📏 Auto-calculates how many items can fit in the container width.  
- ➕ Shows `+N more` for hidden items.  
- 🎨 Fully customizable styles (`containerStyle`, `displayTextStyle`, `remainingCountStyle`).  
- ⚡ Written in TypeScript with type definitions.  
- ✅ Supports React Native `0.72+` and React `18+`.  

---

## 📦 Installation

```sh
npm install @smrr17/react-native-text-more
# or
yarn add @smrr17/react-native-text-more
```

---

## 🚀 Usage

```tsx
import React from "react";
import { View } from "react-native";
import TextMore from "@smrr17/react-native-text-more";

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      <TextMore
        data={[
          "pain",
          "gain",
          "rain",
          "train",
          "brain",
          "drain",
          "strain",
          "complain",
          "sustain",
          "maintain",
          "detain",
          "attain",
          "explain",
          "refrain",
          "campaign",
          "terrain",
          "curtain",
          "mountain",
          "fountain",
          "curtain",
        ]}
        containerStyle={{
          backgroundColor: "#f9f9f9",
          padding: 8,
          borderRadius: 6,
        }}
        displayTextStyle={{
          color: "blue",
          fontSize: 14,
        }}
        remainingCountStyle={{
          color: "red",
          fontSize: 14,
        }}
      />
    </View>
  );
}
```

---

## 📖 Props

| Prop                 | Type                    | Default   | Description |
|----------------------|-------------------------|-----------|-------------|
| `data`               | `string[]`              | `[]`      | Array of strings to display (e.g., product names). |
| `containerStyle`     | `ViewStyle`             | `undefined` | Custom styles for the outer container `<View>`. |
| `displayTextStyle`   | `TextStyle`             | `undefined` | Styles applied to the displayed (visible) text. |
| `remainingCountStyle`| `TextStyle`             | `undefined` | Styles applied to the `+N more` text. |

---

## 🛠 How It Works

1. The component measures its container width via `onLayout`.  
2. It estimates text widths based on an average character width (`4.8`).  
3. It fits as many items as possible into the available width.  
4. If not all items fit, it displays the visible items followed by `+N more`.  

---

## 📷 Example Output

If you pass:  

```js
["pain", "gain", "rain", "train", "brain", "drain"]
```

And the container is narrow, you might see:  

```
pain, gain, rain +3 more
```

---

## 📄 License

MIT © [Shahmeer Ahmed](https://github.com/smrr17)  

---

## 🔗 Repository

[GitHub – smrr17/react-native-text-more](https://github.com/smrr17/react-native-text-more)
