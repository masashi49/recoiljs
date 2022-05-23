type Props = {
    id: number
    title: string
}

export const TotoItem = ({ id , title }: Props) => {
    return (
        <div key={id}>
            {title}
        </div>
    )
}
