interface ButtonLabelProps {
  text: string
}

export function ButtonLabel({ text }: ButtonLabelProps) {
  return <span>{ text }</span>
}