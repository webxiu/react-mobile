import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

/**
 * 使用:
	useEffect(() => {
		re.current.focus()
	}, [])
		<FocusInput ref={re} initVlue={'hello'} />
 */

/** 自动获取焦点 */
const FocusInput = forwardRef((props, ref) => {
	const refInput = useRef();
	useImperativeHandle(ref, () => ({
		focus: () => { refInput.current.focus(); },
	}), []);

	useEffect(() => {
		refInput.current.value = props.initVlue;
	}, [props.initVlue]);

	return (
		<input
			ref={refInput}
			onChange={(e) => { props.onChange(e.target.value); }}
		/>
	);
});
export default FocusInput;
