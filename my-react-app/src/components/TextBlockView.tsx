import { TextBlock } from "../model/types";

type TextBlockViewProps = {
    textBlock: TextBlock;
    setTextBlocks: (textBlock: TextBlock) => void;
};

function TextBlockView(props: TextBlockViewProps) {
    const { textBlock, setTextBlocks } = props;

    return (
        <div style={{}}>
            <p></p>
        </div>
    );
}
