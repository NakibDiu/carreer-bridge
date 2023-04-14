import React from "react";
import DetailsHeader from "../Job details/DetailsHeader";

const Blogs = () => {
  return (
    <div className="p-16">
      <DetailsHeader>Blogs</DetailsHeader>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border-2 border-lime-100 p-3 space-y-4 rounded-lg">
          <h1 className="text-lg lg:text-xl font-semibold">
            When do we use ContextApi ?
          </h1>
          <div className="space-y-2 text-gray-700">
            <p>
              The Context API in React is a way to manage state that needs to be
              accessed by multiple components throughout your application. It's
              used to avoid the problem of "prop drilling," which can occur when
              you have deeply nested components that need to access the same
              data.{" "}
            </p>
            <p>
              With the Context API, you can create a "context" object that holds
              your state, and then pass that context down to child components as
              a "provider." Child components can then access the context using
              the "consumer" component, without having to pass props through
              each level. This can make your code more organized and easier to
              maintain, especially for large applications with many components.
              The Context API is particularly useful for sharing data such as
              user authentication information, theme settings, or language
              preferences.
            </p>
          </div>
        </div>
        <div className="border-2 border-lime-100 p-3 space-y-4 rounded-lg">
          <h1 className="text-lg lg:text-xl font-semibold">
            What is Custom hook ?
          </h1>
          <div className="space-y-2 text-gray-700">
            <p>
              In React, a custom hook is a JavaScript function that starts with
              the prefix "use" and allows you to share stateful logic between
              multiple components. It allows you to extract and reuse
              functionality that would otherwise need to be duplicated in
              multiple components, making your code more modular and easier to
              maintain.
            </p>
            <p>
              Custom hooks can encapsulate complex logic, including handling API
              requests, managing form states, and caching data, among other
              things. They allow you to create reusable logic and abstract it
              away from your components. Custom hooks can also be used to
              abstract away behavior that would otherwise clutter up your
              components, resulting in cleaner and more maintainable code.
            </p>
          </div>
        </div>
        <div className="border-2 border-lime-100 p-3 space-y-4 rounded-lg">
          <h1 className="text-lg lg:text-xl font-semibold">What is UseRef ?</h1>
          <div className="space-y-2 text-gray-700">
            <p>
              In React, the useRef hook is used to create a reference to an
              element in the DOM or to store mutable values that don't trigger a
              re-render of the component. It returns a mutable ref object, which
              you can attach to any element in the JSX using the ref attribute.
            </p>
            <p>
              This allows you to access and manipulate the element's properties
              and methods, such as the value of an input field or the scrollTo()
              method of a scrollable element. Additionally, useRef can be used
              to store values that persist across renders, without triggering a
              re-render of the component. This can be useful for storing
              temporary state or caching values, among other things.
            </p>
          </div>
        </div>
        <div className="border-2 border-lime-100 p-3 space-y-4 rounded-lg">
          <h1 className="text-lg lg:text-xl font-semibold">
            What is useMemo ?
          </h1>
          <div className="space-y-2 text-gray-700">
            <p>
              In React, the useMemo hook is used to memoize expensive
              computations, so that they are only executed when their inputs
              change. It takes two arguments: a function that computes a value,
              and an array of dependencies. If any of the dependencies change,
              the function is re-executed and the value is updated. Otherwise,
              the memoized value is returned from a cache.
            </p>
            <p>
              This can improve the performance of your application by avoiding
              unnecessary re-computations of values that haven't changed.
              useMemo can be used for complex computations, such as filtering or
              sorting large data sets, or for expensive rendering logic that
              doesn't need to be updated on every render.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
