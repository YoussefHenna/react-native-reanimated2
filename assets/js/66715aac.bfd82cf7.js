"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[3049],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=d(a),p=i,c=h["".concat(s,".").concat(p)]||h[p]||m[p]||r;return a?n.createElement(c,o(o({ref:t},u),{},{components:a})):n.createElement(c,o({ref:t},u))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6261:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var n=a(3117),i=(a(7294),a(3905));const r={id:"shared-values",title:"Shared Values",sidebar_label:"Shared Values"},o=void 0,l={unversionedId:"fundamentals/shared-values",id:"fundamentals/shared-values",title:"Shared Values",description:"Shared Values are among fundamental concepts behind Reanimated 2.0.",source:"@site/docs/fundamentals/shared-values.md",sourceDirName:"fundamentals",slug:"/fundamentals/shared-values",permalink:"/react-native-reanimated/docs/next/fundamentals/shared-values",draft:!1,tags:[],version:"current",frontMatter:{id:"shared-values",title:"Shared Values",sidebar_label:"Shared Values"},sidebar:"docs",previous:{title:"Worklets",permalink:"/react-native-reanimated/docs/next/fundamentals/worklets"},next:{title:"Animations",permalink:"/react-native-reanimated/docs/next/fundamentals/animations"}},s={},d=[{value:"Carrying data",id:"carrying-data",level:2},{value:"Reactiveness with Shared Values",id:"reactiveness-with-shared-values",level:2},{value:"Driving animations",id:"driving-animations",level:2},{value:"Animation progress",id:"animation-progress",level:3},{value:"Interrupting animations",id:"interrupting-animations",level:3},{value:"Cancelling animations",id:"cancelling-animations",level:3},{value:"Shared Values vs Animated.Value",id:"shared-values-vs-animatedvalue",level:2}],u={toc:d};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Shared Values are among fundamental concepts behind Reanimated 2.0.\nIf you are familiar with React Native's ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/animated"},"Animated API")," you can compare them to ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated.Values"),'.\nThey serve a similar purpose of carrying "animateable" data, providing a notion of reactiveness, and driving animations.\nWe will discuss each of those key roles of Shared Values in sections below.\nAt the end we present a brief overview of the differences between Shared Values and ',(0,i.kt)("inlineCode",{parentName:"p"},"Animated.Value")," for the readers familiar with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated")," API."),(0,i.kt)("h2",{id:"carrying-data"},"Carrying data"),(0,i.kt)("p",null,"One of the primary goals of Shared Values (hence their name) is to provide a notion of shared memory in Reanimated 2.0.\nAs you might've learned in the article about ",(0,i.kt)("a",{parentName:"p",href:"worklets"},"worklets"),", Reanimated 2.0 runs animation code in a separate thread using a separate JS VM context.\nShared Values makes it possible to maintain a reference to a mutable data that can be read and modified securely across those threads."),(0,i.kt)("p",null,"Shared Value objects serve as references to pieces of shared data that can be accessed and modified using their ",(0,i.kt)("inlineCode",{parentName:"p"},".value")," property.\nIt is important to remember that whether you want to access or update shared data, you should use ",(0,i.kt)("inlineCode",{parentName:"p"},".value")," property (one of the most common source of mistakes in Reanimated 2 code, is to expect the Shared Value reference to return the data instead of accessing ",(0,i.kt)("inlineCode",{parentName:"p"},".value")," property of it)."),(0,i.kt)("p",null,"In order to provide secure and fast ways of accessing shared data across two threads, we had to make some tradeoffs when designing Shared Values.\nAs, during animations, updates most of the time happen on the UI thread, Shared Values are optimized to be updated and read from the UI thread.\nHence, read and writes done from the UI thread are all synchronous, which means that when running from a worklet on the UI thread, you can update the value and expect it to be updated immediately after that call.\nThe consequence of this choice is that updates made on the React Native JS thread are all asynchronous.\nInstead of those updates being immediate in such case, Reanimated core schedules the update to be performed on the UI thread, this way preventing any concurrency issues.\nWhen accessing and updating Shared Values from the React Native JS thread, it is best to think about it as if the value worked the same way as React's state.\nWe can make updates to the state, but the updates are not immediate, and in order to read the data we need to wait till the next re-render."),(0,i.kt)("p",null,"In order to create a Shared Value reference, you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"useSharedValue")," hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const sharedVal = useSharedValue(3.1415);\n")),(0,i.kt)("p",null,"The Shared Value constructor hook takes a single argument which is the initial payload of the Shared Value.\nThis can be any primitive or nested data like object, array, number, string or boolean."),(0,i.kt)("p",null,"In order to update Shared Value from the React Native thread or from a worklet running on the UI thread, you should set a new value onto the ",(0,i.kt)("inlineCode",{parentName:"p"},".value")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4,7}","{4,7}":!0},"import { useSharedValue } from 'react-native-reanimated';\n\nfunction SomeComponent() {\n  const sharedVal = useSharedValue(0);\n  return (\n    <Button\n      onPress={() => (sharedVal.value = Math.random())}\n      title=\"Randomize\"\n    />\n  );\n}\n")),(0,i.kt)("p",null,"In the above example we update value asynchronously from the React Native JS thread.\nUpdates can be done synchronously when making them from within a worklet, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{5,9}","{5,9}":!0},"import Animated, {\n  useSharedValue,\n  useAnimatedScrollHandler,\n} from 'react-native-reanimated';\n\nfunction SomeComponent({ children }) {\n  const scrollOffset = useSharedValue(0);\n\n  const scrollHandler = useAnimatedScrollHandler({\n    onScroll: (event) => {\n      scrollOffset.value = event.contentOffset.y;\n    },\n  });\n\n  return (\n    <Animated.ScrollView onScroll={scrollHandler}>\n      {children}\n    </Animated.ScrollView>\n  );\n}\n")),(0,i.kt)("p",null,"Above, the scroll handler is a worklet and runs the scroll event logic on the UI thread.\nUpdates made in that worklets are synchronous."),(0,i.kt)("h2",{id:"reactiveness-with-shared-values"},"Reactiveness with Shared Values"),(0,i.kt)("p",null,"Second most important aspect of Shared Values is that they provide a notion of reactiveness to Reanimated framework.\nBy that, we mean that updates made to Shared Values can trigger corresponding code execution on the UI thread, that can further result in starting animations, view updates, etc."),(0,i.kt)("p",null,'The reactiveness layer has been designed to be fully transparent from the developer perspective.\nIt is based on the concept of Shared Values being captured by reactive worklets (called internally "mapper worklets").'),(0,i.kt)("p",null,"Currently, there are two ways how you can create a reactive worklet.\nThis can be done either by using ",(0,i.kt)("a",{parentName:"p",href:"../api/hooks/useAnimatedStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle"))," or ",(0,i.kt)("a",{parentName:"p",href:"../api/hooks/useDerivedValue"},(0,i.kt)("inlineCode",{parentName:"a"},"useDerivedValue"))," hooks.\nWhen a Shared Value is captured by a worklet provided to these hooks, the worklet will re-run upon the Shared Value change.\nUnder the hood, Reanimated engine builds a graph of dependencies between Shared Values and reactive worklets that allows us to only execute the code that needs to update and to make sure updates are done in the correct order.\nFor example, when we have a Shared Value ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", a derived value ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", and an animated style that uses both ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),", we only re-run the derived value worklet when ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," updates.\nIn such a case, we will also always run the derived value ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," updater first prior to running the animated style updater, because the style depends on it."),(0,i.kt)("p",null,"Let us look now at an example code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4,8,15}","{4,8,15}":!0},"import Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\nfunction Box() {\n  const offset = useSharedValue(0);\n\n  const animatedStyles = useAnimatedStyle(() => {\n    return {\n      transform: [{ translateX: offset.value }],\n    };\n  });\n\n  return (\n    <>\n      <Animated.View style={[styles.box, animatedStyles]} />\n      <Button onPress={() => (offset.value = Math.random() * 255)} title=\"Move\" />\n    </>\n  );\n}\n")),(0,i.kt)("p",null,"In the above code, we define ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," Shared Value which is used inside ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," reactive worklet.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," Shared Value is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," initially, and we added a button that updates the value using ",(0,i.kt)("inlineCode",{parentName:"p"},"Math.random()"),".\nThis way each time we press on the button, the ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," will update to a random value from ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),".\nSince animated style worklets are reactive, and in our case they depend on a single ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," Shared Variable, the worklet won't be executed except from the initial run, or unless the value is updated.\nUpon the button press, and when the value updates, Reanimated core will execute dependent worklets.\nIn our case that'd be our animated style worklet.\nAs a result, the worklet will re-execute causing the style to be updated.\nSince in ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," we take ",(0,i.kt)("inlineCode",{parentName:"p"},"offset"),"'s value, multiply it by ",(0,i.kt)("inlineCode",{parentName:"p"},"255")," and map that to the x-translation of the view, the view will immediately be shifted to a new location that is from ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"255")," pixels far from the initial view position.\nThis is what you will observe:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(510).Z,width:"640",height:"533"})),(0,i.kt)("h2",{id:"driving-animations"},"Driving animations"),(0,i.kt)("p",null,"Animations in Reanimated 2 are first-class citizens, and the library comes bundled with a number of utility methods that help you run and customize animations (refer to the section about ",(0,i.kt)("a",{parentName:"p",href:"animations"},"animations")," to learn about the APIs in Reanimated 2 for controlling animations).\nOne of the ways for animation to be launched is by starting an animated transition of a Shared Value.\nThis can be done by wrapping target value with one of the animation utility methods from reanimated library (e.g. ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withTiming"},(0,i.kt)("inlineCode",{parentName:"a"},"withTiming"))," or ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withSpring"},(0,i.kt)("inlineCode",{parentName:"a"},"withSpring")),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { withTiming } from 'react-native-reanimated';\n\nsomeSharedValue.value = withTiming(50);\n")),(0,i.kt)("p",null,"In the above code the ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," Shared Value instead of being set to ",(0,i.kt)("inlineCode",{parentName:"p"},"50")," immediately, will transition from the current value to ",(0,i.kt)("inlineCode",{parentName:"p"},"50")," using time-based animation.\nOf course, launching animation this way can be done both from the UI and from the React-Native JS thread.\nBelow is a complete code example which is the modified version of the example from the previous section.\nHere, instead of updating ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," value immediately, we perform an animated transition with a timing curve."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{17}","{17}":!0},"import Animated, { withSpring } from 'react-native-reanimated';\n\nfunction Box() {\n  const offset = useSharedValue(0);\n\n  const animatedStyles = useAnimatedStyle(() => {\n    return {\n      transform: [{ translateX: offset.value }],\n    };\n  });\n\n  return (\n    <>\n      <Animated.View style={[styles.box, animatedStyles]} />\n      <Button\n        onPress={() => {\n          offset.value = withSpring(Math.random() * 255);\n        }}\n        title=\"Move\"\n      />\n    </>\n  );\n}\n")),(0,i.kt)("p",null,"The only change we made in the above code compared to the example from the previous section, is that we wrapped ",(0,i.kt)("inlineCode",{parentName:"p"},"Math.random()")," call that updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"withSpring")," call.\nAs a result, the updates to the view's translation will be smooth:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5106).Z,width:"640",height:"533"})),(0,i.kt)("p",null,"If you want to learn how to customize animations or get notified when the animation is finished check the API of animation method you want to use, e.g., ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withTiming"},(0,i.kt)("inlineCode",{parentName:"a"},"withTiming"))," or ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withSpring"},(0,i.kt)("inlineCode",{parentName:"a"},"withSpring")),"."),(0,i.kt)("h3",{id:"animation-progress"},"Animation progress"),(0,i.kt)("p",null,"In order to retrieve the current state of the animated transition started on a Shared Value we can access the ",(0,i.kt)("inlineCode",{parentName:"p"},".value")," property of the Shared Value.\nAfter the Shared Value transition is started, the ",(0,i.kt)("inlineCode",{parentName:"p"},".value")," property will be in sync with the animation progress.\nThat is, when the initial value is ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and we start animated transition using ",(0,i.kt)("inlineCode",{parentName:"p"},"withTiming(50)")," that will take 300ms, we should expect the reads of ",(0,i.kt)("inlineCode",{parentName:"p"},".value")," property to return a number from ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"50")," that will correspond to the current position of the value as the animation progresses."),(0,i.kt)("h3",{id:"interrupting-animations"},"Interrupting animations"),(0,i.kt)("p",null,"Thanks to the fact that Shared Values keep the state of their animated transition, we can make all animations fully interruptible.\nThis means that you can make updates to the Shared Value even if it is currently running the animation without worrying that this will cause an unexpected and sudden animation glitch.\nOverwriting the value in such a case will result in the previous animation being interrupted.\nIf the newly assigned value is a number (or anything static), that new value will be immediately assigned to the Shared Value, and the previously running animation will be cancelled.\nIn case the newly assigned value is also an animation, the previously running animation will smoothly transition into a new one.\nAnimation parameters such as velocity will transfer as well, which is particularly important in spring-based animations.\nThis allows to achieve a really smooth transform from one animation into another.\nThis behavior is demonstrated on the clip below where we just do more frequent taps on the button such that the new animation starts while the previous one is still running (there are no code changes compared to the previous example)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1152).Z,width:"640",height:"533"})),(0,i.kt)("h3",{id:"cancelling-animations"},"Cancelling animations"),(0,i.kt)("p",null,"There are cases in which we want to stop the currently running animation without starting a new one.\nIn reanimated, this can be done using ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/cancelAnimation"},(0,i.kt)("inlineCode",{parentName:"a"},"cancelAnimation"))," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { cancelAnimation } from 'react-native-reanimated';\n\ncancelAnimation(someSharedValue);\n")),(0,i.kt)("p",null,"Animations can be cancelled both from the UI and from React Native's JS thread."),(0,i.kt)("h2",{id:"shared-values-vs-animatedvalue"},"Shared Values vs Animated.Value"),(0,i.kt)("p",null,"In this section we present a short summary of the differences between Shared Values and Animated.Values.\nThe goal of this comparison is not to point out weaknesses of one solution over the other, but to provide a condensed reference for people familiar with ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated"),".\nIf you are confused about some aspects of Shared Values and expect them to work similarly to Animated Values please let us know and we will add that to the list."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"What"),(0,i.kt)("th",{parentName:"tr",align:null},"Animated Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Shared Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Payload"),(0,i.kt)("td",{parentName:"tr",align:null},"Only numeric and string values are supported"),(0,i.kt)("td",{parentName:"tr",align:null},"Any primitive or nested data structure (like objects, arrays, strings, numbers, booleans).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Connecting with View's props"),(0,i.kt)("td",{parentName:"tr",align:null},"By passing ",(0,i.kt)("inlineCode",{parentName:"td"},"Animated.Value")," directly as a prop"),(0,i.kt)("td",{parentName:"tr",align:null},"Shared Values cannot be directly hooked as View's props. You should use ",(0,i.kt)("inlineCode",{parentName:"td"},"useAnimatedStyle")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"useAnimatedProps")," where you can access Shared Values and return them as selected styles/props or process them to calculate the styles.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Updating values"),(0,i.kt)("td",{parentName:"tr",align:null},"Using ",(0,i.kt)("inlineCode",{parentName:"td"},"value.setValue")," method (which is an async call when the value is using native driver)"),(0,i.kt)("td",{parentName:"tr",align:null},"By updating ",(0,i.kt)("inlineCode",{parentName:"td"},".value")," property. Updating ",(0,i.kt)("inlineCode",{parentName:"td"},".value")," is sync when running on the UI thread, or async when running on the React Native JS thread.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Reading values"),(0,i.kt)("td",{parentName:"tr",align:null},"Register listener with ",(0,i.kt)("inlineCode",{parentName:"td"},"value.addListener")," to get all animated value updates."),(0,i.kt)("td",{parentName:"tr",align:null},"By reading ",(0,i.kt)("inlineCode",{parentName:"td"},".value")," property you can access the current value stored in the Shared Value (both from the UI and React Native JS thread).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Running animations"),(0,i.kt)("td",{parentName:"tr",align:null},"Use ",(0,i.kt)("inlineCode",{parentName:"td"},"Animated.spring"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Animated.timing")," (or others), pass Animated Value as an argument, and run ",(0,i.kt)("inlineCode",{parentName:"td"},".start()")," method to launch the animation."),(0,i.kt)("td",{parentName:"tr",align:null},"Update ",(0,i.kt)("inlineCode",{parentName:"td"},".value")," prop as usual while wrapping the target with one of the animation utility methods (e.g., ",(0,i.kt)("inlineCode",{parentName:"td"},"withTiming"),").")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Stopping animations"),(0,i.kt)("td",{parentName:"tr",align:null},"Hold the reference to the animation object returned by ",(0,i.kt)("inlineCode",{parentName:"td"},"Animated.timing")," and similar, then call ",(0,i.kt)("inlineCode",{parentName:"td"},"stopAnimation()")," method on it."),(0,i.kt)("td",{parentName:"tr",align:null},"Use ",(0,i.kt)("inlineCode",{parentName:"td"},"cancelAnimation")," method and pass the Shared Value that runs the animation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Interpolating"),(0,i.kt)("td",{parentName:"tr",align:null},"Use ",(0,i.kt)("inlineCode",{parentName:"td"},"interpolate()")," member method of Animated Value."),(0,i.kt)("td",{parentName:"tr",align:null},"Use an ",(0,i.kt)("inlineCode",{parentName:"td"},"interpolate")," method that takes a number and config similar to Animated's interpolate, then returns an interpolated number. This can be used along with ",(0,i.kt)("inlineCode",{parentName:"td"},"useDerivedValue")," if you need a Shared Value that automatically tracks the interpolation of another Shared Value.")))))}m.isMDXComponent=!0},510:function(e,t,a){t.Z=a.p+"assets/images/sv-immediate-163a607a1256501020dc30d515d78647.gif"},1152:function(e,t,a){t.Z=a.p+"assets/images/sv-interruption-74d74b266b4840a5f3ebc4cb7779c90f.gif"},5106:function(e,t,a){t.Z=a.p+"assets/images/sv-spring-8af0692299a5863f1b8cef55e187431e.gif"}}]);