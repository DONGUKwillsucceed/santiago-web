
interface Props {
    title: string;
}

export default function MainTitleContainer({title}: Props) {
    return (
        <div className="px-8 cursor-pointer">
            <h4 className="font-medium text-xl">{title}</h4>
        </div>
    )
}