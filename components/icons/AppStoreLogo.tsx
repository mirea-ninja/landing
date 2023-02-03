import LogoProps from '@/components/icons/LogoProps'

export default function AppStoreLogo(props: LogoProps) {
  return (
    <svg
      viewBox='0 0 800 800'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      scale='0.8 0.8'
      className={props.className}
    >
      <path d='M643.384 298.176C639.672 301.056 574.136 337.984 574.136 420.096C574.136 515.072 657.528 548.672 660.024 549.504C659.64 551.552 646.776 595.52 616.056 640.32C588.664 679.744 560.056 719.104 516.536 719.104C473.016 719.104 461.816 693.824 411.576 693.824C362.616 693.824 345.208 719.936 305.4 719.936C265.592 719.936 237.816 683.456 205.88 638.656C168.888 586.048 139 504.32 139 426.752C139 302.336 219.896 236.352 299.512 236.352C341.816 236.352 377.08 264.128 403.64 264.128C428.92 264.128 468.344 234.688 516.472 234.688C534.712 234.688 600.248 236.352 643.384 298.176ZM493.624 182.016C513.528 158.4 527.608 125.632 527.608 92.864C527.608 88.32 527.224 83.712 526.392 80C494.008 81.216 455.48 101.568 432.248 128.512C414.008 149.248 396.984 182.016 396.984 215.232C396.984 220.224 397.816 225.216 398.2 226.816C400.248 227.2 403.576 227.648 406.904 227.648C435.96 227.648 472.504 208.192 493.624 182.016Z' />
    </svg>
  )
}
