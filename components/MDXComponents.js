import dynamic from 'next/dynamic'
import AnchorTag from '../components/AnchorTag'
import CodeBlock from '../components/CodeBlock'
import Image from '../components/Image'

// prettier-ignore
const MDXComponents = {
    a: props => <AnchorTag {...props} />,
    code: CodeBlock,
    img: (props) => <div className="nextImageWrapper"><Image  {...props} /></div>,
    Image: (props) => <div className="nextImageWrapper"><Image  {...props} /></div>,
    Btn: dynamic(() => import('../components/Btn')),
}

export default MDXComponents
