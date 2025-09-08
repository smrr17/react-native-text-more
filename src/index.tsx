import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

interface Props {
  data?: string[];
  containerStyle?: View["props"]["style"];
  displayTextStyle?: Text["props"]["style"];
  remainingCountStyle?: Text["props"]["style"];
}

const TextMore = ({
  data,
  containerStyle,
  displayTextStyle,
  remainingCountStyle,
}: Props) => {
  const productNames = data;

  console.log("productNames", productNames);
  const [displayText, setDisplayText] = useState("");
  const [remainingCount, setRemainingCount] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const onLayout = (event: any) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  useEffect(() => {
    if (containerWidth <= 0) return;
    calculateDisplayText();
  }, [productNames, containerWidth]);

  const calculateDisplayText = () => {
    if (!productNames?.length) {
      setDisplayText("");
      setRemainingCount(0);
      return;
    }

    const averageCharWidth = 4.8;
    const ellipsisWidth = 8 * averageCharWidth;

    let currentWidth = 0;
    let visibleCount = 0;

    for (let i = 0; i < productNames.length; i++) {
      const name = productNames[i];
      const separatorWidth = i > 0 ? 2 * averageCharWidth : 0;
      const nameWidth = name.length * averageCharWidth;

      if (
        currentWidth + separatorWidth + nameWidth + ellipsisWidth <=
        containerWidth
      ) {
        currentWidth += separatorWidth + nameWidth;
        visibleCount++;
      } else {
        break;
      }
    }

    if (visibleCount < productNames.length) {
      setDisplayText(productNames.slice(0, visibleCount).join(", "));
      setRemainingCount(productNames.length - visibleCount);
    } else {
      setDisplayText(productNames.join(", "));
      setRemainingCount(0);
    }
  };

  return (
    <View
      style={[
        styles.moretext,
        {
          width: containerWidth,
        },
        containerStyle,
      ]}
      onLayout={onLayout}
    >
      <Text numberOfLines={1} style={[styles.text, displayTextStyle]}>
        {displayText}
      </Text>
      {remainingCount > 0 && (
        <Text style={[styles.remainingtext, remainingCountStyle]}>
          +{remainingCount} more
        </Text>
      )}
    </View>
  );
};

export default TextMore;

const styles = StyleSheet.create({
  remainingtext: {
    color: "black",
    textAlign: "right",
    flexShrink: 1,
    fontSize: 9,
  },
  moretext: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 11,
  },
});
