import { IHtagProps } from "./Htag.props"
import { H1, H2, H3 } from "./Style"

export const Htag = ({ tag, children, className }: IHtagProps): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <H1 className={className}>{children}</H1>
        case 'h2':
            return <H2 className={className}>{children}</H2>
        case 'h3':
            return <H3 className={className}> {children}</H3>
        default:
            return <></>;
    }
}