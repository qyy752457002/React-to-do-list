import React, { useState } from "react";

/*
  这段代码是一个简单的 React 应用，实现了一个待办事项列表（To-Do List）。
  让我们一步步解释代码：

  1. 首先，通过 `import React, { useState } from "react";` 导入了 React 库及其 `useState` 钩子函数。

  2. `useState` 是 React 提供的一个钩子函数，用于在函数组件中使用状态。
      这个函数返回一个数组，其中第一个元素是当前状态的值，第二个元素是一个函数，用于更新该状态的值。

  3. 在 `App` 组件中，通过 `useState` 创建了两个状态变量：

    - `inputText` 用于存储输入框中的文本内容。

    - `items` 用于存储待办事项的列表。

  4. `handleChange` 函数用于处理输入框内容变化的事件。

                    它通过 `event.target.value` 获取输入框中的新值，
                    并将其更新到 `inputText` 状态中。

  5. `addItem` 函数用于向待办事项列表中添加新项。

      它使用了函数式更新的形式，通过 `setItems` 更新 `items` 状态，

      使用先前的 `prevItems` 数组的内容以及 `inputText` 的内容添加一个新项，

      并将输入框内容清空。

  6. 在 `return` 语句中，返回了一个包含待办事项列表的 JSX 结构。具体来说：

    - 输入框使用 `onChange` 事件监听器调用 `handleChange` 函数来更新 `inputText` 状态。

    - 按钮使用 `onClick` 事件监听器调用 `addItem` 函数来添加新项。

    - 待办事项列表通过 `map` 方法遍历 `items` 数组，
        为每个待办事项创建一个 `<li>` 元素，
        并显示相应的文本内容。

  7. 最后，通过 `export default App;` 导出 `App` 组件，使其能够在其他文件中被引用和使用。

  总体来说，这段代码实现了一个简单的待办事项列表应用，
  用户可以在输入框中输入新的待办事项，
  并通过点击按钮将其添加到列表中。
*/

function App() {

  /*

    1. `useState` 是 React 提供的一个 Hook，它允许你在函数式组件中使用 state。

        通过调用 `useState(initialValue)`，你可以声明一个状态变量，并且在组件的生命周期中跟踪它的变化。
        
        `useState` 返回一个数组，包含当前状态的值和一个更新状态的函数。

    2. 在这段代码中，`useState("")` 表示声明了一个名为 `inputText` 的状态变量，并且初始化为一个空字符串。

      `setInputText` 是一个用于更新 `inputText` 状态变量的函数。

    3. 同样地，`useState([])` 声明了一个名为 `items` 的状态变量，初始化为空数组。

      `setItems` 则是用于更新 `items` 状态变量的函数。

    所以，这段代码的作用是声明了两个状态变量 `inputText` 和 `items`，并且初始化分别为空字符串和空数组。

    通常，你会在组件中使用 `inputText` 来跟踪输入框的值，而 `items` 用来跟踪一组项目的列表。
  */

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  /*
    这段代码定义了一个名为 `handleChange` 的函数。让我来解释一下代码的功能：

    1. `handleChange` 函数接收一个事件对象作为参数。

          这个事件对象通常是由 DOM 元素上的事件触发器（比如输入框的 `onChange` 事件）传递过来的。

    2. 在函数体内，通过 `event.target.value` 获取了触发事件的 DOM 元素的值。

          这通常是指输入框的当前值。

    3. 接着，`newValue` 变量被赋值为输入框的新值。

    4. 最后，调用 `setInputText(newValue)` 函数，将输入框的新值更新到 `inputText` 状态变量中。
      
          这将触发 React 重新渲染组件，并将新的输入框值反映到用户界面上。

    总之，`handleChange` 函数的目的是用来处理输入框值的变化，并将新的值更新到 React 组件的状态中。

    通常，它会与输入框的 `onChange` 事件一起使用，以便在用户输入时及时更新应用程序的状态。

  */

  // 接收一个事件对象作为参数
  // 这个事件对象通常是由 DOM 元素上的事件触发器（比如输入框的 `onChange` 事件）传递过来的。
  function handleChange(event) {
    // newValue是输入框的值
    const newValue = event.target.value;
    // 调用 `setInputText(newValue)` 函数，将输入框的新值更新到 `inputText` 状态变量中。
    setInputText(newValue);
  }

  /*

      这段代码定义了一个名为 `addItem` 的函数。让我来解释一下代码的功能：

    1. `addItem` 函数没有接收任何参数，它用于向项目列表中添加新项目。

    2. 在函数体内，通过调用 `setItems(prevItems => {...})` 更新项目列表的状态。

        这里使用了函数式的更新形式，传递了一个函数作为 `setItems` 的参数。
        React 会在调用这个函数时传递前一个状态值 `prevItems`。

    3. 在更新项目列表时，使用了展开运算符 `[...prevItems]` 来创建了一个新的数组，并将之前的项目列表中的所有项目复制到新数组中。

    4. 接着，使用 `inputText` 的当前值作为新的项目，将其添加到新数组的末尾。

    5. 最后，调用 `setInputText("")` 将输入框的值重置为空字符串，以便用户可以继续输入新的项目。

    这段代码的作用是在用户点击添加项目的按钮时，将当前输入框中的文本添加到项目列表中，并清空输入框，以便用户输入下一个项目。

  */

  function addItem() {
    // 调用 `setItems(prevItems => {...})` 更新项目列表的状态
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  /*

    这段代码是使用 JavaScript 中的箭头函数和 Array.map() 方法来创建一个列表元素数组。让我来解释一下：

      1. `items.map(todoItem => ...)`：
            这里使用了数组的 `map()` 方法。`map()` 方法是用于遍历数组的方法，
            它会对数组中的每个元素都调用一个提供的函数，
            并将函数返回的结果组成一个新的数组。

      2. `todoItem => ...`：
            这是一个箭头函数，它是 ES6 中的一种函数定义方式。
            
            箭头函数通常用于定义匿名函数，
            这里它接受一个参数 `todoItem`，
            该参数表示数组中的每个元素。

      3. `<li>{todoItem}</li>`：
        这是 JSX 语法，通常用于 React 应用程序中。它表示一个列表项元素 (`<li>`)，其中的文本内容是 `todoItem` 变量的值。

            因此，整个代码的作用是遍历 `items` 数组中的每个元素，
            对每个元素都创建一个 `<li>` 元素，并将其包含的文本设置为当前元素的值，
            最后返回一个由这些 `<li>` 元素组成的数组。
  */

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;