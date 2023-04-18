import { H1, H2, H3, P } from "./Style"
import { IHtagProps } from "./TagsTitle.props"

export const TagsTitles = ({ tag, children }: IHtagProps): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <H1>{children}</H1>
        case 'h2':
            return <H2>{children}</H2>
        case 'h3':
            return <H3>{children}</H3>
        case 'p':
            return <P>{children}</P>
        default:
            return <></>;
    }
}