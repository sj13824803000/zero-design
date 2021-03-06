import React from "react";
import PropTypes from "prop-types";
import { Icon } from "antd";

import cssClass from "./style.scss";
import Zlayout from "../Zlayout";
import ZpageLoading from "../ZpageLoading";
import { once } from "../zTool";

export class ZrightModal extends React.Component {
	static propTypes = {
		show: PropTypes.bool,
		onClose: PropTypes.func,
		getWrapperEl: PropTypes.func, //
		showLoading: PropTypes.bool,
		scroll: PropTypes.bool,
		getScrollInstance: PropTypes.func,
		onTransitionend: PropTypes.func,
		zIndex: PropTypes.number,
		width: PropTypes.string,
		name: PropTypes.string,
	};
	static defaultProps = {
		scroll: true,
		show: false,
		zIndex: 999,
		width: "90%",
	};
	state = {
		showCover: false,
	};
	hideClass = cssClass["is-right-hide"];
	closeModal = () => {
		this.props.onClose && this.props.onClose();
	};
	showAfter = (e) => {
		// if (e.target !== e.currentTarget) return;
		if (!this.props.show) {
			this.setState({
				showCover: false,
			});
		}
		this.props.onTransitionend && this.props.onTransitionend(this.props.show);
	};
	componentDidUpdate(prevProps) {
		if (this.props.show !== prevProps.show) {
			if (this.props.show) this.setState({ showCover: true });
			once(this.boxEl, "transitionend", this.showAfter);
		}
	}
	render() {
		return (
			<Zlayout.Template>
				<div
					className={cssClass["z-pop-cover"]}
					style={{ display: this.state.showCover ? "block" : "none", zIndex: this.props.zIndex - 1 }}
					onClick={this.closeModal}
				/>
				<div
					ref={(el) => (this.boxEl = el)}
					onClick={(e) => {
						e.nativeEvent.stopImmediatePropagation();
					}}
					className={`${cssClass["z-pop-content"]} app-body ${this.props.show ? "" : this.hideClass}`}
					style={{ width: this.props.width, zIndex: this.props.zIndex }}
					data-zgt_modal={this.props.name}
				>
					<Zlayout>
						<Zlayout.Zbody
							getWrapperEl={this.props.getWrapperEl}
							scroll={this.props.scroll}
							getScrollInstance={this.props.getScrollInstance}
						>
							{this.props.children}
						</Zlayout.Zbody>
					</Zlayout>
					<div className={`${cssClass["z-pop-close"]} z-flex-items-v-center`}>
						<Icon type="right" className={`${cssClass["z-btn"]}`} onClick={this.closeModal} />
					</div>
					<ZpageLoading showLoading={this.props.showLoading} />
				</div>
			</Zlayout.Template>
		);
	}
}
export default ZrightModal;
