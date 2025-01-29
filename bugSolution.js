```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //This effect runs only once after the initial render
    console.log('Effect ran');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```