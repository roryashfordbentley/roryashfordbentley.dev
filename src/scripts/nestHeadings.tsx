type HeadingNode = {
  id: string
  text: string
  level: number
  children: HeadingNode[]
}

export function nestHeadings(headings: HeadingNode[]): HeadingNode[] {
  const nested: HeadingNode[] = []
  const stack: HeadingNode[] = []

  headings.forEach((heading) => {
    const node = { ...heading, children: [] }

    while (stack.length > 0 && heading.level <= stack[stack.length - 1].level) {
      stack.pop()
    }

    if (stack.length === 0) {
      nested.push(node)
    } else {
      stack[stack.length - 1].children.push(node)
    }

    stack.push(node)
  })

  return nested
}
