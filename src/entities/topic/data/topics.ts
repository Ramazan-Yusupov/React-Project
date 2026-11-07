import type { Topic } from "../model/topic.types";

export const topics: Topic[] = [
  {
    id: "use-state",
    title: "useState",
    description: "Хук для управления состоянием компонента.",
    category: "Hooks",
    code: `const [count, setCount] = useState(0);`,
    result: "Счётчик с изменяемым значением.",
    comparison:
      "useState проще для независимого состояния, useReducer удобен для сложной логики.",
    practice: "Создай счётчик с кнопками увеличения и уменьшения.",
  },
];
