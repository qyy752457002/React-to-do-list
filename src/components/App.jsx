import React, { useState } from "react";

/*

这段代码是一个简单的 React 应用，实现了一个待办事项列表（To-Do List）。让我们一步步解释代码：

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
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

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