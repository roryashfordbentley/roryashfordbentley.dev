import './LinkButton.module.css'

interface LinkButtonProps {
  href: string
  title: string
  variant?: string
}

export const LinkButton = (props: LinkButtonProps) => {
  let linkClassName = 'link-button'

  if (props.variant == 'x') {
    linkClassName = `${linkClassName} ${linkClassName}--x`
  }

  return (
    <a className={linkClassName} href={props.href}>
      {props.title}
    </a>
  )
}
