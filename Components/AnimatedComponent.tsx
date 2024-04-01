import React from 'react';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  withSequence,
  withRepeat,
  Easing,
  ReduceMotion,
} from 'react-native-reanimated';
import {Button} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const AnimatedComponent = () => {
  const circleValues = useSharedValue({cx: 200, cy: 100});
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const handleAnimate = () => {
    circleValues.value = withSequence(
      withTiming(
        {
          cx: 270,
          cy: 100,
        },
        {duration: 870, easing: Easing.exp, reduceMotion: ReduceMotion.System},
      ),
      withRepeat(withTiming({cx: 250, cy: 125}, {duration: 500}), 5, true),
    );
  };
  const animatedProps = useAnimatedProps(() => {
    return {
      cx: circleValues.value.cx,
      cy: circleValues.value.cy,
    };
  });
  return (
    <>
      <Svg width={400} height={200}>
        <AnimatedCircle
          cx={circleValues.value.cx}
          cy={circleValues.value.cy}
          r={10}
          fill="white"
          stroke="#000"
          animatedProps={animatedProps}
        />
      </Svg>
      <Button title="Animate" onPress={handleAnimate} />
    </>
  );
};

export default AnimatedComponent;
