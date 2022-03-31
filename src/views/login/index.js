import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
} from 'react'

import { useState } from 'react'

const Input = (props, ref) => {
    const refInput = useRef()
    useImperativeHandle(ref, () => ({
        focus: () => { refInput.current.focus() }
    }), [])

    useEffect(() => {
        refInput.current.value = props.initVlue
    }, [props.initVlue])

    return <input
        onChange={(e) => {
            props.onChange(e.target.value)
        }}
        ref={refInput}
    />

}

const Minput = forwardRef(Input)


export default () => {
    const re = useRef()
    const [num, setNum] = useState(1)
    return (
        <div>
            <Minput
                ref={re}
                initVlue={'hello'}
                onChange={(x) => {
                    console.log('onChange', x)
                }}
            />
            <button onClick={() => {
                re.current.focus()
            }}>获取焦点</button>

            <button onClick={() => setNum((value) => ++value)}>累加{num}</button>



        </div>
    )
}
