export function useMDXComponents(components) {
  return {
    img: (props) => (
      <img
        {...props}
        style={{ width: '100%', borderRadius: '8px' }}
      />
    ),
    ...components,
  }
      }
